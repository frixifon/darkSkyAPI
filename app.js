window.addEventListener('load', ()=>{
    let long = 24.7037952;
    let lat = 59.4075648;


    let temperatureDegree = document.querySelector(".temperature-degree");
    let temperatureDescription = document.querySelector(".temperature-description");
    let locationTimeZone = document.querySelector(".location-timezone");
    let temperatureSection = document.querySelector(".degree-section");
    let temperatureSectionSpan= document.querySelector(".degree-section span")
  /*   let long;
    let lat; */

  /*   if("geolocation" in navigator){
        long = position.coords.longitude;
        lat = position.coords.latitude;
        console.log("Long: ", long);
        console.log("Lat: ", lat);
    }
 */
    /* if(navigator.geolocation){
        navigator-geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            console.log("Long: ", long);
            console.log("lat: ", lat);

        })
    }
 */
    const proxy = "https://cors-anywhere.herokuapp.com/";
    const api= `${proxy}https://api.darksky.net/forecast/69fb9727b4fbc09bc9578c7228de41ca/${lat},${long}`;
    
    fetch(api)
    .then(response => {
        console.log(response);
       return response.json(); 
    })
    .then(data => {
        const {temperature, summary, icon}= data.currently;
        temperatureDegree.textContent = temperature;
        temperatureDescription.textContent = summary;
        locationTimeZone.textContent= data.timezone;
        console.log("Icon", icon);
        seticon(icon, document.querySelector(".icon"));

        let celsius = (temperature - 32) * (5/9);

        temperatureSection.addEventListener('click',() =>{
            if(temperatureSectionSpan.textContent === "F"){
                temperatureSectionSpan.textContent = "C";
                temperatureDegree.textContent = Math.floor(celsius);
            } else{
                temperatureSectionSpan.textContent = "F";
                temperatureDegree.textContent = temperature;
            }
        })

    })

    function seticon(icon, iconID){
        const skycons = new Skycons({color: "white"});
        const currentIcon = icon.replace(/-/g, "_").toUpperCase();
        skycons.play();
        return skycons.set(iconID, Skycons[currentIcon]);
    }



});