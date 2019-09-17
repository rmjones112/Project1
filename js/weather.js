//api key a300a7a9db8bfc85777c8db570674ef3
//Object Destructuring
function getWeatherWithCoords(coordinates) {
    const temperatureDescription = document.querySelector(`.temperature-description`);
    const temperatureDegree = document.querySelector(`.temperature-degree`);
    const locationTimezone = document.querySelector(`.location-timezone`);
    
    
    //using this it pulls up current location
    
            //changed set long and lat at end of link from website
    const proxy = `https://cors-anywhere.herokuapp.com/`   
    const api = `${proxy}https://api.darksky.net/forecast/a300a7a9db8bfc85777c8db570674ef3/${coordinates.lat},${coordinates.long}`;
            
            fetch(api)
            .then(response => response.json())
            .then(data => {
                //it says there is a promise error here that I don't see 
                console.log(data);
                const {temperature, summary, icon } = data.currently;
                //set DOM elements from API
                temperatureDegree.textContent = temperature;
                temperatureDescription.textContent = summary;
                locationTimezone.textContent = data.timezone;
                //set Icon
                console.log(icon);
                setIcons(icon,'icon');
            });
        
    //definded function and added icon and icon id
    function setIcons(icon, iconId){
        const skycons = new Skycons({color:"white"});
        console.log(skycons, icon)
        //should look for everyline and replace w underscore for skysons formatting
        const currentIcon = icon.replace(/-/g,"_").toUpperCase();
        //animates 
        console.log('current icon', currentIcon,iconId);
        skycons.play();
        return skycons.add(document.getElementById(iconId), Skycons[currentIcon]);

    }
    };

    function fetchWeather(city){
        var url = `https://geocode.xyz/${city}?json=1`;
        fetch(url)
        .then(data => data.json())
        .then(coords => {
            return {lat: coords.latt, long: coords.longt};
        })
        .then(coordinates => getWeatherWithCoords(coordinates))
        .catch(err => console.log(err));
    }

    $('.submit').on('click', function(event){
        event.preventDefault();
        var city = $('.weather-val').val();
        //Whats next
        fetchWeather(city);
    });