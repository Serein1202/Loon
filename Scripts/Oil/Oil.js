// Loon 油价脚本
let url = "http://m.qiyoujiage.com/zhejiang/hangzhou.shtml";
let headers = {
    'Priority':'u=0, i',
    'User-Agent':'Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Mobile/15E148 Safari/604.1',
    'Accept-Language':'zh-CN,zh-Hans;q=0.9',
    'Connection':'keep-alive',
    'Host':'m.qiyoujiage.com',
    'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Upgrade-Insecure-Requests':'1',
    'Referer':'http://m.qiyoujiage.com/zhejiang.shtml',
    'Accept-Encoding':'gzip, deflate',
};

var params = {
    url:url,
    timeout:5000,
    headers:headers,
};

$httpClient.get(params, function(errormsg,response,data) {
    if (errormsg) {
        console.log(errormsg);
    } else {
        console.log("Response Status: " + response.status);
        console.log("Response Headers: " + JSON.stringify(response.headers));
        console.log("Response Body: " + data);
    }
    if (errormsg || !data) {
    console.log("油价获取失败");
    $done();
    return;
}

let prices = {};

let reg = /(92|95|98|0)号[^0-9]*([\d\.]+)\(元\)/g;

let match;

while ((match = reg.exec(data)) !== null) {

    let type = match[1];
    let price = match[2];

    if (type == "0") {
        prices["柴油"] = price;
    } else {
        prices[type] = price;
    }
}

if (!prices["92"]) {
    console.log("解析油价信息失败");
    $done();
    return;
}

let text =
`92号汽油  ${prices["92"]} 元/L
95号汽油  ${prices["95"]} 元/L
98号汽油  ${prices["98"]} 元/L
0号柴油  ${prices["柴油"]} 元/L`;

$notification.post(
"杭州今日油价",
"",
text,
{url:url}
);
// console.log("data", data);
    $done();
});


