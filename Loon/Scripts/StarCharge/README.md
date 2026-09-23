# StarCharge

> 星星充电（StarCharge）去广告 & 页面优化

针对星星充电 App 的广告拦截与首页 / 我的页面优化插件。

## 文件列表

| 文件 | 说明 |
| :---- | :---- |
| `StarCharge.lpx` | Loon 插件，包含 `[Rule]` / `[Rewrite]` / `[Script]` / `[MITM]` |
| `StarChargeIndex.js` | 主页优化脚本（`system/info` 接口） |
| `StarChargeMine.js` | 我的页面优化脚本（`menu/v2` 接口） |
| `defaultBanner.png` | 替换用的默认横幅图 |
| `StarCharge.png` | 插件图标 |

## 插件信息

- 名称：StarCharge去广告
- 作者：Serein1202
- 更新：2026-04-01
- 说明：针对 StarCharge 广告进行拦截，**要重新安装清除缓存拦截广告才会生效**

## 原理

1. `[Rule]`：屏蔽极光推送等域名（`jiguang.cn`、`jpush.cn` → `REJECT`）。
2. `[Rewrite]`：拒绝广告接口与资源。
   - `gateway.starcharge.com/apph5/.../advertisement`
   - `gateway.sccncdn.com/app/.../advertisement`
   - 会员广告、银行卡接口、首页默认 Banner 图片
3. `[Script]`：改写接口返回，优化「我的」与「首页」展示。
   - `apiV2/app/menu/v2` → `StarChargeMine.js`
   - `apiV2/system/info` → `StarChargeIndex.js`
4. `[MITM]`：`gateway.starcharge.com`、`gateway.sccncdn.com`、`gateway-app.starcharge.com`、`smartop-sdkapi.jiguang.cn`、`activity-h5.starcharge.com`。

## 使用说明

1. 在 Loon 中引用 `StarCharge.lpx`。
2. 安装并信任 MITM 证书。
3. 清除 App 缓存或重装以彻底去除已缓存广告。

***

返回上级：[Scripts](../README.md) · [Loon](../../README.md) · [ProxyHome](../../../README.md)
