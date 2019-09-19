var packingList = {
    essentials: ["Lightweight clothing that can be layered","Long-sleeved shirts","Sweaters or fleece jacket","T-shirts and tank tops (be respectful of the culture you are visiting)","Pants and/or shorts","Belt","Socks – wool socks are best for hiking","Comfortable walking shoes","Rain jacket, windbreaker or umbrella","Pajamas/sleepwear","Underwear/delicates","Sunglasses and glasses case","Dresses and/or skirts","Jewelry – organize in a mini cube or circlet","Hat or sun visor","Scarf or bandana","Swimsuit or swim trunks – consider a wet/dry organizer","Cell phone and charger","Travel speakers","Travel pillow, eye mask and ear plugs","Electric converters and adapters","Travel apps that will help with language, and money conversion",], 
    warmWeather: ["shorts", "sunglasses", "sunscreen"],
    coldWeather: ["coat", "hat", "gloves"],
    concert: ["closed toe shoes"],
}


   
    var toDoCount = 0;
    $("#add-to-do").on("click", function(event) {
      event.preventDefault();
      var packingItem = $("#to-do").val().trim();
      if (packingItem){
        addPackingItem(packingItem)
      }
    });

    $(document.body).on("click", ".checkbox", function() {
      var toDoNumber = $(this).attr("data-to-do");
      $("#item-" + toDoNumber).remove();
    });
    function addPackingItem(packingItem){
      var toDoItem = $("<p>");

      toDoItem.attr("id", "item-" + toDoCount);
      toDoItem.text(packingItem);
      toDoItem.addClass("packing-list-item");

      var toDoClose = $("<button>");

      toDoClose.attr("data-to-do", toDoCount);
      toDoClose.addClass("checkbox");
      toDoClose.text("✓");

      toDoItem = toDoItem.prepend(toDoClose);

      $("#packingItems").prepend(toDoItem);
      $("#to-do").val("");
      toDoCount++;
    }