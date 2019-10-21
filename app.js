window.addEventListener('load', ()=>{
    let long = 24.7037952;
    let lat = 59.4075648;
    //let long;
    //let lat;

    if("geolocation" in navigator){
        long = position.coords.longitude;
        lat = position.coords.latitude;
        console.log("Long: ", long);
        console.log("Lat: ", lat);
    }

    /* if(navigator.geolocation){
        navigator-geolocation.getCurrentPosition(position => {
            long = position.coords.longitude;
            lat = position.coords.latitude;
            console.log("Long: ", long);
            console.log("lat: ", lat);
        })
    }
 */

 const proxy
});