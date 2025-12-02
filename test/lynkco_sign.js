const nonce = Math.random().toString(36).substring(2, 12);
console.log(nonce);
var url_fetch_sign = {
    url: "https://h5-api.lynkco.com/up/api/v1/user/sign",
    headers: {
        
    }
}
// 发起 GET 请求
fetch(url_fetch_sign.url, {
    method: "POST",
    headers: url_fetch_sign.headers
})
    .then(response => {
        if (!response.ok) throw new Error("网络错误：" + response.status);
        return response.json(); // 返回 JSON 数据
    })
    .then(data => {
        console.log("请求成功，返回数据：", data);
    })
    .catch(error => {
        console.error("请求失败：", error);
    });