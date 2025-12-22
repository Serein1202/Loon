var body = $response["body"];
let obj = JSON["parse"]($response["body"]);

obj = {
  "request_date_ms": 1716638943154,
  "request_date": "2024-05-25T09:25:56Z",
  "subscriber": {
    "non_subscriptions": {},
    "first_seen": "2024-05-25T09:21:55Z",
    "original_application_version": "17999",
    "other_purchases": {},
    "management_url": "https://apps.apple.com/account/subscriptions",
    "subscriptions": {
      "vscopro_global_5999_annual_7D_free": {
        "original_purchase_date": "2024-05-25T09:25:15Z",
        "expires_date": "2999-06-01T09:25:14Z",
        "is_sandbox": false,
        "refunded_at": null,
        "store_transaction_id": "710001650170483",
        "unsubscribe_detected_at": null,
        "grace_period_expires_date": null,
        "period_type": "trial",
        "purchase_date": "2024-05-25T09:25:14Z",
        "billing_issues_detected_at": null,
        "ownership_type": "PURCHASED",
        "store": "app_store",
        "auto_resume_date": null
      }
    },
    "entitlements": {
      "pro": {
        "grace_period_expires_date": null,
        "purchase_date": "2024-05-25T09:25:14Z",
        "product_identifier": "vscopro_global_5999_annual_7D_free",
        "expires_date": "2999-06-01T09:25:14Z"
      }
    },
    "original_purchase_date": "2024-05-25T09:11:22Z",
    "original_app_user_id": "$RCAnonymousID:759b003800d1475fa5c345694965384e",
    "last_seen": "2024-05-25T09:23:22Z"
  }
};

$done({
  body: JSON.stringify(obj)
});