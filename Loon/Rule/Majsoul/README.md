# Majsoul

> 雀魂（Majsoul）分流规则

本目录存放《雀魂 Majsoul》游戏客户端与服务器的域名分流规则。

## 文件说明

### Majsoul.list

- 规则数量：9 条
- 作者：Serein1202
- 更新时间：2026-07-11

覆盖域名：

| 域名 | 用途 |
| :---- | :---- |
| `game.maj-soul.com` | 游戏主域名 |
| `gateway-cdn.maj-soul.com` | CDN 网关 |
| `gateway-hw.maj-soul.com` | 华为渠道网关 |
| `gateway-sy.maj-soul.com` | 商用网关 |
| `gateway-v2.maj-soul.com` | v2 网关 |
| `lb-cdn.maj-soul.com` | CDN 负载均衡 |
| `lb-hw.maj-soul.com` | 华为负载均衡 |
| `lb-v2.maj-soul.com` | v2 负载均衡 |
| `majsoul-hk-client.cn-hongkong.log.aliyuncs.com` | 香港客户端日志（阿里云） |

## 使用说明

在 Loon 的 `[Remote Rule]` 中引用，指向 `Majsoul` 策略组即可，例如：

```
https://raw.githubusercontent.com/Serein1202/ProxyHome/main/Loon/Rule/Majsoul/Majsoul.list, policy=Majsoul, tag=Majsoul规则, enabled=true
```

***

返回上级：[Rule](../README.md) · [Loon](../../README.md) · [ProxyHome](../../../README.md)
