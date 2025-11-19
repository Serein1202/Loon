/**
 * LynkCo 自动抓取 Cookie
 * Loon rewrite 脚本
 */

let cookie = $request.headers['Cookie'] || $request.headers['cookie'];

if (cookie) {
    $persistentStore.write(cookie, 'lynkco_acw_tc');
    $notification.post('LynkCo Cookie 保存成功 ✅', '', cookie);
} else {
    $notification.post('LynkCo Cookie 获取失败 ❌', '', '未找到 Cookie');
}

$done({});