
var yelpURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=seattle&categories=italian'

var weatherURL = `https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=2d57a57cff835d1bdd699a50fab1b250`


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
        // console.log("Yelp")
        // // retrieves business name
        // console.log("name of  restaurant: " + response.businesses[0].name);
        // console.log("Price of the restaurant: " + response.businesses[0].price);
        // console.log("Rating of the restaurant: " + response.businesses[0].rating);
        // console.log("link to yelp review of the restaurant: " + response.businesses[0].url);
        // console.log("Image of the restaurant: " + response.businesses[0].image_url);
        // console.log(response);

        //Loops through yelps businesses array 
        for (let i = 0; i < 5; i++) {
            //creates a new div to hold restaurant info
            var restaurantDiv = $("<div>");
            //image element to store businesses image url
            var restaurantImage = $(`<img src="${response.businesses[i].image_url}" class="image-size">`);

            console.log(restaurantImage);
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



// grabs information about weather from "open weather"
$.ajax({
    url: weatherURL,
    method: "GET"
    
}).then(function (response) {
    // console.log("weather")
    // console.log(response);
});


// grabs information from "event bright" on events happening
// TODO: Put in event  a specific date for events
// TODO: put in a distance for events
// TODO: put in the location for the events

function eventSearch(/*startDate,endDate*/){
    
    
    
    
    // var eventBrightURL = `https://cors-anywhere.herokuapp.com/https://www.eventbriteapi.com/v3/events/search?location.address=seattle&location.within=10km&expand=venue&start_date=${startDate}&range_end${endDate}`
var eventBrightURL = `https://cors-anywhere.herokuapp.com/https://www.eventbriteapi.com/v3/events/search?location.address=seattle&location.within=10km&expand=venue`


$.ajax({
    url: eventBrightURL,
    method: "GET",
    headers: {
        Authorization: "Bearer GAFDAJ43Z42P2Z5NMDAQ"
    }
    

}).then(function (response) {
    console.log("Event Bright")
    console.log(response);
    
    var eventDiv = $("<div>");
    //image element to store businesses image url
    // var eventImage = $(`<img src="${response.events[0].}" class="image-size">`)
    //Displays the name of the event
    console.log("Name of the event: " + response.events[0].name.text)
    eventDiv.append(response.events[0].name.text);
    
    // Displays a summary of the event 
    console.log("Summary: " + response.events[0].summary)
    eventDiv.append(response.events[0].start.summary);
    
    //Displays if the event will be free or paid for
    console.log("Is this event free: " + response.events[0].is_free)
    eventDiv.append(response.events[0].end.is_free);
    
    //displays the price of the event
    // eventDiv.append(response.events[0].);
    
    // eventDiv.append(eventImage);
    
    $("#display-events").prepend(eventDiv);
})


};

//When the user chooses the their select days and presses the submit button we'll run this code
$("#submitDestination").on("click",function(){
    
    //clears the previous search info
    $("#display-events").empty();
    var entireDate = $("#date-range").val();
    //splits the dates at the "-" to store them in an array
    var dateArray = entireDate.split(" - ");

    //stores date info before the "-" mark; for ex: 08/02/2019 - 08/03/2019
    var startDate = dateArray[0];

    //stores date info after the "-" mark; for ex: 08/02/2019 - 08/03/2019
    var endDate = dateArray[1];

    eventSearch(startDate,endDate);
    
    
});    

//When the user enters a location and presses the "Let's Explor" button we'll search for food in that area
$("#submitDestination").on("click", function () {
    //clears the previous search info
    $("#display-food").empty();
    var location = $("#locationName").val()
    destination = location
    console.log(destination, startDateRange, endDateRange)
    grabRestaurantInfo(location);
    
});

eventSearch();