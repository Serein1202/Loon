/**********************************
 Lynk&Co 获取 Token（Loon）
**********************************/

let token = $request.headers["token"];

if (token) {
  $persistentStore.write(token, "lynkco_token");
  $notification.post("领克 Token", "✔ 获取成功", token);
} else {
  $notification.post("领克 Token", "❌ 获取失败", "未找到 token 字段");
}

$done({});