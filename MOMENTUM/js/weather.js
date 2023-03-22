function onGeoOk(position){
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    console.log("Youe live in!", lat, lng);
}
function onGeoError(){
    alert("Can't find you. No weathe for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);