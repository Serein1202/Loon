if (!$response.body) {
    $done({});
}
let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);
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
body = JSON.stringify(obj);
$done({ body });