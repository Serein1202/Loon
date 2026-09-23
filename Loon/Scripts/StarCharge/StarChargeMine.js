if (!$response.body) {
	$done({});
}
let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);
obj.data = [
	{
		"title": "充电服务",
		"sort": 0,
		"itemList": [
        {
          "id": "b4202b3e-e211-45b8-968e-ba3de0d58bf9",
          "refUrl": "16",
          "refType": 0,
          "title": "我的订单",
          "isUser": 1,
          "picUrl": "https://app-cdn.starcharge.com/webDir/32b71e45-36d3-7565-dc1b-657d3f50022b.png",
          "startVersion": "8.2.0",
          "endVersion": "",
          "rule": "{\"startVersion\":\"8.2.0\",\"endVersion\":\"\"}",
          "appId": null,
          "path": null,
          "isFullScreen": 0
        },
        {
          "id": "49611675-70d0-459d-b31f-2a8fe9e2c795",
          "refUrl": "https://app-cdn.starcharge.com/wap/index.html#/balance",
          "refType": 1,
          "title": "充值提现",
          "isUser": 1,
          "picUrl": "https://app-cdn.starcharge.com/webDir/40cc6fad-ef84-b39e-d652-f6d721b2a7cd.png",
          "startVersion": "7.6.0",
          "endVersion": "",
          "rule": "{\"startVersion\":\"7.6.0\",\"endVersion\":\"\"}",
          "appId": null,
          "path": null,
          "isFullScreen": 0
        },
        {
          "id": "8767eba2-cd74-4861-8de3-a5f3ef55222b",
          "refUrl": "https://app-cdn.starcharge.com/wap/index.html#/invoiceEntry",
          "refType": 1,
          "title": "开票",
          "isUser": 1,
          "picUrl": "https://app-cdn.starcharge.com/webDir/5d449db8-3b4e-f192-441c-52aef60e2003.png",
          "startVersion": "7.6.0",
          "endVersion": "",
          "rule": "{\"startVersion\":\"7.6.0\",\"endVersion\":\"\"}",
          "appId": null,
          "path": null,
          "isFullScreen": 0
        },
        {
          "id": "d3ca60a9-4c59-40ec-852f-f295c6033ec7",
          "refUrl": "4",
          "refType": 0,
          "title": "收藏电站",
          "isUser": 1,
          "picUrl": "https://app-cdn.starcharge.com/webDir/7fdb360d-3d81-61d4-3d4b-2d83e63d2c62.png",
          "startVersion": "7.17.0",
          "endVersion": "",
          "rule": "{\"startVersion\":\"7.17.0\",\"endVersion\":\"\"}",
          "appId": null,
          "path": null,
          "isFullScreen": 0
        }
      ]
	},
	{
		"title": "更多服务",
		"sort": 4,
		"itemList": [
			{
				"id": "0b58c583-a71b-4df8-8fb6-4c1a7c84cad6",
				"refUrl": "https://app-cdn.starcharge.com/wap/index.html#/allMessageList",
				"refType": 1,
				"title": "我的消息",
				"isUser": 1,
				"picUrl": "https://app-cdn.starcharge.com/webDir/5321abca-328c-a51e-c92f-e6f455033c66.png",
				"startVersion": "8.2.0",
				"endVersion": "",
				"rule": "{\"startVersion\":\"8.2.0\",\"endVersion\":\"\"}",
				"appId": null,
				"path": null,
				"isFullScreen": 0
			},
			{
				"id": "4d5038e9-26cb-4a2a-ac0e-5196958089ea",
				"refUrl": "https://customer-center-h5-web.starcharge.com/#/customerCenter/index",
				"refType": 1,
				"title": "客服中心",
				"isUser": 1,
				"picUrl": "https://app-cdn.starcharge.com/webDir/1e12e6a5-949d-31aa-cda0-916726e96633.png",
				"startVersion": "8.2.0",
				"endVersion": "",
				"rule": "{\"startVersion\":\"8.2.0\",\"endVersion\":\"\"}",
				"appId": null,
				"path": null,
				"isFullScreen": 1
			}
		]
	}];
body = JSON.stringify(obj);
$done({ body });