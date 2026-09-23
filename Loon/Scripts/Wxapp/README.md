# Wxapp

> 部分微信小程序去广告 / 解锁

针对部分微信小程序的广告拦截与 VIP / 邀请数伪造插件。

## 文件列表

| 文件 | 说明 |
| :---- | :---- |
| `WxApp.lpx` | 主插件，包含 `[Rule]` / `[Rewrite]` / `[Script]` / `[MITM]` |
| `WxApp.js` | 主脚本：处理 `invite`（邀请列表）与 `user`（用户信息 VIP）两个接口 |
| `WxAppIv.js` | 仅处理 `invite` 接口的独立脚本版本 |
| `WxAppVip.js` | 仅处理 `user` 接口的独立脚本版本（伪造 VIP / 邀请数） |
| `Wxapp.png` | 插件图标 |

## 插件信息

- 名称：部分微信小程序去广告
- 作者：Serein1202
- 更新：2026-01-19
- 说明：针对部分小程序广告进行拦截，**要清除缓存拦截广告才会生效**

## 原理

1. `[Rewrite]`：拒绝小程序广告域名与资源。
   - 微信小程序资源域名：`wxsmw.wxs.qq.com`、`wxsnsdy.wxs.qq.com`、`wxsnsdythumb.wxs.qq.com`、`wximg.wxs.qq.com`
   - 广点通：`pgdt.gtimg.cn`、`mmocgame.qpic.cn`、`s21.ax1x.com`
   - 删除 `analysis.20kaka.cn` 接口返回中的广告字段（`index` / `banner` / `advertisement` / `ad`）。
2. `[Rewrite]` VIP 改写（默认注释，按需开启）：
   - `api/wechat_v2/user` → `vip=1`、`invite_num=5`、`residue_time` 拉满
   - `api/wechat_v2/share` → `data.invite_num=5`
3. `[Script]`：通过 `WxApp.js` 篡改 `invite` 与 `user` 接口返回，伪造邀请列表与 VIP。
4. `[MITM]`：`wxa.wxs.qq.com`、`mmocgame.qpic.cn`、`wxsnsdy.wxs.qq.com`、`wxsnsdythumb.wxs.qq.com`、`wxsmw.wxs.qq.com`、`wximg.wxs.qq.com`、`*.gtimg.cn`、`analysis.20kaka.cn`、`s21.ax1x.com`。

## 使用说明

1. 在 Loon 中引用 `WxApp.lpx`。
2. 安装并信任 MITM 证书。
3. 清除微信 / 小程序缓存后重新打开小程序。

> ⚠️ VIP / 邀请数伪造仅影响客户端显示，不修改服务端数据，请勿用于任何违规用途。

***

返回上级：[Scripts](../README.md) · [Loon](../../README.md) · [ProxyHome](../../../README.md)
