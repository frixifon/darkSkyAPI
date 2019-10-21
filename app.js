window.addEventListener('load', ()=>{
    let long = 24.7037952;
    let lat = 59.4075648;
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
    const api= `${proxy}https://api.darksky.net/forecast/07983bf47cebd8108d5c937972f8b874/${lat},${long}`;
    
    fetch(api)
    .then(response => {
       return response.json(); 
    });



});