//只兼容loon
var region = "zhejiang";
var city = "hangzhou";

const loondq = $persistentStore.read("地区");
if (loondq) {
  region = loondq;
}

// 新地址
const query_addr = `https://m.qiyoujiage.com/${region}/${city}.shtml`;

$httpClient.get(
  {
    url: query_addr,
    headers: {
      referer: "https://m.qiyoujiage.com/",
      "user-agent":
        "Mozilla/5.0 (iPhone; CPU iPhone OS 15_0 like Mac OS X) AppleWebKit/605.1.15"
    }
  },
  (error, response, data) => {
    if (error) {
      console.log(`解析油价信息失败, URL=${query_addr}`);
      $done();
      return;
    }

    // 新正则
    const reg_price = /<dt>(.*?)<\/dt>\s*<dd>([\d\.]+)\(元\)<\/dd>/g;

    var prices = [];
    var m;

    while ((m = reg_price.exec(data)) !== null) {
      prices.push({
        name: m[1].replace("杭州", ""),
        value: `${m[2]} 元/L`
      });
    }

    // 调整信息
    const reg_adjust =
      /<div class="tishi">\s*<span>(.*?)<\/span><br\/>\s*([\s\S]*?)<br\/>/;

    var adjust_date = "";
    var adjust_value = "";
    var adjust_trend = "";

    const match = data.match(reg_adjust);

    if (match) {
      adjust_date = match[1];
      adjust_value = match[2];

      adjust_trend =
        adjust_value.indexOf("下调") > -1 ||
        adjust_value.indexOf("下跌") > -1
          ? "↓"
          : "↑";
    }

    const friendly_tips = `${adjust_date} ${adjust_trend}`;

    if (prices.length === 0) {
      console.log("油价解析失败");
      $done();
      return;
    }

    var text = "";
    prices.forEach(p => {
      text += `${p.name}  ${p.value}\n`;
    });

    $notification.post(
      "实时油价信息",
      friendly_tips,
      text,
      { url: query_addr }
    );

    $done();
  }
);