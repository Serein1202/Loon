// Loon 油价脚本

let url = "http://www.qiyoujiage.com/zhejiang/hangzhou.shtml";

$httpClient.get(url, function(error, response, data) {

// if (error || !data) {
//     console.log("油价获取失败");
//     $done();
//     return;
// }

// let prices = {};

// let reg = /(92|95|98|0)号[^0-9]*([\d\.]+)\(元\)/g;

// let match;

// while ((match = reg.exec(data)) !== null) {

//     let type = match[1];
//     let price = match[2];

//     if (type == "0") {
//         prices["柴油"] = price;
//     } else {
//         prices[type] = price;
//     }
// }

// if (!prices["92"]) {
//     console.log("解析油价信息失败");
//     $done();
//     return;
// }

// let text =
// `92号汽油  ${prices["92"]} 元/L
// 95号汽油  ${prices["95"]} 元/L
// 98号汽油  ${prices["98"]} 元/L
// 0号柴油  ${prices["柴油"]} 元/L`;

// $notification.post(
// "杭州今日油价",
// "",
// text,
// {url:url}
// );
console.log("data", data);

$done();

});