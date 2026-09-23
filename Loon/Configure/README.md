# Configure

> 个人自用 Loon 主配置

本目录存放 Loon 的主配置文件 `Configure.lcf`。

## 文件说明

### Configure.lcf

个人自用 Loon 配置，结合了节点订阅、分流策略、重写、脚本、插件与 MITM 等内容。

配置段落概览：

| 段落 | 说明 |
| :---- | :---- |
| `[General]` | 通用设置：DNS 服务器、IPv6 模式、`skip-proxy` / `bypass-tun`、资源解析器、GeoIP 数据源、测试 URL 等 |
| `[Host]` | 域名映射（含注释说明的四种模式） |
| `[Remote Proxy]` | 远程订阅节点（机场订阅） |
| `[Remote Filter]` | 订阅节点筛选：按关键词 / 正则筛选节点，供策略组使用 |
| `[Proxy Group]` | 策略组：`Auto-test` 自动测速、按地区分组（CN / HK / TW / US / JP / SG …）、按应用分组（AI / GitHub / YouTube / TikTok …）以及 `FINAL` |
| `[Remote Rule]` | 远程分流规则订阅（Binance、OKX、WeChat、AI、GitHub、Steam、Majsoul、Apple、China 等） |
| `[Rule]` | 本地分流规则（本地优先级高于远程规则） |
| `[Remote Script]` / `[Script]` | 定时脚本与重写脚本（油价查询、贴吧签到、机场签到、60s 读世界、流媒体解锁查询等） |
| `[Plugin]` | 插件列表（去广告、解锁、Sub-Store、BoxJs 等） |
| `[Mitm]` | MITM 主机名列表与证书配置 |

## 使用说明

1. 将 `Configure.lcf` 导入 Loon 使用。
2. 首次使用请在 Loon 中安装并信任 MITM 证书。
3. `[Remote Proxy]` 中的订阅地址为个人自用，请替换为你自己的订阅。

> ⚠️ 本文件为个人自用配置，包含大量个人偏好，仅供学习参考。

***

返回上级：[Loon](../README.md) · [ProxyHome](../../README.md)
