window.addEventListener('load', ()=>{
    let long = 24.7037952;
    let lat = 59.4075648;

    let temperatureDegree = document.querySelector(".temperature-degree");
    let temperaturDescription = document.querySelector(".temperature-description");
    let locationTimezone = document.querySelector(".location-timezone");
    let degreeSection = document.querySelector(".degree-section");
    let temperatureSectionSpan = document.querySelector(".degree-section span");
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
       return response.json(); 
    })
    .then(data => {
        const {temperature, summary, icon} = data.currently;
        temperatureDegree.textContent = temperature;
        temperaturDescription.textContent = summary;
        locationTimezone.textContent = data.timezone;
        
        let celsius = (temperature - 32)* (5/9);

        temperatureSectionSpan.addEventListener("click", () => {
            if(temperatureSectionSpan.textContent == "F"){
                temperatureSectionSpan.tetContent = "C";
                temperatureDegree.textContent = Math.floor(celsius);
            }
            else{
                temperatureSectionSpan.tetContent = "F";
                temperatureDegree.textContent = temperature;
            }
        })
    })
});