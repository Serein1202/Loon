if (!$response.body) {
  $done({});
}
let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);
obj.data=[
    "chongzhi",
    "dingdan",
    "yijieban"
]
body = JSON.stringify(obj);
$done({ body });