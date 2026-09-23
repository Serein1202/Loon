# Loon

> Loon（iOS / iPadOS 代理工具）配置、规则与脚本合集

本目录是与 [Loon](https://loon0x00.com/) 相关的全部内容，包括个人自用主配置、分流规则、功能优化脚本以及测试内容。

## 目录结构

| 名称 | 介绍 |
| :----: | :---- |
| [Configure](./Configure) | 个人使用相关 Loon 配置，结合了节点、分流、重写、MITM 等相关配置 |
| [Files](./Files) | 小米 TV 广告关闭规则、正则速查等文件 |
| [Rule](./Rule) | 相关应用分流规则（`.list`） |
| [Scripts](./Scripts) | 针对一些 APP 进行「功能优化」（去广告 / 签到 / 信息展示） |
| [test](./test) | 个人测试中，非相关人员禁止使用，出现相关问题概不负责 |

## 模块说明

### Configure

`Configure.lcf` 为主配置文件，包含 `[General]`、`[Host]`、`[Remote Proxy]`、`[Proxy Group]`、`[Remote Rule]`、`[Rule]`、`[Script]`、`[Plugin]`、`[Mitm]` 等完整段落。

### Rule

按应用划分的分流规则，通常以域名 / IP / 关键字规则组成，可被 Loon 的 `[Remote Rule]` 直接引用。

### Scripts

以 `.lpx` 插件 + `.js` 脚本的形式提供，用于去除广告、优化界面、展示信息等，需配合 MITM 使用。

### Files

小米电视去广告规则文件、正则表达式速查表等辅助资料。

## 使用说明

1. 将 `Configure.lcf` 导入 Loon，或参考其中的 `[Remote Rule]` / `[Plugin]` 段落按需引用。
2. 使用 `.lpx` 插件前需在 Loon 中安装并信任 MITM 证书。
3. 部分脚本依赖 Cookie（如签到类），需先通过插件获取 Cookie 后使用。

***

返回上级：[ProxyHome](../README.md)
