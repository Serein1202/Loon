if (!$response.body) {
  $done({});
}
let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);
if(url.includes("/apph5/webApiV2/car/user/function")){
    obj.data.adVO= null;
    obj.data.menuVO= null;
}

body = JSON.stringify(obj);
$done({ body });