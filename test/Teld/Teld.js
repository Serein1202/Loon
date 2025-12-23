if (!$response.body) {
  $done({});
}
let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);
if (url.includes("SID=CMS-GetMergePromoEntry")) {
    obj.data=[];
    // obj.state=0;
}
if (url.includes("SID=CMS-GetFindTabsNew")) {
    obj.data=[];
    // obj.state=0;
}
if (url.includes("SID=CMS-GetConfigRelease")) {
    obj.data.ConfigContent={};
    // obj.state=0;
}
if (url.includes("SID=ProSrv-GetInviteNewActivityInfo")) {
    obj.data={};
    // obj.state=0;
}
if (url.includes("SID=CMS-GetSysReleaseWithLatest")) {
    obj.data={};
    // obj.state=0;
}
if (url.includes("SID=CMS-GetCityChangedResources")) {
    obj.data=[];
    // obj.state=0;
}
if (url.includes("SID=App-CheckHealthStateV2")) {
    obj.state=0;
}
if (url.includes("SID=CMS-GetBannerByType")) {
    obj.data=[];
    // obj.state=0;
}
if (url.includes("SID=CMS-GetAppHomeActivities")) {
    obj.data=[];
    // obj.state=0;
}
if (url.includes("SID=CMS-GetAppGoodsList")) {
    obj.data=[];
    // obj.state=0;
}
if (url.includes("SID=CMS-GetAppAd")) {
    obj.data=[];
    // obj.state=0;
}
if (url.includes("SID=AAPI-V0700-GetAppFunctionaInfo")) {
    obj.data={
    "timestamp": "20251127194958",
    "chargeFuncs": {
      "name": "充电功能",
      "values": [
        {
          "id": "26C60ED6-7E6D-49CF-9224-48563386E422",
          "title": "找桩充电",
          "code": "searchCharge",
          "navtab": "0",
          "functions": [
            {
              "id": "1B1CF068-E9FF-4EB4-A750-EF1C8E3BF866",
              "title": "电站搜索",
              "code": "stationSearch",
              "icon": "https://resource.teld.cn/teldimage/107/3c4a4d2edc35447cbba92475cc9e77f8.png",
              "url": "",
              "needLogin": "0",
              "displayLogout": "1",
              "navType": "1",
              "webView": "",
              "ord": 1,
              "label": null
            },
            {
              "id": "F52CF866-28B9-49DD-B63B-EDAC50138B80",
              "title": "我的收藏",
              "code": "myCollect",
              "icon": "https://resource.teld.cn/teldimage/107/fe4bde96156b4f7bb788198788dac5fa.png",
              "url": "",
              "needLogin": "1",
              "displayLogout": "1",
              "navType": "1",
              "webView": "",
              "ord": 2,
              "label": null
            },
            {
              "id": "1F745314-4506-49E7-ABFD-B086F88B3164",
              "title": "最近充电",
              "code": "recentCharge",
              "icon": "https://resource.teld.cn/teldimage/107/ff1c7a9daa334cb2a34646fb2a2b8621.png",
              "url": "",
              "needLogin": "1",
              "displayLogout": "1",
              "navType": "1",
              "webView": "",
              "ord": 3,
              "label": null
            },
            {
              "id": "503AA373-973E-487F-871A-E227C37D9953",
              "title": "充电地图",
              "code": "chargeMap",
              "icon": "https://resource.teld.cn/teldimage/107/82a6a8f568624bcc956184abb5059353.png",
              "url": "",
              "needLogin": "0",
              "displayLogout": "1",
              "navType": "1",
              "webView": "",
              "ord": 4,
              "label": null
            },
            {
              "id": "5CD3EAED-EDF2-41E5-8389-DF249688B4AF",
              "title": "一键导航",
              "code": "oneClickNav",
              "icon": "https://resource.teld.cn/teldimage/107/247a76f22052446e96e613e7322f8ab3.png",
              "url": "",
              "needLogin": "0",
              "displayLogout": "1",
              "navType": "1",
              "webView": "",
              "ord": 5,
              "label": null
            },
            {
              "id": "A7D95D87-1463-42FE-90D2-5CB23E038970",
              "title": "星级站",
              "code": "starStation",
              "icon": "https://resource.teld.cn/teldimage/107/5225501a30794f1bb83792f9765a77b9.png",
              "url": "",
              "needLogin": "0",
              "displayLogout": "1",
              "navType": "1",
              "webView": "",
              "ord": 10,
              "label": null
            }
          ]
        },
        {
          "id": "0A368251-9E1A-4AC1-98B7-F355F028E99E",
          "title": "我的钱包",
          "code": "myWallet",
          "navtab": "0",
          "functions": [
            {
              "id": "A2D2D8EC-D8E8-440B-BCE5-A756C6D0339F",
              "title": "余额充值",
              "code": "balanceRecharge5150",
              "icon": "https://resource.teld.cn/teldimage/107/c9f81dbd63e14989a7e84e32bfac2322.png",
              "url": "teldapp://balanceReCharge",
              "needLogin": "1",
              "displayLogout": "1",
              "navType": "1",
              "webView": "",
              "ord": 10,
              "label": null
            },
            {
              "id": "33E5AA2D-270C-4036-9533-B6C54319883B",
              "title": "我的卡券",
              "code": "cardCoupon",
              "icon": "https://resource.teld.cn/teldimage/107/0e3a0e31c327448ab8c2b9106fd8817e.png",
              "url": "teldapp://cardCoupon",
              "needLogin": "1",
              "displayLogout": "1",
              "navType": "1",
              "webView": "",
              "ord": 25,
              "label": null
            },
            {
              "id": "319FAEB0-C949-4EDA-B9B0-811FB52998F6",
              "title": "第三方账户",
              "code": "thirdAccount",
              "icon": "https://resource.teld.cn/teldimage/107/de5e842e61f5436fb80cd797dd93b37c.png",
              "url": "",
              "needLogin": "1",
              "displayLogout": "1",
              "navType": "1",
              "webView": "",
              "ord": 40,
              "label": null
            }
          ]
        },
        {
          "id": "AAAB8EDD-93C2-47EC-B926-4FA42A3D66E4",
          "title": "我的充电",
          "code": "myCharge",
          "navtab": "0",
          "functions": [
            {
              "id": "A635CECA-5422-4F6C-89AD-312D2277E324",
              "title": "我的订单",
              "code": "myOrder",
              "icon": "https://resource.teld.cn/teldimage/107/fa275b6b23084630915868c6e87a1261.png",
              "url": "",
              "needLogin": "1",
              "displayLogout": "1",
              "navType": "1",
              "webView": "",
              "ord": 1,
              "label": null
            },
            {
              "id": "FCBE7AC8-488D-4BEC-B92F-A692B1D64EF1",
              "title": "我的发票",
              "code": "myInvoice",
              "icon": "https://resource.teld.cn/teldimage/107/3037aeb41da5476ab1415333f761046f.png",
              "url": "",
              "needLogin": "1",
              "displayLogout": "1",
              "navType": "1",
              "webView": "",
              "ord": 2,
              "label": null
            },
            {
              "id": "F7CBDF50-89C2-472A-B7D4-B37F6E851A57",
              "title": "充电账单",
              "code": "myMonthlyBill",
              "icon": "https://resource.teld.cn/teldimage/107/9a4343ce03294b5b8ae04d2d8f8ef90e.png",
              "url": "",
              "needLogin": "1",
              "displayLogout": "1",
              "navType": "1",
              "webView": "",
              "ord": 3,
              "label": null
            },
            {
              "id": "C5C66402-0F20-4200-A20D-12E072CEC6DF",
              "title": "行程规划",
              "code": "myItinerary",
              "icon": "https://resource.teld.cn/teldimage/107/be9fee6cc5a543c588c39f0ec2fa6007.png",
              "url": "",
              "needLogin": "1",
              "displayLogout": "1",
              "navType": "1",
              "webView": "",
              "ord": 4,
              "label": null
            },
            {
              "id": "D2120387-2AC8-43F5-8F3D-FEACC3195809",
              "title": "即插即充",
              "code": "plugCharge",
              "icon": "https://resource.teld.cn/teldimage/107/97a36fca7dba4963be6e394d70bd599e.png",
              "url": "",
              "needLogin": "1",
              "displayLogout": "1",
              "navType": "1",
              "webView": "",
              "ord": 10,
              "label": null
            },
            {
              "id": "9B93210D-88D4-4ACE-9CD5-99CDD33DC59D",
              "title": "V2G",
              "code": "v2g",
              "icon": "https://resource.teld.cn/teldimage/107/d223a0e60d444cfa91011c274635fab4.png",
              "url": "teldapp://v2g",
              "needLogin": "1",
              "displayLogout": "1",
              "navType": "1",
              "webView": "",
              "ord": 15,
              "label": null
            },
            {
              "id": "AC5A5BC0-4153-40E8-9567-9D16E4DD6D39",
              "title": "代充订单",
              "code": "InsteadChargeOrders",
              "icon": "https://resource.teld.cn/teldimage/107/e86e313c927c4ad4b1e9f43fced60a82.png",
              "url": "https://c2.teld.cn/cvmobile/ChargeOrderList/ProxyRechargeOrder",
              "needLogin": "1",
              "displayLogout": "0",
              "navType": "2",
              "webView": "",
              "ord": 16,
              "label": null
            }
          ]
        },
        {
          "id": "B0E37FC9-A7D2-43CF-AF33-8544F6F9FBF3",
          "title": "我的爱车",
          "code": "myCar",
          "navtab": "0",
          "functions": [
            {
              "id": "334E4ECC-E0AF-440A-AE80-0ED3813053E6",
              "title": "我的爱车",
              "code": "myCar",
              "icon": "https://resource.teld.cn/teldimage/107/b9e656a95f474904a55f8f7934f06c98.png",
              "url": "",
              "needLogin": "1",
              "displayLogout": "1",
              "navType": "1",
              "webView": "",
              "ord": 1,
              "label": null
            }
          ]
        },
        {
          "id": "FB8C04AC-75AF-4D3C-8D2C-655FC789D16E",
          "title": "设置",
          "code": "settting",
          "navtab": "0",
          "functions": [
            {
              "id": "1472B473-3EA0-4247-9195-6BBA689840B7",
              "title": "个人资料",
              "code": "myInfo",
              "icon": "https://resource.teld.cn/teldimage/107/4c8599ddce674c28b5e5cdc3f1407eb6.png",
              "url": "",
              "needLogin": "1",
              "displayLogout": "1",
              "navType": "1",
              "webView": "",
              "ord": 11,
              "label": null
            },
            {
              "id": "658B5C61-F895-4CAA-BA9C-701EE3030415",
              "title": "账号与安全",
              "code": "accountSafe",
              "icon": "https://resource.teld.cn/teldimage/107/4769009a53eb415e85cabf6314cc58b1.png",
              "url": "",
              "needLogin": "1",
              "displayLogout": "1",
              "navType": "1",
              "webView": "",
              "ord": 20,
              "label": null
            },
            {
              "id": "D3351801-0D66-48AC-947E-3B1F859C994A",
              "title": "偏好设置",
              "code": "oneClickNavSetting",
              "icon": "https://resource.teld.cn/teldimage/107/4a6b303fe07c448aa73dd8885ade99d7.png",
              "url": "",
              "needLogin": "1",
              "displayLogout": "1",
              "navType": "1",
              "webView": "",
              "ord": 30,
              "label": null
            },
            {
              "id": "F2BB6984-B7E6-4B66-B51E-212E0E590F16",
              "title": "充电设置",
              "code": "myChargeSetting",
              "icon": "https://resource.teld.cn/teldimage/107/809d2257a68044b8b5eac7f3f9fd4863.png",
              "url": "",
              "needLogin": "1",
              "displayLogout": "1",
              "navType": "1",
              "webView": "",
              "ord": 35,
              "label": null
            },
            {
              "id": "158D94FE-40D6-4D76-80C6-753C736DB2BC",
              "title": "消息提醒",
              "code": "messageRemindSetting",
              "icon": "https://resource.teld.cn/teldimage/107/4811695de568400faa88f1b625fad261.png",
              "url": "",
              "needLogin": "1",
              "displayLogout": "1",
              "navType": "1",
              "webView": "",
              "ord": 40,
              "label": null
            },
            {
              "id": "20A98AB1-9CE0-4D28-A3A8-9A4D8B91C895",
              "title": "支付设置",
              "code": "accountDeductSetting",
              "icon": "https://resource.teld.cn/teldimage/107/933c38117dbf4fc6821231a6f8735fe2.png",
              "url": "teldapp://paymentSetting",
              "needLogin": "1",
              "displayLogout": "1",
              "navType": "1",
              "webView": "",
              "ord": 85,
              "label": null
            },
            {
              "id": "B8A54BD5-30B1-487B-8FD6-9D3BA42B6AC2",
              "title": "换肤",
              "code": "changeSkinSetting",
              "icon": "https://resource.teld.cn/teldimage/107/63c16fe33aff497d9ad8fbb7cbf1faf7.png",
              "url": "",
              "needLogin": "1",
              "displayLogout": "1",
              "navType": "1",
              "webView": "",
              "ord": 90,
              "label": null
            },
            {
              "id": "204CD7DF-138B-49EB-BD26-AB2439708C04",
              "title": "客服中心",
              "code": "onlineCustomerService",
              "icon": "https://resource.teld.cn/teldimage/107/fe811b2b9c0146cba038d12f064e7046.png",
              "url": "",
              "needLogin": "0",
              "displayLogout": "1",
              "navType": "1",
              "webView": "",
              "ord": 120,
              "label": null
            }
          ]
        }
      ]
    },
    "homeFuncs": "",
    "config": [
      {
        "UserID": "",
        "ConfigID": "APP_CommonLinks",
        "DynamicConfigKey": null,
        "ConfigValue": "",
        "TenantID": null,
        "PageID": "APP_InternalWorkbench",
        "Ext1": null,
        "Ext2": null,
        "Ext3": null,
        "ID": "e99f7577-a37a-4739-b5e7-b10b50bc0461"
      }
    ]
  };
    // obj.state=0;
}
body = JSON.stringify(obj);
$done({ body });