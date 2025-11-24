/**********************************
 Lynk&Co 自动签到脚本（Loon）
**********************************/

const url = "https://h5-api.lynkco.com/up/api/v1/user/sign";
const token = $persistentStore.read("lynkco_token");

if (!token) {
  $notification.post("领克签到", "❌ 缺少 Token", "请先打开签到页面以获取 Token");
  $done();
}

const headers = {
  "Host": "h5-api.lynkco.com",
  "Content-Type": "application/json",
  "User-Agent": "Mozilla/5.0",
  "token": token
};

$loon.post(url, { headers, body: "{}" }, (err, resp, body) => {
  if (err) {
    $notification.post("领克签到", "❌ 请求失败", err.toString());
    return $done();
  }

  try {
    const data = JSON.parse(body);
    if (data?.code === 200) {
      $notification.post("领克签到", "✔ 成功", data?.data?.msg || "");
    } else {
      $notification.post("领克签到", "❌ 失败", data?.message || body);
    }
  } catch (e) {
    $notification.post("领克签到", "❌ 解析错误", e.toString());
  }

  $done();
});