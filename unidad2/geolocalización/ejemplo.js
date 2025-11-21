function obtengoposicion(posicion){

    console.log(posicion.coords.latitude, posicion.coords.longitude);
    var map = L.map('map').setView([posicion.coords.latitude, posicion.coords.longitude], 19);
    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    var marker = L.marker([posicion.coords.latitude, posicion.coords.longitude]).addTo(map); // para el puntero del marcador

}
if(navigator.geolocation){
    navigator.geolocation.watchPosition(obtengoposicion); // los callback sin parentesis 
} else {
    console.log("No se soporta la geolocalizacion");
}