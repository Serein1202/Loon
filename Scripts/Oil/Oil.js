// Loon 油价脚本
let url = "http://m.qiyoujiage.com/zhejiang/hangzhou.shtml";
let headers = {
    'Priority': 'u=0, i',
    'User-Agent': 'Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Mobile/15E148 Safari/604.1',
    'Accept-Language': 'zh-CN,zh-Hans;q=0.9',
    'Connection': 'keep-alive',
    'Host': 'm.qiyoujiage.com',
    'Accept': 'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Upgrade-Insecure-Requests': '1',
    'Referer': 'http://m.qiyoujiage.com/zhejiang.shtml',
    'Accept-Encoding': 'gzip, deflate',
};

var params = {
    url: url,
    timeout: 5000,
    headers: headers,
};

$httpClient.get(params, function (error, response, data) {
    if (error || !data) {
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

// 解析下次油价调整时间
let timeReg = /下次油价(\d+月\d+日\d+时)调整/;
let timeMatch = data.match(timeReg);

let nextTime = timeMatch ? timeMatch[1] : "未知";

// 解析涨跌预测
let trendReg = /预计(上调|下调|搁浅)[^<\n]*/;
let trendMatch = data.match(trendReg);

let trend = "未知";

if (trendMatch) {
    trend = trendMatch[0].replace("预计", "");
}

    let text =
        `92号汽油  ${prices["92"]} 元/L
95号汽油  ${prices["95"]} 元/L
98号汽油  ${prices["98"]} 元/L
0号柴油  ${prices["柴油"]} 元/L
下次调整：${nextTime}
预计：${trend}`;

    $notification.post(
        "杭州今日油价",
        "",
        text,
        { url: url }
    );
    // console.log("data", data);
    $done();
});


