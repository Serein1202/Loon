# mihomo 配置说明

> Clash / mihomo 内核配置文件说明 —— 基于本目录 `mihomo.yaml` 的实际内容整理。

本目录存放实际使用的 mihomo（Clash.Meta）配置文件。以下说明与当前 `mihomo.yaml` 保持一致（文件头注释标注最后更新时间为 2026-09-17 11:30）。

## 文件列表

| 文件 | 说明 |
| --- | --- |
| `mihomo.yaml` | 通用 mihomo 内核配置，内核要求 `mihomo ≥ v1.19.31` |

- 作者标注：[Repcz](https://github.com/Repcz)（TG：`@LUCYChannel_1024`）
- 官方配置文档：<https://github.com/MetaCubeX/mihomo/blob/Meta/docs/config.yaml>
- 文件内以 `;`、`#`、`//` 开头的行均为注释行

## 基础设置

| 配置项 | 值 | 说明 |
| --- | --- | --- |
| `mixed-port` | `7893` | HTTP / SOCKS 混合代理端口 |
| `tcp-concurrent` | `true` | 并发建立 TCP 连接，优选最快链路 |
| `allow-lan` | `true` | 允许局域网设备接入 |
| `ipv6` | `false` | 全局关闭 IPv6 |
| `log-level` | `info` | 日志级别 |
| `unified-delay` | `true` | 统一延迟测量口径 |
| `profile.store-selected` | `true` | 持久化保存手动选择的节点 |
| `profile.store-fake-ip` | `false` | 不持久化 fake-ip 映射表 |

## GeoIP 数据

| 配置项 | 值 |
| --- | --- |
| `geodata-mode` | `false`（使用 mmdb 文件而非 geodata） |
| `geo-auto-update` | `true` |
| `geo-update-interval` | `24`（小时） |
| `geox-url.mmdb` | `https://fastly.jsdelivr.net/gh/Loyalsoldier/geoip@release/Country-without-asn.mmdb`（jsdelivr 加速） |

## 节点订阅（proxy-providers）

仅配置一个订阅提供者 `Subscribe`（其余为注释掉的备用位）：

| 字段 | 值 |
| --- | --- |
| `type` | `http` |
| `url` | `http://127.0.0.1:38324/download/ikuuu?target=ClashMeta`（本地订阅转换服务地址） |
| `interval` | `86400`（秒，即每 24 小时更新一次） |
| `health-check.enable` | `true` |
| `health-check.url` | `http://1.1.1.1/generate_204` |
| `health-check.interval` | `1800`（秒） |
| `health-check.timeout` | `5000`（毫秒） |
| `override.additional-prefix` | `ikuuu - `（统一为订阅节点名添加前缀） |
| `filter` | 正则剔除以「群 / 邀请 / 返利 / 循环 / 官网 / 客服 / 网站 / 网址 / 获取 / 订阅 / 流量 / 到期 / 机场 / 通知 / 教程 / 更新 / 作者 ……」等关键词命名的信息类与广告类节点 |

- 节点前缀 / 后缀通过 `override` 控制，需要修改时按注释示例调整 `additional-prefix` / `additional-suffix`。
- 配置中另留有 `#Subscribe2` ~ `#Subscribe4` 三行注释位，需要多订阅时取消注释并填入自己的订阅地址。

## DNS

| 配置项 | 值 |
| --- | --- |
| `enable` | `true` |
| `ipv6` | `false` |
| `enhanced-mode` | `fake-ip` |
| `fake-ip-range` | `198.18.0.1/16` |
| `listen` | `:1053` |
| `cache-algorithm` | `arc` |
| `default-nameserver` | `223.5.5.5`、`119.29.29.29`（用于解析 DNS 服务器域名） |
| `nameserver` | `https://dns.alidns.com/dns-query`、`https://doh.pub/dns-query` |
| `proxy-server-nameserver` | `https://dns.alidns.com/dns-query`、`https://doh.pub/dns-query`（仅用于解析代理节点域名） |
| `hosts` | `dns.alidns.com → [223.5.5.5, 223.6.6.6]`、`doh.pub → [1.12.12.21, 120.53.53.53]` |

`fake-ip-filter` 列表（`+.lan`、`*`、`+.local` 及国内运营商认证、微软连通性检测、Steam 局域网缓存等域名）：

```text
+.lan
*
+.local
+.cmpassport.com
id6.me
open.e.189.cn
mdn.open.wo.cn
opencloud.wostore.cn
auth.wosms.cn
+.10099.com.cn
+.msftconnecttest.com
+.msftncsi.com
lancache.steamcontent.com
```

> 列表中包含通配项 `*`，即当前的 fake-ip 过滤规则覆盖全部域名。

## 域名嗅探（sniffer）

- `enable: true`
- `force-dns-mapping: true`：对 redir-host / TUN 流量强制嗅探
- `parse-pure-ip: true`：对无域名的纯 IP 连接强制嗅探
- 嗅探协议与端口：

| 协议 | 端口 | 附加参数 |
| --- | --- | --- |
| HTTP | `80` | `override-destination: true` |
| TLS | `443`、`8443` | — |
| QUIC | `443`、`8443` | — |

## TUN

当前 `tun.enable: false`（默认关闭），其余参数已预配置，开启后即可生效：

| 配置项 | 值 |
| --- | --- |
| `stack` | `mips` |
| `dns-hijack` | `[any:53]` |
| `auto-route` | `true`（自动配置路由表） |
| `auto-detect-interface` | `true`（自动识别出口网卡） |
| `strict-route` | `false` |

## 锚点（YAML anchors）

配置通过 YAML 锚点复用公共参数：

| 锚点 | 用途 | 内容 |
| --- | --- | --- |
| `&p` | 订阅提供者模板 | `http`、`interval: 86400`、健康检查（`http://1.1.1.1/generate_204`、1800 秒、5000 ms 超时） |
| `&pg` | 策略组模板 | `select`，候选节点为 `Manual`、`HongKong`、`United States`、`Singapore`、`Japan`、`Taiwan`、`DIRECT` |
| `&url-test` | 地区自动测速模板 | `url-test`、`http://1.1.1.1/generate_204`、`interval: 300`、`tolerance: 0`、`include-all: true` |
| `&c` | 规则集模板 | `http` / `classical` / `text` / `interval: 86400` |
| `&select` / `&fallback` / `&load-balance` | 备用策略模板 | 已定义但当前策略组中未引用 |

## 代理组（proxy-groups）

共 15 个策略组，分两类。

### 一、选择与分流组（10 个，均为 `select`）

| 组名 | 内容 |
| --- | --- |
| `Manual` | `include-all: true`，候选 `[HongKong, United States, Singapore, Japan, Taiwan, DIRECT]` |
| `Global` | 继承 `&pg` |
| `Microsoft` | 继承 `&pg` |
| `Google` | 继承 `&pg` |
| `AI` | 继承 `&pg` |
| `X` | 继承 `&pg` |
| `Telegram` | 继承 `&pg` |
| `Game` | 继承 `&pg` |
| `Spotify` | 继承 `&pg`，并额外开启 `include-all: true` |
| `Final` | 继承 `&pg`（规则兜底组） |

> 继承 `&pg` 的各组候选为 `[Manual, HongKong, United States, Singapore, Japan, Taiwan, DIRECT]`，即可以手动指定节点，也可以直接选用某个地区自动测速组或直连。

### 二、地区自动测速组（5 个，均为 `url-test`）

统一继承 `&url-test`：测速地址 `http://1.1.1.1/generate_204`、间隔 `300` 秒、`tolerance: 0`、`include-all: true`，各组附加节点名过滤正则：

```text
HongKong       → (?i)🇭🇰|香港|(\b(HK|Hong)\b)
United States  → (?i)🇺🇸|美国|洛杉矶|圣何塞|(\b(US|United States)\b)
Singapore      → (?i)🇸🇬|新加坡|狮|(\b(SG|Singapore)\b)
Japan          → (?i)🇯🇵|日本|东京|(\b(JP|Japan)\b)
Taiwan         → (?i)🇨🇳|🇹🇼|台湾|(\b(TW|Tai|Taiwan)\b)
```

各组均配置了 Qure / Orz-3 图标的 `icon` 字段。

## 规则提供者（rule-providers）

共 15 个，全部为 `type: http` + `behavior: classical` + `format: text` + `interval: 86400`，统一托管于 `https://github.com/Repcz/Tool/raw/X/mihomo/Rules/`：

| provider | 对应文件 |
| --- | --- |
| `Direct` | `Direct.list` |
| `Lan` | `Lan.list` |
| `Reject` | `Reject.list` |
| `AppleProxy` | `AppleServers.list` |
| `Microsoft` | `Microsoft.list` |
| `Github` | `Github.list` |
| `Google` | `Google.list` |
| `Telegram` | `Telegram.list` |
| `X` | `Twitter.list` |
| `Steam` | `Steam.list` |
| `Epic` | `Epic.list` |
| `AI` | `AI.list` |
| `Emby` | `Emby.list` |
| `Spotify` | `Spotify.list` |
| `Proxy` | `Proxy.list` |

> 其中 `Emby` 规则集已定义，但当前 `rules` 段未引用，属于预留规则集。

## 规则（rules）

共 18 条，自上而下顺序匹配、命中即止：

| # | 规则 | 策略组 |
| --- | --- | --- |
| 1 | `RULE-SET,Lan` | `DIRECT` |
| 2 | `RULE-SET,Direct` | `DIRECT` |
| 3 | `RULE-SET,Reject` | `REJECT` |
| 4 | `DOMAIN-SUFFIX,quark.cn` | `Manual` |
| 5 | `DOMAIN-SUFFIX,quark.com` | `Manual` |
| 6 | `RULE-SET,AI` | `AI` |
| 7 | `RULE-SET,Telegram` | `Telegram` |
| 8 | `RULE-SET,X` | `X` |
| 9 | `RULE-SET,Steam` | `Game` |
| 10 | `RULE-SET,Epic` | `Game` |
| 11 | `RULE-SET,Google` | `Google` |
| 12 | `RULE-SET,Github` | `Microsoft` |
| 13 | `RULE-SET,Microsoft` | `Microsoft` |
| 14 | `RULE-SET,Spotify` | `Spotify` |
| 15 | `RULE-SET,Proxy` | `Global` |
| 16 | `RULE-SET,AppleProxy` | `HongKong` |
| 17 | `GEOIP,CN` | `DIRECT` |
| 18 | `MATCH` | `Final` |

分流逻辑要点：

- 局域网与直连清单优先放行，广告 / 拦截清单直接 `REJECT`；
- 夸克（`quark.cn` / `quark.com`）单独指向 `Manual` 组；
- 各类服务（AI、Telegram、X、游戏、Google、微软 / Github、Spotify）分别走同名策略组；
- `Proxy` 规则集走 `Global` 组，Apple 服务走香港组；
- 中国 IP（`GEOIP,CN`）直连，其余全部由 `MATCH` 兜底到 `Final` 组。

## 使用说明

1. 在 `proxy-providers.Subscribe.url` 中替换为自己的订阅地址（当前示例为本地订阅转换服务 `http://127.0.0.1:38324/download/ikuuu?target=ClashMeta`）；需要多个订阅时取消 `Subscribe2` ~ `Subscribe4` 的注释并补充地址。
2. 将 `mihomo.yaml` 导入支持 mihomo 内核（≥ v1.19.31）的客户端使用。
3. 默认端口为 `7893`（mixed-port），已开启 `allow-lan`，同网段设备可通过本机 IP + 7893 使用代理。
4. 需要 TUN 模式（全局透明代理）时把 `tun.enable` 改为 `true`；同时注意 `dns.listen: :1053` 与 `dns-hijack: [any:53]` 的既有配置。

> 请勿直接使用示例订阅地址，务必替换为可用订阅。

***

返回上级：[Clash](../README.md) · [ProxyHome](../../README.md)
