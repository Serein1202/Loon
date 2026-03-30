if (!$response.body) {
    $done({});
}
let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);
let imgUrl = "https://raw.githubusercontent.com/Serein1202/Loon/main/test/Sinopec/404.png";
let html = `
<html>
<head><title>404</title></head>
<body style="margin:0">
<img src="${imgUrl}" style="width:100%;height:100%;object-fit:contain;">
</body>
</html>
`;
$done({
    status: 200,
    headers: {
        "Content-Type": "text/html"
    },
    body: html
});