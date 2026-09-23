# Clash

> Clash / mihomo（Clash.Meta）内核的配置合集

本目录存放基于 [mihomo](https://github.com/MetaCubeX/mihomo)（原 Clash.Meta）内核的代理配置。所有配置均为 YAML 格式，需配合支持 Clash / mihomo 内核的客户端使用（如 Clash Verge、Mihomo Party、ClashParty、Stash 等）。

## 目录结构

| 文件 / 目录 | 说明 |
| :---- | :---- |
| [configuration](./configuration) | 具体的 YAML 配置文件目录 |
| `configuration/mihomo.yaml` | 通用 mihomo 配置（订阅 + 策略组 + 分流规则） |
| `configuration/ClashParty.yaml` | ClashParty（YYDS Pro 中文版）专用配置 |

## 使用说明

1. 在配置文件的 `proxy-providers` 中填入你自己的订阅链接（示例中为占位 / 本地订阅地址）。
2. 若使用 `proxies` 自定义节点，可直接在对应段落追加节点。
3. 将 YAML 文件导入到你的 Clash / mihomo 客户端即可。

> ⚠️ 配置中的订阅地址、GeoIP/ASN 数据源等均为示例或个人自用，请根据自身网络环境替换为可用地址。

## 相关

- mihomo 官方配置文档：<https://github.com/MetaCubeX/mihomo/blob/Meta/docs/config.yaml>
- 返回上级：[ProxyHome](../README.md)
