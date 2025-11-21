let map;
let marker;
let posiciones = [];
let distanciaTotal = 0;
function mostrarMapa(posicion){
    //guardar en array
    let puntos = [posicion.coords.latitude, posicion.coords.longitude];
    posiciones.push(puntos);
    if (!map) {
        map = L.map('map').setView(puntos, 18);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; OpenStreetMap'
        }).addTo(map);

        marker = L.marker(puntos).addTo(map);
    } else {
        marker.setLatLng(puntos);
        map.setView(puntos);
    }

    //distancia recorrida
    if (posiciones.length > 1) {
        // distancia entre el último punto y el penúltimo
        let puntoAnterior = posiciones[posiciones.length - 2];
        let puntoActual = posiciones[posiciones.length - 1];
        distanciaTotal += map.distance(puntoAnterior, puntoActual);
    }
    document.getElementById('distancia').textContent = "Distancia recorrida: " + distanciaTotal.toFixed(2) + " metros";
}
if (navigator.geolocation) {
    navigator.geolocation.watchPosition(mostrarMapa);
} else {
    console.log("No se soporta la geolocalización.");
}