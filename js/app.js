$.ajax({
    url:`https://cors-anywhere.herokuapp.com/api.openweathermap.org/data/2.5/weather?q=London,uk&APPID=2d57a57cff835d1bdd699a50fab1b250`,
    method:"GET"

}).then(function(response){
    console.log(response);
});