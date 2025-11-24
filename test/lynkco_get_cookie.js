/**********************************
 Lynk&Co 自动获取 Cookie（Loon）
 打开签到页面即可自动保存 Cookie
**********************************/

const cookie = $request.headers["Cookie"] || $request.headers["cookie"];

if (cookie) {
  $persistentStore.write(cookie, "lynkco_cookie");
  $notification.post("领克 Cookie", "✔ 获取成功", cookie);
} else {
  $notification.post("领克 Cookie", "❌ 获取失败", "未捕获到 Cookie，请重新进入签到页面");
}

$done({});