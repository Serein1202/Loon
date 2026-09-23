# ProxyHome

> 个人代理工具配置合集 —— Loon / Clash(mihomo) 分流、重写、脚本与规则

本仓库用于收集、整理和分享个人在 iOS / iPadOS 上使用的代理工具配置，包括 **Loon** 与 **Clash / mihomo** 两大类，涵盖节点订阅、分流规则、重写、脚本（去广告 / 签到 / 信息展示）等内容。

- 作者：Serein1202
- 仓库：<https://github.com/Serein1202/ProxyHome>

***

## 前言

此项目仅为收集和学习，禁止任何人任何形式进行违法违规操作。如有相关情况，与本项目无关。

***

## 声明

1. 本项目内所有资源文件，禁止任何公众号、自媒体进行任何形式的转载、发布。
2. 编写本项目主要目的为学习和研究代理工具配置，无法保证项目内容的合法性、准确性、完整性和有效性。
3. 本项目涉及的数据由使用的个人或组织自行填写，本项目不对数据内容负责，包括但不限于数据的真实性、准确性、合法性。使用本项目所造成的一切后果，与本项目的所有贡献者无关，由使用的个人或组织完全承担。
4. 本项目中涉及的第三方硬件、软件等，与本项目没有任何直接或间接的关系。本项目仅对部署和使用过程进行客观描述，不代表支持使用任何第三方硬件、软件。使用任何第三方硬件、软件，所造成的一切后果由使用的个人或组织承担，与本项目无关。
5. 本项目中所有内容只供学习和研究使用，不得将本项目中任何内容用于违反国家/地区/组织等的法律法规或相关规定的其他用途。
6. 所有基于本项目源代码进行的任何修改，为其他个人或组织的自发行为，与本项目没有任何直接或间接的关系，所造成的一切后果亦与本项目无关。
7. 所有直接或间接使用本项目的个人和组织，应 24 小时内完成学习和研究，并及时删除本项目中的所有内容。如对本项目的功能有需求，应自行开发相关功能。
8. 本项目保留随时对免责声明进行补充或更改的权利，直接或间接使用本项目内容的个人或组织，视为接受本项目的特别声明。

***

## 目录结构

| 目录 | 介绍 |
| :----: | :---- |
| [Clash](./Clash) | Clash / mihomo 配置（YAML） |
| [Loon](./Loon) | Loon 相关配置、规则、脚本与测试内容 |

<details>
<summary>展开查看完整目录树</summary>

```
ProxyHome
├── Clash
│   ├── configuration
│   │   ├── ClashParty.yaml      # ClashParty（YYDS Pro）配置
│   │   └── mihomo.yaml          # mihomo (Clash.Meta) 配置
│   └── README.md
└── Loon
    ├── Configure
    │   └── Configure.lcf        # 个人自用 Loon 主配置
    ├── Files
    │   ├── miTV.txt             # 小米电视广告规则
    │   ├── miTVFull.txt
    │   ├── miTVLite.txt
    │   ├── RegExp.md            # 正则速查
    │   └── README.md
    ├── Rule
    │   ├── AppleIntelligence
    │   │   └── AppleIntelligence.list
    │   └── Majsoul
    │       └── Majsoul.list
    ├── Scripts
    │   ├── eCharge              # eCharge（充电）去广告
    │   ├── Oil                  # 今日油价查询
    │   ├── StarCharge           # 星星充电去广告
    │   └── Wxapp                # 微信小程序去广告
    └── test
        └── Sinopec              # 中石化去广告（测试中）
```

</details>

## 各模块速览

| 模块 | 说明 |
| :---- | :---- |
| [Loon/Configure](./Loon/Configure) | 合并了节点、分流、重写、MITM、脚本与插件的完整 Loon 配置 |
| [Loon/Rule](./Loon/Rule) | 应用级分流规则（`.list`），可直接被 Loon 订阅引用 |
| [Loon/Scripts](./Loon/Scripts) | 针对特定 App 的功能优化脚本与插件（`.js` / `.lpx`） |
| [Loon/Files](./Loon/Files) | 小米电视去广告规则、正则速查文档 |
| [Loon/test](./Loon/test) | 测试中的内容 |
| [Clash](./Clash) | mihomo / ClashParty 的 YAML 配置 |

## 使用说明

1. Loon 用户可将 `Loon/Configure/Configure.lcf` 导入 Loon，或按需引用 `Loon/Rule/*` 与 `Loon/Scripts/*`。
2. Clash / mihomo 用户可参考 `Clash/configuration/*.yaml`，在 `proxy-providers` 中填入自己的订阅链接。
3. 所有 `.lpx` 插件均为自用，需配合 Loon 的 MITM 证书使用。
