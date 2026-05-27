if (!$response.body) {
    $done({});
}
let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);

if (url.includes("text2voice/createTtsAudio")) {
obj.data.freeCount = 999;
}

if (url.includes("text2voice/checkCount")) {
obj.data.freeCount = 999;
}

if (url.includes("text2voice/consumeCount")) {
obj.data.totalCount = 999;
obj.data.currCount = 999;
}

body = JSON.stringify(obj);
$done({ body });