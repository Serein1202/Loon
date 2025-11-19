// 自动抓取领克签到 Cookie
const ck = $request.headers["Cookie"] || $request.headers["cookie"];

if (ck) {
  const old = $persist.read("lynk_cookie");
  if (old !== ck) {
    $persist.store("lynk_cookie", ck);
    $notification.post("领克 Cookie 已更新 ✅", "", ck);
  } else {
    $notification.post("领克 App 已打开 ℹ️", "", "Cookie 未变化");
  }
} else {
  $notification.post("未捕获到 Cookie ❌", "", "请打开领克 App 的签到页面");
}

$done({});