// Loon 油价脚本

let url = "https://m.qiyoujiage.com/zhejiang/hangzhou.shtml";

$httpClient.get(url, function (error, response, data) {

if (error) {
    console.log("油价获取失败");
    $done();
    return;
}

// 只截取油价区域
let section = data.match(/<div class="content_youjia">([\s\S]*?)<\/div>/);

if (!section) {
    console.log("未找到油价区域");
    $done();
    return;
}

let html = section[1];

let prices = {};
let reg = /<dt>(.*?)<\/dt>\s*<dd>([\d\.]+)\(元\)<\/dd>/g;

let m;

while ((m = reg.exec(html)) !== null) {

    let name = m[1].replace("杭州","").trim();
    let price = m[2];

    prices[name] = price;

}

if (Object.keys(prices).length === 0) {

    console.log("解析油价信息失败");
    $done();
    return;

}

let text =
`${prices["92号汽油"] || "--"} 元/L  92号汽油
${prices["95号汽油"] || "--"} 元/L  95号汽油
${prices["98号汽油"] || "--"} 元/L  98号汽油
${prices["0号柴油"] || "--"} 元/L  0号柴油`;

$notification.post(
"杭州今日油价",
"",
text,
{url:url}
);

$done();

});