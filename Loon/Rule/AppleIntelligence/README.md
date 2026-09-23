# AppleIntelligence

> Apple Intelligence / Siri 分流规则

本目录存放 Apple Intelligence（苹果 AI）与 Siri 相关的域名分流规则。

## 文件说明

### AppleIntelligence.list

- 规则数量：18 条
- 来源仓库：<https://github.com/Serein1202/ios_rule_script-blackmatrix7>
- 更新时间：2026-09-23

规则覆盖内容：

| 分类 | 说明 |
| :---- | :---- |
| 核心服务 | Siri 关键字、Apple Intelligence 请求入口（`gspe1-ssl.ls.apple.com`、`ls.apple.com`）与云端网关（`gateway.icloud.com`） |
| 域名掩码 | 苹果用于加密 / 混淆请求的掩码服务（`mask*.icloud.com`、`apple-dns.net` 系列） |
| CDN 代理节点 | Cloudflare（`cp4.cloudflare.com`、`apple-relay.cloudflare.com`）与 Fastly（`apple-relay.fastly-edge.com`）中继节点 |
| 内部代理路由 | `apple-relay.*`、`smoot.apple.com` 等 |
| 辅助资源 | `apps.mzstatic.com`（App 资源） |
| 系统级服务 | `guzzoni.apple.com`（Siri 本地唤醒） |

## 使用说明

将本规则加入 Loon 的 `[Remote Rule]`，指向一个可用于访问 Apple Intelligence 的策略组（如海外节点）即可。

> ⚠️ 使用 Apple Intelligence 需要设备与账号地区、系统版本等条件满足，本规则仅负责网络分流。

***

返回上级：[Rule](../README.md) · [Loon](../../README.md) · [ProxyHome](../../../README.md)
