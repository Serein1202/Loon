if (!$response.body) {
    $done({});
}
let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);
obj.data.homePageFrame = [
    {
        "startTime": "2019.11.02 00:00:00",
        "endTime": "2019.11.03 23:59:59",
        "frame": [
            {
                "moduleType": 4,
                "moduleName": "快速入口",
                "moduleNameShowFlag": false,
                "moduleSort": 1
            },
            {
                "moduleType": 7,
                "moduleName": "电站列表",
                "moduleNameShowFlag": true,
                "listSize": 15,
                "moduleSort": 2
            }
        ]
    }
];
body = JSON.stringify(obj);
$done({ body });