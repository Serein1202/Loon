/**********************************
 Lynk&Co 自动签到脚本（Loon）
 自动从持久化存储读取 Cookie
**********************************/

const url = "https://h5-api.lynkco.com/up/api/v1/user/sign";
const cookie = $persistentStore.read("lynkco_cookie");

if (!cookie) {
  $notification.post("领克签到", "❌ 缺少 Cookie", "请先进入签到页面获取 Cookie");
  $done();
}

const headers = {
  "Host": "h5-api.lynkco.com",
  "Cookie": cookie,
  "Content-Type": "application/json",
  "User-Agent": "Mozilla/5.0 (iPhone; CPU iPhone OS 16_2 like Mac OS X)"
};

$loon.post(url, { headers, body: "{}" }, (err, resp, body) => {
  if (err) {
    $notification.post("领克签到", "❌ 请求失败", err.toString());
    return $done();
  }

  try {
    const data = JSON.parse(body);

    if (data?.code === 200) {
      $notification.post("领克签到", "✔ 签到成功", data?.data?.msg || "");
    } else {
      $notification.post("领克签到", "❌ 签到失败", data?.message || body);
    }
  } catch (e) {
    $notification.post("领克签到", "❌ 解析失败", e.toString());
  }

  $done();
});