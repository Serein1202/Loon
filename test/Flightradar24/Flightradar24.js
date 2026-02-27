if (!$response.body) {
    $done({});
}
let url = $request.url;
let body = $response.body;
let obj = JSON.parse(body);
if (obj.features) {
    delete obj.features;
}
obj.message = "Subscription has been successfully created";
obj.msg = "Subscription has been successfully created";
obj.response_code = 100;
obj.responseCode = 100;
obj.token = "42807bbd22bbc1dc0b0277830890c80fe5237db8aa8ef7d3693b7580df82f924";
obj.accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmbGlnaHRyYWRhcjI0LmNvbSIsImV4cCI6MTc3NDc2NTUwMiwiaWF0IjoxNzcyMTczNTAyLCJlbWFpbCI6InhoZDE5OTgxMjAyQGdtYWlsLmNvbSIsInVzZXJJZCI6MTg1NjQ4MDEsImtleVNlc3Npb24iOiI0MjgwN2JiZDIyYmJjMWRjMGIwMjc3ODMwODkwYzgwZmU1MjM3ZGI4YWE4ZWY3ZDM2OTNiNzU4MGRmODJmOTI0Iiwic2wiOiJHIiwiYWwiOiIwIiwicGsiOiIifQ.NMg6sSt35E-xyTdM8OK0jcuD4Q80ka0K8P8Rl5xTpsU";
obj.userData = {
    dateExpires: 2720154122,
    accountType: "subscriber",
    subscriptionKey: "hb3k7lfXIwiNVxinB73J70Bxg5WR51iuBcxpxDUFTl4"
}
obj.userData.subscriptions = {
    "0": {
        name: "Gold",
        typePlatform: "android",
        typeSubscription: "annual",
        typeStatus: "active",
        dateExpires: 2720154122,
        sku: "fr24.sub.gold.yearly",
        originalBillingPeriod: 365,
        sortOrder: 300,
        isOnTrial: true
    }
}
obj.userData.features = {
    "adverts": "disabled",
    "airport.panel.arrivals_departures": 48,
    "airport.panel.latest.events": "enabled",
    "airport.panel.movements.per.day": "enabled",
    "airport.panel.runway.details": "enabled",
    "airport.panel.runway.usage": "enabled",
    "gps.jamming": 365,
    "history.aircraft.days": 365,
    "history.flight.days": 365,
    "history.playback.days": 365,
    "history.playback.flight.days": 365,
    "history.playback.global.days": 365,
    "map.data.ads-b": "enabled",
    "map.data.delaystats": "enabled",
    "map.data.faa": "enabled",
    "map.data.flarm": "enabled",
    "map.data.mlat": "enabled",
    "map.data.satellite": "enabled",
    "map.filters.categories": "enabled",
    "map.filters.fleets": "enabled",
    "map.filters.max": 25,
    "map.filters.receivers": "enabled",
    "map.filters.unblocking": "enabled",
    "map.hide_header": "enabled",
    "map.info.aircraft": "full",
    "map.info.aircraft.code": "enabled",
    "map.info.aircraft.registration": "enabled",
    "map.info.aircraft.type": "enabled",
    "map.info.airport.arrivals": "enabled",
    "map.info.airport.departures": "enabled",
    "map.info.airport.onground.hours": 720,
    "map.info.flight": "full",
    "map.info.flight.calibrated-altitude": "enabled",
    "map.info.flight.ground-speed": "enabled",
    "map.info.flight.position": "enabled",
    "map.info.flight.track": "enabled",
    "map.labels.rows": 4,
    "map.layer.waypoints": "enabled",
    "map.layer.weather.volcano": "enabled",
    "map.search": "enabled",
    "map.status.flight": "enabled",
    "map.timeout.mins": -1,
    "map.tracking.live": "enabled",
    "map.view.3d.basic": 3,
    "map.view.delay": "enabled",
    "map.view.fleet.onground": 1,
    "map.view.fullscreen": "enabled",
    "map.view.multi": "enabled",
    "map.widgets.bookmarks": "enabled",
    "map.widgets.last_clicked_flights": "enabled",
    "support.platform": "Limited",
    "user.fleets.max": 3,
    "user.fleets.max.aircraft": 1000,
    "app.android": "enabled",
    "app.ios": "enabled",
    "history.flight.kml": 25,
    "map.info.aircraft.age": "enabled",
    "map.info.aircraft.msn": "enabled",
    "map.info.flight.airspace": "enabled",
    "map.info.flight.ems": "enabled",
    "map.info.flight.ems.alt.gps": "enabled",
    "map.info.flight.ems.ias": "enabled",
    "map.info.flight.ems.mach": "enabled",
    "map.info.flight.ems.oat": "enabled",
    "map.info.flight.ems.tas": "enabled",
    "map.info.flight.ems.wind": "enabled",
    "map.info.flight.squawk": "enabled",
    "map.info.flight.vertical-speed": "enabled",
    "map.layer.atc": "enabled",
    "map.layer.navdata": "enabled",
    "map.layer.ndb": "enabled",
    "map.layer.ndb.alt.high": "enabled",
    "map.layer.ndb.alt.low": "enabled",
    "map.layer.ndb.charts": "enabled",
    "map.layer.tracks.oceanic": "enabled",
    "map.layer.vor": "enabled",
    "map.layer.weather": "enabled",
    "map.layer.weather.auradar": "enabled",
    "map.layer.weather.naradar": "enabled",
    "map.layer.weather.radar": "enabled",
    "map.layer.weather.radar.global": "enabled",
    "map.layer.weather.satellite": "enabled",
    "map.view.3d": "enabled",
    "map.view.list": "enabled",
    "map.view.radar": "enabled",
    "map.widgets.bookmarks.max": 25,
    "support.level": "Yes",
    "usage.rights": "Private",
    "user.alerts.max": 25,
    "user.bookmarks.max": 25,
    "user.sessions.max": 3,
    "user.users": 1,
    "map.layer.trail.tooltip": "enabled",
    "map.sidemenu.photo.hide": "enabled",
    "history.airport.days": 365
}
obj.userData.tokenLogin = "hb3k7lfXIwiNVxinB73J70bo0YeuKZE-SWTjrm1105L2NlD9bMmr5HX20vHGQ2ijBnDAahl9kJtzE5ALS7PEDrIDOc_MVAmu0kKgoLaMU8ZcC4-1TnmaAOOm71gs7N4ferTqeP5WLwLtWlOsrjLis4zcZh0ovPQVXfZCg7UlC5CMJGXCXQJlItmHsX1S2DYgr7QubMaP958f91Ms1dsUdcsTJ76cBLwxr82hvNVNSJP09_iW6GMYPs7jwmGRCQ-E0amENvLTh9xqSNMZfJVpLhfMEpO1W9dOaKZT6Dfp8_kWDLbgnABNILZp7sRU0waFKMN-Z3o5Qac4LwEqUNUvMVojzSoIweCYS7P4jrnwYOTIQVbthcmQw_fia5iQs-9Z2bIhexeOnNbJMnc-mH0W53_lfDckAV5ebPP5vPccHtvlj-fxZDTx_2WKDPSFGN6u";
obj.userData.accessToken = "eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJmbGlnaHRyYWRhcjI0LmNvbSIsImV4cCI6MTc3NDc2NTUwMiwiaWF0IjoxNzcyMTczNTAyLCJlbWFpbCI6InhoZDE5OTgxMjAyQGdtYWlsLmNvbSIsInVzZXJJZCI6MTg1NjQ4MDEsImtleVNlc3Npb24iOiI0MjgwN2JiZDIyYmJjMWRjMGIwMjc3ODMwODkwYzgwZmU1MjM3ZGI4YWE4ZWY3ZDM2OTNiNzU4MGRmODJmOTI0Iiwic2wiOiJHIiwiYWwiOiIwIiwicGsiOiIifQ.NMg6sSt35E-xyTdM8OK0jcuD4Q80ka0K8P8Rl5xTpsU";
body = JSON.stringify(obj);
$done({ body });