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
    "homeEntrances": "[]",
    "oldPaymentOptions": 0
}
body = JSON.stringify(obj);
$done({ body });