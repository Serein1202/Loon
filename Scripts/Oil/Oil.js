// Loon 油价脚本
let url = "http://m.qiyoujiage.com/zhejiang/hangzhou.shtml";
let headers = {
    'Priority':'u=0, i',
    'User-Agent':'Mozilla/5.0 (iPhone; CPU iPhone OS 18_7 like Mac OS X) AppleWebKit/605.1.15 (KHTML, like Gecko) Version/26.4 Mobile/15E148 Safari/604.1',
    'Accept-Language':'zh-CN,zh-Hans;q=0.9',
    'Connection':'keep-alive',
    'Host':'m.qiyoujiage.com',
    'Accept':'text/html,application/xhtml+xml,application/xml;q=0.9,*/*;q=0.8',
    'Upgrade-Insecure-Requests':'1',
    'Referer':'http://m.qiyoujiage.com/zhejiang.shtml',
    'Accept-Encoding':'gzip, deflate',
};

var params = {
    url:url,
    timeout:5000,
    headers:headers,
};

$httpClient.get(params, function(error,response,data) {
    if (error) {
      console.log(`解析油价信息失败`);
      done({});
    } else {
      const reg_price =
        /<dl>[\s\S]+?<dt>(.*油)<\/dt>[\s\S]+?<dd>(.*)\(元\)<\/dd>/gm;

      var prices = [];
      var m = null;

      while ((m = reg_price.exec(data)) !== null) {
        // This is necessary to avoid infinite loops with zero-width matches
        if (m.index === reg_price.lastIndex) {
          reg_price.lastIndex++;
        }

        prices.push({
          name: m[1],
          value: `${m[2]} 元/L`,
        });
      }

      // 解析油价调整趋势
      var adjust_date = "";
      var adjust_trend = "";
      var adjust_value = "";

      const reg_adjust_tips =
        /<div class="tishi"> <span>(.*)<\/span><br\/>([\s\S]+?)<br\/>/;
      const adjust_tips_match = data.match(reg_adjust_tips);

      if (adjust_tips_match && adjust_tips_match.length === 3) {
        adjust_date = adjust_tips_match[1].split("价")[1].slice(0, -2);

        adjust_value = adjust_tips_match[2];
        adjust_trend =
          adjust_value.indexOf("下调") > -1 || adjust_value.indexOf("下跌") > -1
            ? "↓"
            : "↑";

        const adjust_value_re = /([\d\.]+)元\/升-([\d\.]+)元\/升/;
        const adjust_value_re2 = /[\d\.]+元\/吨/;
        const adjust_value_match = adjust_value.match(adjust_value_re);

        if (adjust_value_match && adjust_value_match.length === 3) {
          adjust_value = `${adjust_value_match[1]}-${adjust_value_match[2]}元/L`;
        } else {
          const adjust_value_match2 = adjust_value.match(adjust_value_re2);

          if (adjust_value_match2) {
            adjust_value = adjust_value_match2[0];
          }
        }
      }

      const friendly_tips = `下次${adjust_date}调整 ${adjust_trend} ${adjust_value}`;

      if (prices.length !== 4) {
        console.log( `解析油价信息失败`);
        done();
      } else {
      const query_addr = `http://m.qiyoujiage.com/${region}.shtml`; 
        $done($notification.post("实时油价信息", `${friendly_tips}`, `${prices[0].name}  ${prices[0].value}\n${prices[1].name}  ${prices[1].value}\n${prices[2].name}  ${prices[2].value}\n${prices[3].name}  ${prices[3].value}`, query_addr));
      }
    }
  });
