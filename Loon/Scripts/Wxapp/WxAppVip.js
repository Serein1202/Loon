if (!$response.body) {
    $done({});
}
let obj = JSON.parse($response.body);
obj.data.residue_time = 4102397476;
obj.invite_num = 5;
obj.vip = 1;
obj.residue_time = "2099-12-18 18:51"
body = JSON.stringify(obj);
$done({ body });
