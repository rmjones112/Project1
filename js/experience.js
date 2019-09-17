var yelpURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location=seattle&categories=active,arts'

// grabs information from "Yelp"
function grabExperiences(location){
    // link to yelp api
    var yelpURL = 'https://cors-anywhere.herokuapp.com/https://api.yelp.com/v3/businesses/search?location='+location+'&categories=active,arts&radius=16094&rating=3.5&price=2,3&limit=5';
    
    $.ajax({
        url:yelpURL,
        method:"GET",
        beforeSend: function (xhr) {
      xhr.setRequestHeader ("Authorization", "Bearer " + "5g5JBhiRRQYPP_XdUOB0yplJ7sMeepIg7suBSMb8ZgpEAmwGuGAO3--CzOc-3w0Zx35sw19opkOG02GSGDexwEMf0h5USlpO1ivs3niI9aL4A-UfrOzFg0BET6N6XXYx" );
  },

      }).then(function(response){
        console.log("Yelp")
        console.log(response);
        //retrieves business name
        console.log("name of  experience: " + response.businesses[0].name);
        console.log("Price of the experience: " + response.businesses[0].price);
        console.log("Rating of the experience: " + response.businesses[0].rating);
        console.log("link to yelp review of the experience: " + response.businesses[0].url);
        console.log("Image of the experience: " + response.businesses[0].img_url);
        // $("#portfolioModal5 #experienceContent").html(JSON.stringify(response))
        var container = $("<div>")
        $.each(response.businesses, function(key,val){ 
            $("<a target='_blank' href = '" + val.url + "'>").append($("<h3>" + val.name + "</h3>")).appendTo(container)
            $("<h3>" + val.price + "</h3>").appendTo(container)
            if (val.img_url){
                $("<img src='" + val.img_url + "' />").appendTo(container)
            }
           
        })
        container.appendTo($("#portfolioModal5 #experienceContent"))
      });
    }  
// grabExperiences();
