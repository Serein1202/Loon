if (!$response.body) {
    $done({});
}
let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);
obj.data = {
    "bucketName": "app-ccchong-com",
    "stubGroupSupporting": {
        "12": "卫生间",
        "13": "餐饮",
        "14": "售货机",
        "15": "雨棚",
        "16": "休息室",
        "17": "免费茶水间",
        "18": "免费洗车"
    },
    "chargeLimitAmount": {
        "personalPay": {
            "warningAmount": "10",
            "limitAmount": "5"
        },
        "companyPay": {
            "warningAmount": "5",
            "limitAmount": "5"
        },
        "stubWhitePay": {
            "limitAmount": "-1"
        }
    },
    "iosFlutterSwitch": 1,
    "stubGroupMap": {
        "suggestDistance": "10"
    },
    "appIcon": 0,
    "ossUrl": "oss-cn-qingdao.aliyuncs.com",
    "pictureSettingsMap": {
        "stubGroupList": 0
    },
    "chargeMileageNoticeSwitch": "1",
    "riskSdkSwitch": true,
    "futeSwitch": "1",
    "androidFlutterSwitch": 1,
    "jumpMeiTuanSwitch": {
        "xcxCharge": true,
        "appRecharge": true,
        "xcxRecharge": true
    },
    "expertCommentGift": "走心评论可获得3元优惠券一张",
    "homePageFrame": [
        {
            "startTime": "2019.11.02 00:00:00",
            "endTime": "2033.12.31 23:59:59",
            "frame": [
                {
                    "moduleType": 7,
                    "moduleName": "电站列表",
                    "moduleNameShowFlag": true,
                    "listSize": 15,
                    "moduleSort": 1
                }
            ]
        }
    ],
    "rechargeMoneyList": [
        {
            "price": "50",
            "priceDesc": "售价:50元"
        },
        {
            "price": "80",
            "priceDesc": "售价:80元"
        },
        {
            "price": "100",
            "priceDesc": "售价:100元"
        },
        {
            "price": "200",
            "priceDesc": "售价:200元"
        },
        {
            "price": "500",
            "priceDesc": "售价:500元"
        },
        {
            "price": "1000",
            "priceDesc": "售价:1000元"
        }
    ],
    "chargingBoostTips": {
        "liquidCooling": "星星充电研发的智能充电设备使用充电黑科技：液冷超级充电技术，充电2分钟续航百公里，最大电流达到700A。",
        "boost": "星星充电研发的智能充电设备使用先进的超频加速技术，最大电流突破250A ，大大缩短充电时间， 在普通枪上也能享受液冷枪般的超快体验。",
        "overcharge": "星星充电研发的智能充电设备使用PDA功率池技术实现超快组合结合先进算法，调用主机最大功率，充分满足车的需求。"
    },
    "cspList": [],
    "telephone": "400-8280-768",
    "iosScanType": 1,
    "adSettingsMap": {
        "ttAd": 0,
        "shenShiAd": 0
    },
    "keepStubSwitch": "1",
    "esSearchSwitch": 1,
    "lvDiscount": "等级特权,服务费9.5折,服务费9.3折,服务费9.0折,服务费8.6折,服务费8.0折,",
    "chargeRetainSwith": true,
    "chargeNumMax": 3,
    "needUpdate": true,
    "privateEsSearchSwitch": 1,
    "codeRule": "^https://qrcode.starcharge.com/#/\\d{8}$|^https://qrcode.starcharge.com/#/\\d{10}$|^TI.*|^ME.*|^\\d{8}$|^\\d{10}$|^ti.*|^me.*|^activity_.*",
    "plateNoSuffix": "学,警,港,澳",
    "activitySettingsMap": {
        "shakeActivity": 1
    },
    "customerServicSwitch": "1",
    "versoin": "4.0.0",
    "stubCommentNum": "10",
    "plateNoCities": [
        {
            "code": "110000",
            "abbr": "京"
        },
        {
            "code": "120000",
            "abbr": "津"
        },
        {
            "code": "130000",
            "abbr": "冀"
        },
        {
            "code": "140000",
            "abbr": "晋"
        },
        {
            "code": "150000",
            "abbr": "蒙"
        },
        {
            "code": "210000",
            "abbr": "辽"
        },
        {
            "code": "220000",
            "abbr": "吉"
        },
        {
            "code": "230000",
            "abbr": "黑"
        },
        {
            "code": "310000",
            "abbr": "沪"
        },
        {
            "code": "320000",
            "abbr": "苏"
        },
        {
            "code": "330000",
            "abbr": "浙"
        },
        {
            "code": "340000",
            "abbr": "皖"
        },
        {
            "code": "350000",
            "abbr": "闽"
        },
        {
            "code": "360000",
            "abbr": "赣"
        },
        {
            "code": "370000",
            "abbr": "鲁"
        },
        {
            "code": "410000",
            "abbr": "豫"
        },
        {
            "code": "420000",
            "abbr": "鄂"
        },
        {
            "code": "430000",
            "abbr": "湘"
        },
        {
            "code": "440000",
            "abbr": "粤"
        },
        {
            "code": "450000",
            "abbr": "桂"
        },
        {
            "code": "460000",
            "abbr": "琼"
        },
        {
            "code": "500000",
            "abbr": "渝"
        },
        {
            "code": "510000",
            "abbr": "川"
        },
        {
            "code": "520000",
            "abbr": "贵"
        },
        {
            "code": "530000",
            "abbr": "云"
        },
        {
            "code": "540000",
            "abbr": "藏"
        },
        {
            "code": "610000",
            "abbr": "陕"
        },
        {
            "code": "620000",
            "abbr": "甘"
        },
        {
            "code": "630000",
            "abbr": "青"
        },
        {
            "code": "640000",
            "abbr": "宁"
        },
        {
            "code": "650000",
            "abbr": "新"
        },
        {
            "code": "710000",
            "abbr": "台"
        },
        {
            "code": "810000",
            "abbr": "港"
        },
        {
            "code": "820000",
            "abbr": "澳"
        }
    ],
    "stubCommentIsShow": "110100,120100,130100,130200,130300,130400,130500,130600,130700,130800,130900,131000,131100,140100,140200,140300,140400,140500,140600,140700,140800,140900,141000,141100,150100,150200,150300,150400,150500,150600,150700,150800,150900,152200,152500,152900,210100,210200,210300,210400,210500,210600,210700,210800,210900,211000,211100,211200,211300,211400,220100,220200,220300,220400,220500,220600,220700,220800,222400,230100,230200,230300,230400,230500,230600,230700,230800,230900,231000,231100,231200,232700,310100,320100,320200,320300,320400,320500,320600,320700,320800,320900,321000,321100,321200,321300,330100,330200,330300,330400,330500,330600,330700,330800,330900,331000,331100,340100,340200,340300,340400,340500,340600,340700,340800,341000,341100,341200,341300,341500,341600,341700,341800,350100,350200,350300,350400,350500,350600,350700,350800,350900,360100,360200,360300,360400,360500,360600,360700,360800,360900,361000,361100,370100,370200,370300,370400,370500,370600,370700,370800,370900,371000,371100,371200,371300,371400,371500,371600,371700,410100,410200,410300,410400,410500,410600,410700,410800,410900,411000,411100,411200,411300,411400,411500,411600,411700,419000,420100,420200,420300,420500,420600,420700,420800,420900,421000,421100,421200,421300,422800,429000,430100,430200,430300,430400,430500,430600,430700,430800,430900,431000,431100,431200,431300,433100,440100,440200,440300,440400,440500,440600,440700,440800,440900,441200,441300,441400,441500,441600,441700,441800,441900,442000,445100,445200,445300,450100,450200,450300,450400,450500,450600,450700,450800,450900,451000,451100,451200,451300,451400,460100,460200,460300,460400,469000,500100,500200,510100,510300,510400,510500,510600,510700,510800,510900,511000,511100,511300,511400,511500,511600,511700,511800,511900,512000,513200,513300,513400,520100,520200,520300,520400,520500,520600,522300,522600,522700,530100,530300,530400,530500,530600,530700,530800,530900,532300,532500,532600,532800,532900,533100,533300,533400,540100,540200,540300,540400,540500,542200,542400,542500,610100,610200,610300,610400,610500,610600,610700,610800,610900,611000,620100,620200,620300,620400,620500,620600,620700,620800,620900,621000,621100,621200,622900,623000,630100,630200,632200,632300,632500,632600,632700,632800,640100,640200,640300,640400,640500,650100,650200,650400,650500,652300,652700,652800,652900,653000,653100,653200,654000,654200,654300,659000,810100",
    "indexShowType": 0,
    "cashRate": "0.6%",
    "updateEnabled": 1,
    "webVersion": "1644396950000",
    "androidScanType": 1,
    "discoverMenus": {
        "insuranceStore": "http://h5.dhbaoxian.com/#/index?token=5316c5c7-a2c2-4261-aefd-5f08c67378b7",
        "starStore": "https://h5.youzan.com/v2/showcase/homepage?alias=27x6k4qc&redirect_count=1",
        "integralStore": "https://sale.starcharge.com/goDuiba.do"
    },
    "appUrlWhiteList": "starcharge-standard-h5.starcharge.com,app-cdn.starcharge.com,customer-center-h5-web.starcharge.com,activity-h5.starcharge.com,scm-app-h5.starcharge.com,osmp-h5.starcharge.com,osmp-mobile-h5.starcharge.com,algorithm-app.starcharge.com,pre-customer-center-h5-web.starcharge.com,web.starcharge,pre-scm-app-h5.starcharge.com,app-taro.starcharge.com,pre-app-taro.starcharge.com,https://osmp-h5-assets.starcharge.com",
    "homePageLimit": 8,
    "systemSwitch": {
        "serviceTimeSwitch": "1",
        "indexStubGroupSwitch": "1",
        "activitySwitch": "0",
        "friendFunctionSwitch": "0",
        "iosWebViewOfflineIsOpen": "0",
        "stubGroupListScoreSwitchNew": "1",
        "cloudAppOldTokenCheckSwitch": "1",
        "stubGroupListScoreSwitch": "1",
        "miniProgramDefaultStopFlagSwtitch": "1",
        "switch": "1",
        "stubGroupExchangeSwitch": "1",
        "integralSwitch": "0",
        "oldVersionIntegralSwitch": "1",
        "webViewOfflineIsOpen": "0",
        "commentKafkaSwitch": "1",
        "androidWebViewOfflineIsOpen": "0",
        "newIntegralSwitch": "1",
        "stubGroupSpecialSwitch": "1",
        "deductionIntegralSwitch": "0",
        "realTimeLocationSwitch": "0",
        "placeHolderAppkeySwitch": "1",
        "carbonSwitch": "1",
        "voucherAlertSwitch": "1",
        "memberSmsSwitch": "1",
        "fleetCompanySwitch": "1",
        "defaultStopFlagSwtitch": "1"
    },
    "chargeRetainText": "现在是充电速度较快的阶段，如果再多充5分钟，可以增加约10%的电量",
    "couponSettlementSwitch": true,
    "extendAttr": {
        "adInfoTypeTimestamp_61": "1751356031000",
        "adInfoTypeTimestamp_60": "1667301095000",
        "adInfoTypeTimestamp_1071": "1756016872000",
        "appMenuNameUpdateTime": "1642663375000",
        "adInfoTypeTimestamp_65": "1767487780000",
        "adInfoTypeTimestamp_64": "1767487651000",
        "adInfoTypeTimestamp_30018": "1767075938000",
        "adInfoTypeTimestamp_63": "1737337313000",
        "adInfoTypeTimestamp_62": "1764558783000",
        "adInfoTypeTimestamp_30015": "1758691547000",
        "adInfoTypeTimestamp_30014": "1756016905000",
        "adInfoTypeTimestamp_68": "1656656505000",
        "adInfoTypeTimestamp_67": "1711154776000",
        "adInfoTypeTimestamp_30013": "1726820776000",
        "adInfoTypeTimestamp_66": "1711099332000",
        "adInfoTypeTimestamp_30012": "1726820743000",
        "adInfoTypeTimestamp_30011": "1726820741000",
        "adInfoTypeTimestamp_30010": "1731981944000",
        "adInfoTypeTimestamp_50": "1644560228000",
        "adInfoTypeTimestamp_59": "1660305896000",
        "adInfoTypeTimestamp_30009": "1736818259000",
        "adInfoTypeTimestamp_30008": "1748417922000",
        "adInfoTypeTimestamp_54": "1758529308000",
        "adInfoTypeTimestamp_53": "1767072768000",
        "adInfoTypeTimestamp_30007": "1767511902000",
        "adInfoTypeTimestamp_51": "1697784363000",
        "adInfoTypeTimestamp_30005": "1765941764000",
        "adInfoTypeTimestamp_30004": "1767072742000",
        "adInfoTypeTimestamp_30003": "1767072755000",
        "adInfoTypeTimestamp_57": "1711156886000",
        "adInfoTypeTimestamp_30002": "1642127322000",
        "adInfoTypeTimestamp_56": "1639639401000",
        "adInfoTypeTimestamp_30001": "1698892398000",
        "adInfoTypeTimestamp_49": "1764289884000",
        "adInfoTypeTimestamp_48": "1673431160000",
        "adInfoTypeTimestamp_50007": "1762768294000",
        "adInfoTypeTimestamp_43": "1678239753000",
        "adInfoTypeTimestamp_50001": "1693232411000",
        "adInfoTypeTimestamp_40": "1711154622000",
        "adInfoTypeTimestamp_47": "1711100246000",
        "adInfoTypeTimestamp_50005": "1698801162000",
        "adInfoTypeTimestamp_46": "1694679198000",
        "adInfoTypeTimestamp_45": "1630545957000",
        "adInfoTypeTimestamp_50004": "1698748789000",
        "adInfoTypeTimestamp_31002": "1767505567000",
        "adInfoTypeTimestamp_50003": "1699258956000",
        "adInfoTypeTimestamp_44": "1758765370000",
        "adInfoTypeTimestamp_31001": "1767505573000",
        "adInfoThanElevenTimestamp": "1767511876000",
        "cityTimestamp": "1607999062000",
        "oaidTimestamp": "1664268874525",
        "adInfoTypeTimestamp_37": "1711099523000",
        "adInfoTypeTimestamp_32": "1688709855000",
        "adInfoTypeTimestamp_31": "1692580598000",
        "adInfoTypeTimestamp_30": "1643001895000",
        "adInfoTypeTimestamp_36": "1719973509000",
        "adInfoTypeTimestamp_35": "1646291831000",
        "adInfoTypeTimestamp_33": "1635821669000",
        "appMenuTimestamp": "1745463864000",
        "adInfoTypeTimestamp_29": "1637822962000",
        "adInfoTypeTimestamp_28": "1645002353000",
        "adInfoTypeTimestamp_27": "1626333751000",
        "adInfoTypeTimestamp_26": "1620720265000",
        "adInfoTypeTimestamp_2001": "1758864359000",
        "adInfoTypeTimestamp_21": "1596247342000",
        "adInfoTypeTimestamp_20": "1721285417000",
        "adInfoTypeTimestamp_25": "1638320155000",
        "adInfoTypeTimestamp_24": "1590627197000",
        "adInfoTypeTimestamp_23": "1598630687000",
        "adInfoTypeTimestamp_22": "1711100135000",
        "adInfoTypeTimestamp_90": "1693159453000",
        "webViewOfflineTimestamp": "1767943869000",
        "adInfoTypeTimestamp_94": "1745830880000",
        "adInfoTypeTimestamp_93": "1701845501000",
        "adInfoTypeTimestamp_92": "1693159464000",
        "appMenuTimestampIndex": "1768560734382",
        "adInfoTypeTimestamp_91": "1701845465000",
        "labelTimestamp": "1667906481000",
        "adInfoTypeTimestamp_9": "1548755021000",
        "adInfoTypeTimestamp_102": "1731981923000",
        "adInfoTypeTimestamp_18": "1640247542000",
        "adInfoTypeTimestamp_17": "1698737162000",
        "adInfoTypeTimestamp_101": "1765422622000",
        "adInfoTypeTimestamp_100": "1767075958000",
        "adInfoTypeTimestamp_16": "1698737159000",
        "adInfoTypeTimestamp_15": "1620716700000",
        "adInfoTypeTimestamp_19": "1729758462000",
        "adInfoTypeTimestamp_98": "1768454852000",
        "adInfoTypeTimestamp_97": "1699612952000",
        "adInfoTypeTimestamp_96": "1699612713000",
        "adInfoTypeTimestamp_95": "1735661200000",
        "adInfoTypeTimestamp_14": "1566871936000",
        "adInfoTypeTimestamp_99": "1768454881000",
        "adInfoTypeTimestamp_40009": "1736818257000",
        "adInfoTypeTimestamp_83": "1688106874000",
        "adInfoTypeTimestamp_82": "1698738092000",
        "adInfoTypeTimestamp_40008": "1723688723000",
        "adInfoTypeTimestamp_81": "1682348792000",
        "appTypeMenuTimestamp_1": "1582967556000",
        "adInfoTypeTimestamp_80": "1695281725000",
        "appTypeMenuTimestamp_2": "1597115889000",
        "adInfoTypeTimestamp_40005": "1750820013000",
        "adInfoTypeTimestamp_40004": "1760427265000",
        "adInfoTypeTimestamp_109": "1760495944000",
        "adInfoTypeTimestamp_108": "1757924932000",
        "adInfoTypeTimestamp_40007": "1767146804000",
        "adInfoTypeTimestamp_40001": "1656987598000",
        "adInfoTypeTimestamp_105": "1726820774000",
        "adInfoTypeTimestamp_40003": "1765438975000",
        "adInfoTypeTimestamp_104": "1736241274000",
        "adInfoTypeTimestamp_103": "1726820754000",
        "adInfoTypeTimestamp_2861": "1762009621000",
        "adInfoTypeTimestamp_2862": "1755771543000",
        "adInfoTypeTimestamp_111": "1758269239000",
        "adInfoTypeTimestamp_110": "1758269217000",
        "adInfoTypeTimestamp_2863": "1764289830000",
        "adInfoTypeTimestamp_87": "1682348835000",
        "appTypeMenuTimestamp_3": "1638865581000",
        "adInfoTypeTimestamp_86": "1682348810000",
        "appTypeMenuTimestamp_4": "1630551719000",
        "adInfoTypeTimestamp_85": "1701679383000",
        "appTypeMenuTimestamp_5": "1711957036000",
        "adInfoTypeTimestamp_84": "1686293175000",
        "appTypeMenuTimestamp_6": "1637202276000",
        "adInfoTypeTimestamp_2864": "1755772114000",
        "appTypeMenuTimestamp_7": "1745463864000",
        "appTypeMenuTimestamp_8": "1642663379000",
        "adInfoTypeTimestamp_89": "1755048855000",
        "appTypeMenuTimestamp_9": "1711956969000",
        "adInfoTypeTimestamp_88": "1711155145000",
        "appTypeMenuTimestamp_10": "1640914587000",
        "appTypeMenuTimestamp_11": "1727084368000",
        "adInfoTypeTimestamp_72": "1692336697000",
        "adInfoTypeTimestamp_71": "1768552383000",
        "appTypeMenuTimestamp_13": "1684913468000",
        "stubGroupLabelTimestamp": "1647410832000",
        "adInfoTypeTimestamp_40015": "1757066158000",
        "adInfoTypeTimestamp_60005": "1757383432000",
        "adInfoTypeTimestamp_40014": "1751960488000",
        "adInfoTypeTimestamp_60004": "1757395099000",
        "adInfoTypeTimestamp_40021": "1766556876000",
        "adInfoTypeTimestamp_40020": "1767086791000",
        "chargeInsAdTimestamp": "1703810928000",
        "adInfoTypeTimestamp_76": "1711155051000",
        "adInfoTypeTimestamp_75": "1711100427000",
        "adInfoTypeTimestamp_74": "1682348743000",
        "adInfoTimestampNew": "1758278109000",
        "adInfoTypeTimestamp_73": "1693286047000",
        "adInfoTypeTimestamp_79": "1683874527000",
        "adInfoTypeTimestamp_78": "1690794408000"
    },
    "colorConfig": {
        "chargeMapBuildingStub": "#999999",
        "chargeMapOperatingStub": "#F08300"
    },
    "numScaleMap": {
        "power": 3
    },
    "insuranceUrl": "http://manager.dhbaoxian.com/",
    "appVipImgs": {
        "vipAdImage_v1": "https://app-cdn.starcharge.com/imgSuperVipNoNew_v1.png",
        "normalVipImage": "https://app-cdn.starcharge.com/imgSuperVip.png",
        "expireDateColor_v1": "F6C2A7",
        "vipAdImage": "https://app-cdn.starcharge.com/imgSuperVipNoNew.png",
        "normalVipImage_v1": "https://app-cdn.starcharge.com/imgSuperVip_v1.png",
        "noVipIcon": "https://app-cdn.starcharge.com/icSuperVipNo.png",
        "expireDateColor": "d2bd95",
        "vipIcon": "https://app-cdn.starcharge.com/icSuperVip.png",
        "normalVipImage_v2": "https://app-cdn.starcharge.com/normalVipImage_v2_2.png",
        "vipAdImage_v2": "https://app-cdn.starcharge.com/vipAdImage_v2_2.png"
    },
    "privateStubSwitch": "0",
    "cndUrl": "https://app-cdn.starcharge.com/",
    "chargeNumMaxCompany": 15,
    "orderEndCodeRemindSwitch": true
}
body = JSON.stringify(obj);
$done({ body });