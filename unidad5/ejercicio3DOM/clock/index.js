//variables de ayuda
let intervalo = null;
let tiempoInicial = 0;

window.onload = ()=>{
    let btnStart = document.getElementById("start");
    let btnStop = document.getElementById("stop");
    let btnReset = document.getElementById("reset");  
    
    //ahora tenemos que agregarle el evento de click para cada uno
    //boton start
    btnStart.addEventListener("click", (e)=>{
        if(intervalo === null){
            intervalo = setInterval(iniciarTiempo, 1000);
        }
    })
    btnStop.addEventListener("click", detener)
    btnReset.addEventListener("click", resetear);
}

function iniciarTiempo(){
    tiempoInicial++;

    //calculo de minutos segundos
    let minutos = Math.floor(tiempoInicial/60);
    let segundos = tiempoInicial%60;

    //formateo
    let formatMinutos = String(minutos).padStart(2, '0');
    let formatSegundos = String(segundos).padStart(2, '0');

    document.getElementById("tiempo").innerHTML = `${formatMinutos}:${formatSegundos}`;
}

function detener(){
    if(intervalo !==null){
        clearInterval(intervalo);
        intervalo = null; //devolvemos a null para saber que no esta corriendo
    }
}

function resetear(){
    detener(); //lo detiene y detiene el interval

    tiempoInicial = 0;
    document.getElementById("tiempo").innerHTML = "00:00"; //le devuelve el formato a 00:00
}