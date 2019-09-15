
var yelpURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=seattle&categories=italian'

var weatherURL = `https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=2d57a57cff835d1bdd699a50fab1b250`

var eventBrightURL =`https://cors-anywhere.herokuapp.com/https://www.eventbrite.com/oauth/authorize?response_type=code&client_id=KINSGLZ2GOYY4ADBGQY&redirect_uri=https://www.eventbrite.com/oauth/VD4EN65PKYP7BLSJ4XPA&`

// grabs information about food from "yelp"
$.ajax({
    url: yelpURL,
    method: "GET",
    beforeSend: function (xhr) {
        xhr.setRequestHeader("Authorization", "Bearer" + "XiFkJFuigGVABcZ-Xd8w2-i_UCfLMIIRPf6miBBNlbfUDlp7k-Z3tACaYHnJuOX97DzcFH2LrFn1c2-F3A2RxoKXDMyw0tLiW9jNPBeXpdaKIiWxSgmx2jZjfkl5XXYx");
    },

}).then(function(response){
    console.log("Yelp");
    console.log(response);

});
// grabs information about weather from "open weather"
$.ajax({
    url: weatherURL,
    method: "GET"

}).then(function (response) {
    console.log("weather")
    console.log(response);
});

// // grabs information from "event bright" on events happening 
// $.ajax({
//     url: eventBrightURL,
//     method: "GET",
//     beforeSend: function (xhr) {
//         xhr.setRequestHeader("Authorization: Bearer GAFDAJ43Z42P2Z5NMDAQ");
//     },
    

// }).then(function(response){
//     console.log("Event Bright")
//     console.log(response);

// });