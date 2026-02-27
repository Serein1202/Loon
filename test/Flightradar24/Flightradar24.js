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
body = JSON.stringify(obj);
$done({ body });