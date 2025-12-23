if (!$response.body) {
  $done({});
}
let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);
if (url.includes("api/invoke?SID=CMS-GetMergePromoEntry")) {
    obj.data=[];
    // obj.state=0;
}
if (url.includes("api/invoke?SID=CMS-GetConfigRelease")) {
    obj.data.ConfigContent={};
    // obj.state=0;
}
if (url.includes("api/invoke?SID=ProSrv-GetInviteNewActivityInfo")) {
    obj.data={};
    // obj.state=0;
}
if (url.includes("api/invoke?SID=CMS-GetSysReleaseWithLatest")) {
    obj.data={};
    // obj.state=0;
}
if (url.includes("api/invoke?SID=CMS-GetCityChangedResources")) {
    obj.data=[];
    // obj.state=0;
}
if (url.includes("api/invoke?SID=App-CheckHealthStateV2")) {
    obj.state=0;
}
body = JSON.stringify(obj);
$done({ body });