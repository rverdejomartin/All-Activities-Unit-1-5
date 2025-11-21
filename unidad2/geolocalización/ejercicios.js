// ===============================
// 1. obtener tu ubicación actual
// ===============================
function obtenerLocalizacion(posicion){
    document.getElementById("actual").textContent =
        "Lat: " + posicion.coords.latitude + ", Lon: " + posicion.coords.longitude;
}

function onError(error) {
    let mensaje;
    switch(error.code) {
        case error.PERMISSION_DENIED:
            mensaje = "Has denegado el permiso de ubicación."; break;
        case error.POSITION_UNAVAILABLE:
            mensaje = "La información de ubicación no está disponible."; break;
        case error.TIMEOUT:
            mensaje = "La solicitud de ubicación ha caducado."; break;
        default:
            mensaje = "Ha ocurrido un error desconocido.";
    }
    document.getElementById("actual").textContent = mensaje;
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(obtenerLocalizacion, onError);
} else {
    document.getElementById("actual").textContent = "Geolocalización no soportada.";
}

// ===============================
// 2. actualizar ubicación en tiempo real
// ===============================
function actualizarUbicacion(posicion){
    let lat = posicion.coords.latitude;
    let lon = posicion.coords.longitude;
    document.getElementById("actualizar").textContent = "Lat: " + lat + ", Lon: " + lon;
}

if (navigator.geolocation) {
    navigator.geolocation.watchPosition(actualizarUbicacion);
} else {
    document.getElementById("actualizar").textContent = "Geolocalización no soportada.";
}

// ===============================
// 3. mostrar precisión (accuracy)
// ===============================
function mostrarAccuracy(posicion){
    let acc = posicion.coords.accuracy;
    document.getElementById("accuracy").textContent = "Precisión: " + acc + " metros";
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarAccuracy);
} else {
    document.getElementById("accuracy").textContent = "Geolocalización no soportada.";
}

// ===============================
// 4. integración con Leaflet   y  polilinea integrada
// ===============================
let map;
let marker;
let listado = [];
let polyline;
function mostrarMapa(posicion){
    let puntos = [posicion.coords.latitude, posicion.coords.longitude];
    listado.push(puntos);
    if (listado.length == 1) {
        map = L.map('mapa').setView(puntos, 18);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; OpenStreetMap'
        }).addTo(map);

        marker = L.marker(puntos).addTo(map);
        polyline = L.polyline(listado, {color: 'red'}).addTo(map);
    } else {
        marker.setLatLng(puntos);
        map.setView(puntos);
        polyline.setLatLngs(listado);
    }
}

if (navigator.geolocation) {
    navigator.geolocation.watchPosition(mostrarMapa);
} else {
    console.log("No se soporta la geolocalización.");
}

// ===============================
// 5. calcular distancia entre 2 ubicaciones (Haversine)
// ===============================
// Convierte grados a radianes
function toRad(x) { return x * Math.PI / 180; }

// Fórmula de Haversine
function haversine(lat1, lon1, lat2, lon2) {
    let R = 6371e3;
    let dLat = toRad(lat2 - lat1);
    let dLon = toRad(lon2 - lon1);
    let a = Math.sin(dLat/2) * Math.sin(dLat/2) +
            Math.cos(toRad(lat1)) * Math.cos(toRad(lat2)) *
            Math.sin(dLon/2) * Math.sin(dLon/2);
    let c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
    return R * c;
}

function mostrarDistancia(posicion) {
    let lat1 = posicion.coords.latitude;
    let lon1 = posicion.coords.longitude;

    // marruecos
    let lat2 = 31.791702;
    let lon2 = -7.09262;

    let distancia = haversine(lat1, lon1, lat2, lon2);

    document.getElementById("resultado").textContent =
        "Tu ubicación: " + lat1.toFixed(5) + ", " + lon1.toFixed(5) +
        " | Distancia a Marruecos: " + (distancia/1000).toFixed(2) + " km";
}

if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(mostrarDistancia, onError);
} else {
    document.getElementById("resultado").textContent =
        "Geolocalización no soportada en este navegador.";
}


//9.geofencing basico
let map2;
let marker2;
let circle;
let dentroZona = false;
function mostrarMapa2(posicion){
    let lat = posicion.coords.latitude;
    let lon = posicion.coords.longitude;

    if (!map2) {
        map2 = L.map('mapa2').setView([lat, lon], 18);
        L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
            maxZoom: 19,
            attribution: '&copy; OpenStreetMap'
        }).addTo(map2);

        marker2 = L.marker([lat, lon]).addTo(map2);
        circle = L.circle([lat, lon], {
            color: 'red',
            fillColor: '#f03',
            fillOpacity: 0.5,
            radius: 10
        }).addTo(map2);
    } else {
        marker2.setLatLng([lat, lon]);
        map2.setView([lat, lon]);
    }

    //calculos del radio y centro del geofencing
    let centro = circle.getLatLng();
    let radio = circle.getRadius();
    let distancia = map2.distance([lat,lon], centro);

    let dentro = false;
    if(distancia <= radio) dentro = true;
    //detectar entrada o salida
    if(dentro !== dentroZona){
        if(dentro){
            console.log("Estas en la zona");
        }else{
        console.log("Fuera de la zona");
        }
        dentroZona = dentro;
    } 
}

if (navigator.geolocation) {
    navigator.geolocation.watchPosition(mostrarMapa2);
} else {
    console.log("No se soporta la geolocalización.");
}