# configuration

> Clash / mihomo 的 YAML 配置文件

本目录存放实际使用的 Clash / mihomo 配置文件。

## 文件列表

### mihomo.yaml

通用 mihomo（Clash.Meta）内核配置。

- 内核要求：`mihomo ≥ v1.19.31`
- 特性：
  - `proxy-providers` 订阅节点，并内置名称过滤（剔除以「群 / 邀请 / 返利 / 官网 / 客服……」等关键词命名的广告节点）
  - `mixed-port: 7893`，开启 `tcp-concurrent`、`unified-delay`
  - 开启 `sniffer` 域名嗅探，对 `redir-host / TUN` 流量强制嗅探
  - 使用 jsdelivr 加速的 GeoIP（Country-without-asn.mmdb）数据源
  - `profile` 持久化选择（`store-selected: true`）
- 参考：<https://github.com/MetaCubeX/mihomo/blob/Meta/docs/config.yaml>

### ClashParty.yaml

[ClashParty / YYDS Pro 中文版](https://github.com/666OS/YYDS) v2.0.4 专用配置。

- 使用 `x-*-provider`、`x-url-test`、`x-load-balance`、`x-fallback` 等 YAML 锚点复用配置
- 内置按地区的节点过滤正则（港 / 台 / 日 / 新 …），支持 `url-test`、`load-balance`、`fallback` 策略
- 订阅方式：在 `proxy-providers` 中添加你的订阅链接，或在 `proxies` 中添加自定义节点

## 使用说明

1. 编辑对应 YAML，在 `proxy-providers` 中替换为你自己的订阅地址。
2. 导入 Clash / mihomo 内核客户端并选用该配置。
3. 如需自定义节点，可在 `proxies` 段手动追加。

> ⚠️ 请勿直接使用仓库中的示例订阅地址，务必替换为可用订阅。

***

返回上级：[Clash](../README.md) · [ProxyHome](../../README.md)
