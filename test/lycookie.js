const lk = new ToolKit(`阿里云盘签到`, `AliYunPanCheckIn`, {"httpApi": "ffff@10.0.0.19:6166"})
function getCookie() {
    // 判断是否是领克签到接口
    if (lk.isGetCookie(/\/user\/sign\/sign\/info/)) {
        lk.log(`开始获取领克Cookie`);
        let data = lk.getResponseBody();
        // lk.log(`获取到的Cookie：${data}`)
        try {
            // 这里我们直接获取 Cookie 而不是 JSON 内容
            let cookie = lk.getRequestHeader("Cookie") || lk.getRequestHeader("cookie");
            if (cookie) {
                lk.setVal(lynkCookieKey, cookie);
                lk.appendNotifyInfo('🎉成功获取领克签到Cookie，可以关闭相应脚本');
            } else {
                lk.execFail();
                lk.appendNotifyInfo('❌获取领克Cookie失败，请稍后再试');
            }
        } catch (e) {
            lk.execFail();
            lk.appendNotifyInfo('❌获取领克Cookie失败');
        }
        lk.msg('');
    }
}