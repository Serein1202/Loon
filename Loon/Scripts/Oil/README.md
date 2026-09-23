# Oil

> 今日油价查询脚本

定时抓取并推送杭州地区今日油价的 Loon 脚本。

## 文件列表

| 文件 | 说明 |
| :---- | :---- |
| `Oil.js` | Loon 定时脚本，查询并通知今日油价 |

## 功能说明

- 数据来源：`http://m.qiyoujiage.com/zhejiang/hangzhou.shtml`（杭州油价页面）
- 抓取内容：
  - 92 / 95 / 98 号汽油及 0 号柴油价格
  - 下次油价调整时间
  - 涨跌预测（上调 / 下调 / 搁浅）
- 通过 `$notification.post` 推送通知，点击可打开油价页面

## 执行逻辑

1. 使用 `$httpClient.get` 请求油价页面。
2. 用正则 `/(92|95|98|0)号[^0-9]*([\d.]+)\(元\)/g` 解析各标号价格。
3. 用正则解析「下次油价 X 月 X 日 X 时调整」与「预计上调 / 下调 / 搁浅」。
4. 组装文本并推送通知。

## 使用说明

在 Loon 的 `[Script]` 中配置定时任务（示例为每天 18:00 执行）：

```
cron "0 18 * * *" script-path=https://raw.githubusercontent.com/Serein1202/ProxyHome/main/Loon/Scripts/Oil/Oil.js, timeout=60, tag=今日油价
```

> ⚠️ 如需查询其他地区，请修改脚本中的 `url` 与 `Referer` 为对应城市页面。

***

返回上级：[Scripts](../README.md) · [Loon](../../README.md) · [ProxyHome](../../../README.md)
