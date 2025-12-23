if (!$response.body) {
    $done({});
}
let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);
if (url.includes("/apph5/webApiV2/car/user/function")) {
    obj.data = {
        "adVO": [],
        "menuVO": []
    };
}
if (url.includes("/apph5/webApiV2/system/systemInfo")) {
    obj.data.aiChatSwitch = 0;
}
body = JSON.stringify(obj);
$done({ body });