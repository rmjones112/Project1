var destination = ""
var startDateRange = ""
var endDateRange = ""

//Created jquery event listener to detect form submission when "Let's Explor" button has been clicked
$("#submitDestination").on("click", function (){
  $("#experienceContent").empty();
    //console.log("submitted")
    var location = $("#locationName").val()
    //console.log(location)
    destination = location
    // console.log(destination, startDateRange, endDateRange)
    grabExperiences(location)
    //jquery animate and scroll top
//george
    var elmnt = document.getElementById("portfolio");
    elmnt.scrollIntoView();
//rachel's function for weather
    fetchWeather(location);

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

$(document).ready(function(){
  $.each(packingList.essentials, function(key,item){
    addPackingItem(item)
  })
})
  
   
