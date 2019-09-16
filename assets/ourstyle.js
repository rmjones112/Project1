var destination = ""
var startDateRange = ""
var endDateRange = ""
var packingList = {
    essentials: ["cell phone charger", "Identificaiton", "Passport", "Camera"], 
    warmWeather: ["shorts", "sunglasses", "sunscreen"],
    coldWeather: ["coat", "hat", "gloves"],
    concert: ["closed toe shoes"],
    
}

//Created jquery event listener to detect form submission when "Let's Go" button has been clicked
$("#submitDestination").on("click", function (){
    //console.log("submitted")
    var location = $("#locationName").val()
    //console.log(location)
    destination = location
    console.log(destination, startDateRange, endDateRange)
});

//Daterange picker JS
$(function() {
    $('input[name="daterange"]').daterangepicker({
      opens: 'right'
    }, function(start, end, label) {
      console.log("A new date selection was made: " + start.format('YYYY-MM-DD') + ' to ' + end.format('YYYY-MM-DD'));
      startDateRange = start.format('YYYY-MM-DD');
      endDateRange = end.format('YYYY-MM-DD');
    });
  });
