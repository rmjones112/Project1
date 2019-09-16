
var yelpURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=seattle&categories=italian'

var weatherURL = `https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=2d57a57cff835d1bdd699a50fab1b250`

var eventBrightURL = `https://cors-anywhere.herokuapp.com/https://www.eventbriteapi.com/v3/events/search?location.address=seattle&location.within=10km&expand=venue`

// grabs information from "Yelp"
function grabRestaurant() {
    // link to yelp api
    var yelpURL = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=seattle&categories=pizza&radius=16094&rating=3.5&price=2,3&limit=5`;

    $.ajax({
        url: yelpURL,
        method: "GET",
        beforeSend: function (xhr) {
            xhr.setRequestHeader("Authorization", "Bearer " + "XiFkJFuigGVABcZ-Xd8w2-i_UCfLMIIRPf6miBBNlbfUDlp7k-Z3tACaYHnJuOX97DzcFH2LrFn1c2-F3A2RxoKXDMyw0tLiW9jNPBeXpdaKIiWxSgmx2jZjfkl5XXYx");
        },

    }).then(function (response) {
        console.log("Yelp")
        //retrieves business name
        console.log("name of  restaurant: " + response.businesses[0].name);
        console.log("Price of the restaurant: " + response.businesses[0].price);
        console.log("Rating of the restaurant: " + response.businesses[0].rating);
        console.log("link to yelp review of the restaurant: " + response.businesses[0].url);
        console.log("Image of the restaurant: " + response.businesses[0].img_url);
        console.log(response);


    });

    // var foodDiv = $("<div class=display-food>");
    // foodDiv.append(response.business[0].name)


}
// grabs information about weather from "open weather"
$.ajax({
    url: weatherURL,
    method: "GET"

}).then(function (response) {
    console.log("weather")
    console.log(response);
});

// grabRestaurant();
// grabs information from "event bright" on events happening 
$.ajax({
    url: eventBrightURL,
    method: "GET",
    headers: {
        Authorization: "Bearer GAFDAJ43Z42P2Z5NMDAQ"
    }


}).then(function (response) {
    console.log("Event Bright")
    console.log(response);

})