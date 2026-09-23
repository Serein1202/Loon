# eCharge

> eCharge（充电 App）去广告插件

针对 eCharge App 的广告拦截插件。

## 文件列表

| 文件 | 说明 |
| :---- | :---- |
| `eCharge.lpx` | Loon 插件文件，包含去广告重写规则与脚本绑定 |
| `eCharge.js` | 脚本：修改首页快捷标签接口返回，屏蔽广告入口 |
| `eCharge.png` | 插件图标 |

## 插件信息

- 名称：eCharge去广告
- 作者：Serein1202
- 更新：2025-12-26
- 说明：针对 eCharge 广告进行拦截，**要重新安装清除缓存拦截广告才会生效**

## 原理

1. 通过 `[Rewrite]` 拒绝广告相关接口与资源：

   ```
   ^https?://api-evone.echargenet.com/gw/evone.echargeapi.open.ad.getadmaterials/1.0 reject
   ^https?://yxyylog.echargenet.com/a.gif reject
   ^https?://cdn-evone-oss.echargenet.com/cms_img reject
   ```

2. 通过 `[Script]` 改写首页快捷标签接口（`home.quicklabel`）的返回数据，仅保留 `chongzhi`（充值）、`dingdan`（订单）、`yijieban`（已结办）三项，去掉广告位。

## 使用说明

1. 在 Loon 中引用 `eCharge.lpx`。
2. 安装并信任 MITM 证书。
3. 清除 eCharge App 缓存或重装 App 以彻底去除已缓存广告。

***

返回上级：[Scripts](../README.md) · [Loon](../../README.md) · [ProxyHome](../../../README.md)
