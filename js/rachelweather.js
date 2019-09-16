//api key 12d3e8d64461790a87b81d3cf9b8f315

//link to weather api
//var openWeatherURL = `https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=2d57a57cff835d1bdd699a50fab1b250`;
//$.ajax({
  //url:yelpURL,
//   method:"GET",
//   beforeSend: function (xhr) {
// xhr.setRequestHeader ("Authorization", "Bearer " + "XiFkJFuigGVABcZ-Xd8w2-i_UCfLMIIRPf6miBBNlbfUDlp7k-Z3tACaYHnJuOX97DzcFH2LrFn1c2-F3A2RxoKXDMyw0tLiW9jNPBeXpdaKIiWxSgmx2jZjfkl5XXYx" );
// },
// ​
// }).then(function(response){
//   console.log("Yelp")
//   console.log(response);
// ​
// });
// $.ajax({
// url: openWeatherURL,
// method: "GET"
// }).then(function(response) {
// console.log("openWeather")
// console.log(response);
// });

var cityToFind = 'Seattle, Washington';
var url = `https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/forecast?q=${cityToFind}&appid=12d3e8d64461790a87b81d3cf9b8f315`

$.ajax({
    url: url,
    method: "GET"
}).then(function(res) {
    console.log("worked")
console.log(res);
}).catch(function(err){
    console.log(err)
});