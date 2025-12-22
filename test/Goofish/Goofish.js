let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);

if (url.includes("/gw/mtop.taobao.idlehome.home.nextfresh")) {
  if (obj.data?.sections) {
    obj.data.sections = obj.data.sections.filter(section => {
      return !(section.data && section.data.bizType === "AD");
    });
  }
}

if (url.includes("gw/mtop.idle.user.page.my.adapter")) {
    delete obj.data?.container?.sections?.[8]?.item;
}

body = JSON.stringify(obj);
$done({body});