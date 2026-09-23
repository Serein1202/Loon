# Scripts

> 针对特定 App 的功能优化脚本与插件

本目录存放自用的 Loon 脚本（`.js`）与插件（`.lpx`），主要用于去除广告、优化界面、展示信息等。所有插件均基于 Loon 的 `[Script]` / `[Rewrite]` / `[MITM]` 机制运行，需在 Loon 中安装并信任 MITM 证书。

## 目录结构

| 目录 | 说明 |
| :---- | :---- |
| [eCharge](./eCharge) | eCharge（充电 App）去广告 |
| [Oil](./Oil) | 今日油价查询（定时通知） |
| [StarCharge](./StarCharge) | 星星充电去广告 & 首页 / 我的页面优化 |
| [Wxapp](./Wxapp) | 部分微信小程序去广告 / 解锁 |

## 文件类型

| 后缀 | 说明 |
| :---- | :---- |
| `.lpx` | Loon 插件文件，包含 `[Rule]` / `[Rewrite]` / `[Script]` / `[MITM]` 等段落与元信息头 |
| `.js` | Loon 脚本（`http-request` / `http-response` / `cron`），由 `.lpx` 引用 |
| `.png` | 插件图标 |

## 使用说明

1. 在 Loon 的 `[Plugin]` 中引用对应 `.lpx` 地址（或直接安装插件）。
2. 首次使用需安装并信任 MITM 证书。
3. 去广告类插件通常需要**卸载重装 App 或清除缓存**后才能完全生效（广告可能已缓存）。

> ⚠️ 插件均为个人自用，规则中的域名 / 接口路径会随 App 版本变化而失效，请关注更新。

***

返回上级：[Loon](../README.md) · [ProxyHome](../../README.md)
