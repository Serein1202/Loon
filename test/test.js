/**********************************
ikuuu 获取 Token（Loon）
**********************************/

let cookie = $request.headers["Cookie"];

if (cookie) {
  $persistentStore.write(cookie, "ikuuu_Cookie");
  $notification.post("ikuuu Cookie", "✔ 获取成功", cookie);
} else {
  $notification.post("ikuuu Cookie", "❌ 获取失败", "未找到 token 字段");
}

$done({});