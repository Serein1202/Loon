# Files

> 小米电视去广告规则 & 正则速查

本目录存放用于屏蔽小米电视广告的 Hosts 规则文件，以及一份正则表达式速查文档。

## 文件列表

| 文件 | 说明 |
| :---- | :---- |
| `miTV.txt` | 小米电视广告域名列表（基础版），来源见下方引用地址 |
| `miTVLite.txt` | 自用精简版，仅保留核心广告 / 统计域名 |
| `miTVFull.txt` | 完整版，覆盖广告、统计、应用商店、日志等更多域名（含 `ad.doubleclick.net` 等第三方） |
| `RegExp.md` | 正则表达式速查手册（元字符、匹配、分组、常见校验表达式等） |

所有规则均为 `127.0.0.1 <域名>` 形式的 Hosts 记录，用于将广告域名解析到本地地址从而实现屏蔽。

## 小米电视用户

`miTV.txt` 引用地址：

```
https://github.com/blackmatrix7/ios_rule_script/blob/master/rule/QuantumultX/AdvertisingMiTV/AdvertisingMiTV.list
```

`miTVLite.txt` 为自用版本。

### 如何使用

1. 删除设备内名为 `miad` 的目录。
2. 通过路由器 Hosts 指定域名所对应的 IP 地址（即把本目录中的规则添加到路由器的 Hosts / DNS 屏蔽中）。

## iOS 用户

通过安装 `noota.mobileconfig` 文件来屏蔽系统更新。

## RegExp.md

正则速查文档，内容包括：

- 元字符与转义
- 匹配、重复匹配、懒惰限定符
- 零宽断言与分组语法
- 常用去注释 / 去空行正则
- 数字、字符、特殊需求（邮箱、域名、手机号、身份证等）校验表达式

***

返回上级：[Loon](../README.md) · [ProxyHome](../../README.md)
