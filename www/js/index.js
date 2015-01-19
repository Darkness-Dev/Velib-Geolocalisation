var map;
var marker;
var watchID;

$(document).ready(function () {
    document.addEventListener("deviceready", onDeviceReady, false);
    //uncomment for testing in Chrome browser
    onDeviceReady();
});

function onDeviceReady() {
    $(window).unbind();
    $(window).bind('pageshow resize orientationchange', function (e) {
        max_height();
    });
    max_height();
    google.load("maps", "3.8", {"callback": map, other_params: "sensor=false&language=fr"});
}

function initialize() {
    var latlng = new google.maps.LatLng(48.6263283,2.4384803);

    var myOptions = {
        zoom: 15,
        center: latlng,
        streetViewControl: true,
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        zoomControl: true
    };
    map = new google.maps.Map(document.getElementById('map-canvas'),
            myOptions);

    google.maps.event.addDomListener(window, 'load', initialize);

    google.maps.event.addListenerOnce(map, 'load', function () {
        watchID = navigator.geolocation.watchPosition(gotPosition, null, {maximumAge: 5000, timeout: 60000, enableHighAccuracy: true});
        google.maps.event.addDomListener(window, 'load', map);

    });

    google.maps.event.addDomListener(window, 'load', map);

}
function max_height() {
    var h = $('div[data-role="header"]').outerHeight(true);
    var f = $('div[data-role="footer"]').outerHeight(true);
    var w = $(window).height();
    var c = $('div[data-role="content"]');
    var c_h = c.height();
    var c_oh = c.outerHeight(true);
    var c_new = w - h - f - c_oh + c_h;
    var total = h + f + c_oh;
    if (c_h < c.get(0).scrollHeight) {
        c.height(c.get(0).scrollHeight);
    } else {
        c.height(c_new);
    }
}
// Method to open the About dialog
function showAbout() {
    showAlert("Google Maps", "Velib Geolocalisation version : 1.0.0");
}
;

function showAlert(message, title) {
    if (window.navigator.notification) {
        window.navigator.notification.alert(message, null, title, 'OK');
    } else {
        alert(title ? (title + ": " + message) : message);
    }
}

function gotPosition(position) {
    map.setCenter(new google.maps.LatLng(position.coords.latitude, position.coords.longitude));

    var point = new google.maps.LatLng(position.coords.latitude, position.coords.longitude);
    if (!marker) {
        //create marker
        marker = new google.maps.Marker({
            position: point,
            map: map
        });
    } else {
        //move marker to new position
        marker.setPosition(point);
    }
}