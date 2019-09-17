
var yelpURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=seattle&categories=italian'

var weatherURL = `https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=2d57a57cff835d1bdd699a50fab1b250`

var eventBrightURL = `https://cors-anywhere.herokuapp.com/https://www.eventbriteapi.com/v3/events/search?location.address=seattle&location.within=10km&expand=venue`

// grabs information from "Yelp"
function grabRestaurantInfo(location) {
    // link to yelp api
    var yelpURL = `https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=${location}&radius=16094&rating=5&price=2,3&limit=5`;

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
        console.log("Image of the restaurant: " + response.businesses[0].image_url);
        console.log(response);

        //Loops through yelps businesses array 
        for (let i = 0; i < 5; i++) {
            //creates a new div to hold restaurant info
            var restaurantDiv = $("<div>");
            //image element to store businesses image url
            var restaurantImage = $(`<img src="${response.businesses[i].image_url}" class="image-size">`,)
            
            console.log(restaurantImage)
            //Gets restaurant name
            restaurantDiv.append("Restaurant Name: " + response.businesses[i].name);
            // Gets the rating of the restaurant 
            restaurantDiv.append(" Rating: " + response.businesses[i].rating);
            // Gets restaurant price 
            restaurantDiv.append(" Price: " + response.businesses[i].price);
            //adds restaurantImage to restaurant info
            restaurantDiv.append(restaurantImage);

            $("#display-food").prepend(restaurantDiv);
        }

    });



}

//Created jquery event listener to detect form submission when "Let's Go" button has been clicked
$("#submitDestination").on("click", function (){
    $("#display-food").empty();
    var location = $("#locationName").val()
    destination = location
    console.log(destination, startDateRange, endDateRange)
    grabRestaurantInfo(location);
    //jquery animate and scroll top
});


// grabs information about weather from "open weather"
$.ajax({
    url: weatherURL,
    method: "GET"

}).then(function (response) {
    console.log("weather")
    console.log(response);
});


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