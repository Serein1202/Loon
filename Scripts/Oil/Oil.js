// Loon 油价 Pro 版

let prov = "浙江";
let city = "杭州";

let oil_api = `https://api.qqsuu.cn/api/dm-oilprice?prov=${encodeURIComponent(prov)}&city=${encodeURIComponent(city)}`;

$httpClient.get(oil_api, function(error, response, data) {

if (error) {
    console.log("油价获取失败");
    $done();
    return;
}

let obj;

try {
    obj = JSON.parse(data);
} catch(e) {
    console.log("油价解析失败");
    $done();
    return;
}

if (!obj.data) {
    console.log("接口返回异常");
    $done();
    return;
}

let oil = obj.data;

let text =
`92号汽油  ${oil.oil92}
95号汽油  ${oil.oil95}
98号汽油  ${oil.oil98}
0号柴油  ${oil.oil0}`;

let tip = oil.update_time ? `更新时间：${oil.update_time}` : "";

$notification.post(
`${city}今日油价`,
tip,
text
);

$done();

});