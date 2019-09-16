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


  
   

    // Create an initial toDoCount variable
    var toDoCount = 0;

    //  On Click event associated with the add-to-do function
    $("#add-to-do").on("click", function(event) {
      event.preventDefault();

      // Get the to-do "value" from the textbox and store it a variable
      var toDoTask = $("#to-do").val().trim();

      // Create a new variable that will hold a "<p>" tag.
      // Then give it an ID in the following form:
      // "item-4" or "item-3" or "item-99", where the number is equal to toDoCount.
      // Then set the to-do "value" as text to this <p> element.
      var toDoItem = $("<p>");

      toDoItem.attr("id", "item-" + toDoCount);
      toDoItem.text(toDoTask);

      // Create a button with unique identifiers based on what number it is in the list. Again use jQuery to do this.
      // Give your button a data attribute called data-to-do and a class called "checkbox".
      // Lastly add a checkmark inside.

      var toDoClose = $("<button>");

      toDoClose.attr("data-to-do", toDoCount);
      toDoClose.addClass("checkbox");
      toDoClose.text("✓");

      // Append the button to the to do item
      toDoItem = toDoItem.prepend(toDoClose);

      // Add the button and to do item to the to-dos div
      $("#to-dos").append(toDoItem);

      // Clear the textbox when done
      $("#to-do").val("");

      // Add to the toDoCount
      toDoCount++;
    });

    // When a user clicks a check box then delete the specific content
    // (NOTE: Pay attention to the unusual syntax here for the click event.
    // Because we are creating click events on "dynamic" content, we can't just use the usual "on" "click" syntax.)
    $(document.body).on("click", ".checkbox", function() {

      // Get the number of the button from its data attribute and hold in a variable called  toDoNumber.
      var toDoNumber = $(this).attr("data-to-do");

      // Select and Remove the specific <p> element that previously held the to do item number.
      $("#item-" + toDoNumber).remove();
    });