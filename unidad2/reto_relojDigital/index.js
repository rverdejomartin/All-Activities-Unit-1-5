function actualizarReloj() {
    let ahora = new Date();

    // Obtener hora, minutos y segundos con 2 dígitos
    let horas = String(ahora.getHours()).padStart(2, '0');
    let minutos = String(ahora.getMinutes()).padStart(2, '0');
    let segundos = String(ahora.getSeconds()).padStart(2, '0');

    document.getElementById('hora').innerHTML = `${horas}:${minutos}:${segundos}`;

    // Formatear la fecha en español
    let opcionesFecha = { weekday: 'long', year: 'numeric', month: 'long', day: 'numeric' };
    let fechaFormateada = ahora.toLocaleDateString('es-ES', opcionesFecha);
    document.getElementById('fecha').innerHTML = fechaFormateada;
}

// Ejecutar inmediatamente y luego cada segundo
actualizarReloj();
setInterval(actualizarReloj, 1000);