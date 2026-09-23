if (!$response.body) {
  $done({});
}
let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);
if (url.includes("api/wechat_v2/invite")) {
}

body = JSON.stringify(obj);
$done({ body });
