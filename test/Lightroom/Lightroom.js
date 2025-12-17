body = $response.body.replace(/while.{7}\n/, "");
let obj = JSON.parse(body);
obj.entitlement.status = "subscriber";
obj.current_subs = {
    "product_id": "lightroom",
    "store": "adobe",
    "purchase_date": "2025-12-17T08:26:17.664056Z",
    "sao": {
        "inpkg_LRMC": "1"
    }
};
obj.entitlement.storage = {
    "used": 4060414,
    "limit": 112742891520,
    "display_limit": 107374182400,
    "warn": 85899345920
};
body = JSON.stringify(obj);
$done({ body });