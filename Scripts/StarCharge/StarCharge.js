if (!$response.body) {
	$done({});
}
let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);
if (url.includes("/app/apiV2/app/menu/v2")) {
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
					"picUrl": "https://app-cdn.starcharge.com/webDir/f7bb89ed-fa17-471b-0ddf-398be74239eb.png",
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
					"picUrl": "https://app-cdn.starcharge.com/bab97e7a-65a0-4a28-9173-afc1337d94c7.PNG",
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
					"picUrl": "https://app-cdn.starcharge.com/6dc47eb5-eea3-4349-9218-e19bea9b8d93.PNG",
					"startVersion": "7.6.0",
					"endVersion": "",
					"rule": "{\"startVersion\":\"7.6.0\",\"endVersion\":\"\"}",
					"appId": null,
					"path": null,
					"isFullScreen": 0
				},
				{
					"id": "8934c9d4-dfda-47c4-8f94-3f4bb5dba1bc",
					"refUrl": "34",
					"refType": 0,
					"title": "车辆绑定",
					"isUser": 1,
					"picUrl": "https://app-cdn.starcharge.com/71321c35-410d-4403-8ca4-4886193400e0.PNG",
					"startVersion": "7.6.0",
					"endVersion": "",
					"rule": "{\"startVersion\":\"7.6.0\",\"endVersion\":\"\"}",
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
				},
				{
					"id": "1c4250a9-67ea-459b-8604-2486c09cb551",
					"refUrl": "10",
					"refType": 0,
					"title": "一号多充",
					"isUser": 1,
					"picUrl": "https://app-cdn.starcharge.com/000e8352-2692-42d8-b2a4-5a3cce5be635.PNG",
					"startVersion": "7.6.0",
					"endVersion": "",
					"rule": "{\"startVersion\":\"7.6.0\",\"endVersion\":\"\"}",
					"appId": null,
					"path": null,
					"isFullScreen": 0
				},
				{
					"id": "f20a32b9-8c9f-432e-bbc5-f56a44dc2aae",
					"refUrl": "https://scm-app-h5.starcharge.com/quickCharging/manage",
					"refType": 1,
					"title": "即插即充",
					"isUser": 1,
					"picUrl": "https://app-cdn.starcharge.com/webDir/3c98fe1e-62a8-c6fa-e0b8-e927d37f1e7b.png",
					"startVersion": "7.9.5",
					"endVersion": "",
					"rule": "{\"startVersion\":\"7.9.5\",\"endVersion\":\"\"}",
					"appId": null,
					"path": null,
					"isFullScreen": 0
				},
				{
					"id": "5154de39-6ef4-4eae-a34f-d37384700cab",
					"refUrl": "https://app-taro.starcharge.com/pages/introductionPage/drawTheGun/index",
					"refType": 1,
					"title": "无法拔枪",
					"isUser": 1,
					"picUrl": "https://app-cdn.starcharge.com/webDir/66c39ce2-ef80-02f2-3cd2-247610eafde8.png",
					"startVersion": "7.40",
					"endVersion": "",
					"rule": "{\"startVersion\":\"7.40\",\"endVersion\":\"\"}",
					"appId": null,
					"path": null,
					"isFullScreen": 1
				},
				{
					"id": "367ce82e-ddf2-4152-b943-7d8def5dda94",
					"refUrl": "4",
					"refType": 0,
					"title": "收藏电站",
					"isUser": 1,
					"picUrl": "https://app-cdn.starcharge.com/webDir/8ee3999e-cd6b-8a30-ef11-32000a2626a0.png",
					"startVersion": "7.17.0",
					"endVersion": "",
					"rule": "{\"startVersion\":\"7.17.0\",\"endVersion\":\"\"}",
					"appId": null,
					"path": null,
					"isFullScreen": 0
				}
			]
		}];
}
if (url.includes("/app/v2/apiV2/system/info")) {
	obj.data = {
		"isEmergencyModel": 0,
		"androidLogSwitch": 0,
		"iosLogSwitch": 1,
		"androidTaroSwitch": 1,
		"iosTaroSwitch": 1,
		"chargingOrderKwSwitch": 1,
		"plugVinSwitch": 1,
		"privateStubNewVersionSwitch": 1,
		"operateCategoryIconSwitch": 1,
		"operateCategoryIconUrl": "https://app-taro.starcharge.com/pages/introductionPage/index?title=电站运营类型&images=operationType-1,operationType-2",
		"aiChatSwitch": 1,
		"chargeCodeAdSwitch": 1,
		"chargeCodeAdSecond": 3,
		"connectingAdSwitch": 1,
		"optionMemberShow": 1,
		"eightTwoEgihtlabSwitch": 0,
		"pendingPaymentMemberShow": 0,
		"memberPageSurplusdayShow": 0,
		"memberBuySurplusdayShow": 0,
		"batteryReportOriginPrice": "9.9",
		"batteryReportSalePrice": "1",
		"appAdvertisementSort": 1,
		"homeEntrances": "[{\"name\":\"券包\",\"refType\":0,\"refUrl\":\"40\",\"isUser\":1,\"icon\":\"https://activity-h5.starcharge.com/wechat/wechatImgs/index/entrances-coupon.png\"},{\"name\":\"抽奖\",\"refType\":1,\"refUrl\":\"https://osmp-h5.starcharge.com/#/pages/luckyDraw/index?activityId=f9642caf-391e-472d-a875-372343152257\",\"isUser\":1,\"icon\":\"https://activity-h5.starcharge.com/wechat/wechatImgs/index/entrances-lottery.png\"},{\"name\":\"会员\",\"refType\":\"1\",\"refUrl\":\"https://app-taro.starcharge.com/pages/member/purchase/index\",\"isUser\":1,\"icon\":\"https://activity-h5.starcharge.com/wechat/wechatImgs/index/entrances-vip.png\"}]",
		"oldPaymentOptions": 0
	}
}
body = JSON.stringify(obj);
$done({ body });