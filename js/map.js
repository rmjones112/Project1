function myMap() {
    var mapProperties = {
        // where to center the map
        center: new google.maps.LatLng(51.508742, -0.120850),
        //   the zoom level of the map
        zoom: 5,
    };
    // created a new map inside the div
    var map = new google.maps.Map(document.getElementById("map"), mapProperties);
}