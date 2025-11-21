// Información del navegador
document.getElementById("browser").textContent = "Navegador: " + navigator.userAgent;
document.getElementById("language").textContent = "Idioma: " + navigator.language;
document.getElementById("platform").textContent = "Plataforma: " + navigator.platform;
document.getElementById("resolution").textContent = "Resolución: " + screen.width + " x " + screen.height;

// URL actual
document.getElementById("url").textContent = "URL actual: " + window.location.href;

// Redirección con botón
document.getElementById("btn-redirect").onclick = () => {
window.location.href = "https://developer.mozilla.org/es/";
};

// Información de la pantalla
document.getElementById("total-res").textContent = "Resolución total: " + screen.width + " x " + screen.height;
document.getElementById("avail-res").textContent = "Área disponible: " + screen.availWidth + " x " + screen.availHeight;
document.getElementById("orientation").textContent = "Orientación: " + (screen.orientation ? screen.orientation.type : "No disponible");
document.getElementById("color-depth").textContent = "Profundidad de color: " + screen.colorDepth + " bits";
document.getElementById("pixel-depth").textContent = "Profundidad de píxel: " + screen.pixelDepth + " bits";
