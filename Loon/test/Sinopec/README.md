# Sinopec

> 中石化（Sinopec）App 去广告（测试中）

针对中国石化（`sinopecsales.com`）App 的广告拦截插件。

## 文件列表

| 文件 | 说明 |
| :---- | :---- |
| `Sinopec.lpx` | Loon 插件，包含 `[Rule]` / `[Rewrite]` / `[Script]` / `[MITM]` |
| `Sinopec.json` | 首页布局（`AppLayout_*.json`）替换数据 |
| `Sinopec.html` | 「车生活」H5 页面替换内容（标题：车生活） |
| `404.png` | 图片占位 / 替换资源 |
| `Sinopec.png` | 插件图标 |

## 插件信息

- 名称：Sinopec去广告
- 作者：Serein1202
- 更新：2026-03-31
- 说明：针对 Sinopec 广告进行拦截，**要重新安装清除缓存拦截广告才会生效**

## 原理

1. `[Rewrite]`：拒绝广告接口与图片。
   - 主页商品 JSON：`a.sinopecsales.com/app/wff` → `reject-200`
   - 搜索框轮播：`a.sinopecsales.com/app/search` → `reject-200`
   - 会员日广告图：`a.sinopecsales.com/app/layout/image/xfq_*.png`
   - 积分商城列表、OCR 资源、商品图片等 → `reject-200` / `reject-img`
   - 主页轮播 Banner：`a.sinopecsales.com/app/cms` → `reject-200`
2. `[Rewrite]` 重定向：
   - 「车生活」页面：`cx.sinopecsales.com/netadmin/open/h5` → 用 `Sinopec.html` 替换
   - 首页布局：`AppLayout_*.json` → 用 `Sinopec.json` 替换（默认注释）
3. `[Script]`：`http-response` 处理 `AppLayout_*.json`，替换为 `Sinopec.json`。
4. `[MITM]`：`shop.ejoy365.com`、`a.sinopecsales.com`、`d.sinopecsales.com`、`pro-ocr.oss-cn-beijing.aliyuncs.com`、`ejoyshopbucket.oss-cn-beijing.aliyuncs.com`、`cx.sinopecsales.com`。

## 使用说明

1. 在 Loon 中引用 `Sinopec.lpx`。
2. 安装并信任 MITM 证书。
3. 清除 App 缓存或重装以彻底去除已缓存广告。

> ⚠️ 插件规则随 App 版本更新而失效，本目录内容处于测试阶段，请谨慎使用。

***

返回上级：[test](../README.md) · [Loon](../../README.md) · [ProxyHome](../../../README.md)
