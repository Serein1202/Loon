# Rule

> Loon 应用分流规则合集

本目录按应用 / 服务划分，存放 Loon 可识别的分流规则文件（`.list`）。规则可被 Loon 配置中的 `[Remote Rule]` 段落直接引用。

## 目录结构

| 目录 / 文件 | 说明 |
| :---- | :---- |
| [AppleIntelligence](./AppleIntelligence) | Apple Intelligence / Siri 相关域名规则 |
| [Majsoul](./Majsoul) | 雀魂（Majsoul）游戏相关域名规则 |

## 规则格式

统一为 Loon 规则语法，常见类型：

```
DOMAIN,example.com
DOMAIN-SUFFIX,example.com
DOMAIN-KEYWORD,example
IP-CIDR,1.2.3.4/32
IP-ASN,12345
```

每个 `.list` 文件头部包含元信息注释（`NAME` / `AUTHOR` / `REPO` / `UPDATED` / `TOTAL` 等），便于追踪来源与更新时间。

## 使用说明

在 Loon 配置中引用，例如：

```
[Remote Rule]
https://raw.githubusercontent.com/Serein1202/ProxyHome/main/Loon/Rule/Majsoul/Majsoul.list, policy=Majsoul, tag=Majsoul规则, enabled=true
```

***

返回上级：[Loon](../README.md) · [ProxyHome](../../README.md)
