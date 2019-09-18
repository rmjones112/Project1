var packingList = {
    essentials: ["Lightweight clothing that can be layered","Long-sleeved shirts","Sweaters or fleece jacket","T-shirts and tank tops (be respectful of the culture you are visiting)","Pants and/or shorts","Belt","Socks – wool socks are best for hiking","Comfortable walking shoes","Rain jacket, windbreaker or umbrella","Pajamas/sleepwear","Underwear/delicates","Sunglasses and glasses case","Dresses and/or skirts","Jewelry – organize in a mini cube or circlet","Hat or sun visor","Scarf or bandana","Swimsuit or swim trunks – consider a wet/dry organizer","Cell phone and charger","Travel speakers","Travel pillow, eye mask and ear plugs","Electric converters and adapters","Travel apps that will help with language, and money conversion",], 
    warmWeather: ["shorts", "sunglasses", "sunscreen"],
    coldWeather: ["coat", "hat", "gloves"],
    concert: ["closed toe shoes"],
}


    // Create an initial toDoCount variable
    var toDoCount = 0;

    //  On Click event associated with the add-to-do function
    $("#add-to-do").on("click", function(event) {
      event.preventDefault();

      // Get the to-do "value" from the textbox and store it a variable
      var packingItem = $("#to-do").val().trim();
      if (packingItem){
        addPackingItem(packingItem)
      }
      // Create a new variable that will hold a "<p>" tag.
      // Then give it an ID in the following form:
      // "item-4" or "item-3" or "item-99", where the number is equal to toDoCount.
      // Then set the to-do "value" as text to this <p> element.
     
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
    function addPackingItem(packingItem){
      var toDoItem = $("<p>");

      toDoItem.attr("id", "item-" + toDoCount);
      toDoItem.text(packingItem);
      toDoItem.addClass("packing-list-item");
    
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
      $("#packingItems").prepend(toDoItem);

      // Clear the textbox when done
      $("#to-do").val("");

      // Add to the toDoCount
      toDoCount++;
    }