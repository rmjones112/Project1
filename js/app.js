
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
            restaurantDiv.append("<div>Restaurant Name: " + response.businesses[i].name + "<div>");
            // Gets the rating of the restaurant 
            restaurantDiv.append("<div>Rating: " + response.businesses[i].rating + "<div>");
            // Gets restaurant price 
            restaurantDiv.append("<p> Price: " + response.businesses[i].price + "<p>");
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


// grabs information from "event bright
function eventSearch(location, startDate, endDate) {


    var eventBrightURL = `https://cors-anywhere.herokuapp.com/https://www.eventbriteapi.com/v3/events/search?location.address=${location}&location.within=10km&expand=venue&start_date.range_start=${startDate}&start_date.range_end=${endDate}`
    $.ajax({
        url: eventBrightURL,
        method: "GET",
        headers: {
            Authorization: "Bearer GAFDAJ43Z42P2Z5NMDAQ"
        }
    }).then(function (response) {
        console.log("Event Bright")
        console.log(response);

        for (let i = 0; i < 5; i++) {

            var eventDiv = $("<div>");
            //image element to store businesses image url
            var eventImage = $(`<img src="${response.events[i].logo.original.url}" class="image-size">`)
            //Displays the name of the event
           // console.log("Name of the event: " + response.events[i].name.text)
            eventDiv.append("<div>Name of the event: " + response.events[i].name.text + "<div>");

            // Displays a summary of the event 
           // console.log("Summary: " + response.events[i].summary)
            eventDiv.append("<div>Event Summary: " + response.events[i].summary + "<div>");
            //adds Event picture with event information
            eventDiv.append(eventImage);


            // eventDiv.append(eventImage);
            $("#display-events").prepend(eventDiv);

        }
    })


};

//When the user chooses the their select days and presses the submit button we'll run this code
$("#submitDestination").on("click", function () {

    //clears the previous search info
    $("#display-events").empty();
    var entireDate = $("#date-range").val();

    var location = $("#locationName").val();

    console.log($("#testingDrTrae").val());

    //splits the dates at the "-" to store them in an array
    var dateArray = entireDate.split(" - ");

    //stores date info before the "-" mark; for ex: 08/02/2019 - 08/03/2019
    var startDate = dateArray[0]
    startDate = startDate.split('/');
    startDate.unshift(startDate[2]);
    startDate.pop()
    startDate = startDate.join('-');

    console.log('Joes date', startDate)

    //stores date info after the "-" mark; for ex: 08/02/2019 - 08/03/2019
    var endDate = dateArray[1]
    endDate = endDate.split('/');
    endDate.unshift(endDate[2]);
    endDate.pop()
    endDate = endDate.join('-');
    //adds start time to the end of selected date 
    newStartDate = startDate + "T00:00:01";
    //adds end time to the end of selected date 
    newEndDate = endDate + "T23:59:59";

    eventSearch(location, newStartDate, newEndDate);

});

//When the user enters a location and presses the "Let's Explor" button we'll search for food in that area
$("#submitDestination").on("click", function () {
    //clears the previous search info
    $("#display-food").empty();
    var location = $("#locationName").val()
    destination = location
    grabRestaurantInfo(location);
    //eventSearch(location)

});

//eventSearch("New Orleans", "2019-09-20T00:00:01", "2019-10-10T23:59:59");

