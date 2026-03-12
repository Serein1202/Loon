if (!$response.body) {
    $done({});
}
let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);
obj = {
    status: "success",
  userData: {
    oAuthId: null,
    idUser: 10352366,
    dateExpires: 4700000000,
    subscriptionKey: "premium_gold",
    countryCode: null,
    dateLastLogin: "2024-01-01",
    oAuthType: null,
    isActive: true,
    hasConsented: true,
    localeCode: "en",
    name: "Premium User",
    typeSource: "app",
    subscriptions: {
      0: {
        dateExpires: 4700000000,
        sku: "subscription.premium.gold.annual",
        originalBillingPeriod: 365,
        typePlatform: "ios",
        typeStatus: "active",
        name: "Premium Gold",
        typeSubscription: "annual"
      }
    },
    tokenLogin: "",
    accessToken: "",
    publicKey: null,
    identity: "premium",
    isLoggedin: true,
    accountType: "premium",
    isAnonymousAccount: false,
    hasPassword: false
  },
  transactions: {
    "20001133865890": {
      status: "valid",
      match: "self",
      expires: 4700000000000,
      started: 1670000000000
    }
  },
  message: "Subscription has been successfully created",
  msg: "success",
  response_code: 100,
  success: true,
  token: "",
  responseCode: 100,
  accessToken: ""
};

body = JSON.stringify(obj);
$done({ body });