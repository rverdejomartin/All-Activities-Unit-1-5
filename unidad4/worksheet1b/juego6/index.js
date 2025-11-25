
let correcto=false;
let simon;
let jugador;
let turnos;
let colores;
let elegidos;

window.onload = () => {
  simondice();
};

function parpadeo(color) {
  color.style.backgroundColor = "transparent";
  setTimeout(() => {
    color.style.backgroundColor = color.id;
  }, 500);
}


function simondice() {
    let alea;
    let contador = 0;
    elegidos=1;
    jugador=[];
    if(correcto==false){
        colores = document.getElementsByTagName("td");
        simon=[];
        
        turnos = 1;
        correcto=true;
        for (let i = 0; i < colores.length; i++) {
            colores[i].addEventListener("click",()=>{
            respuesta(colores[i]);
           });
        }
    }

    let intervalo = setInterval(() => {
        if(simon[contador]!=undefined){
            parpadeo(simon[contador])
        }
        else{
            alea = Math.floor(Math.random() * 4);
            parpadeo(colores[alea]);
            simon.push(colores[alea]);
        }

        contador++;
        if (contador >= turnos) 
            clearInterval(intervalo);
        }
    ,1000);
}

function respuesta(color) {
    jugador.push(color);
    let i=0;
    parpadeo(color);

    if(elegidos==turnos){
        do{
            correcto=jugador[i].id==simon[i].id;
            i++;    
        }while(i<turnos-1 && correcto==true);

        if(turnos<4 && correcto==true){
        turnos++
        console.log("Pasamos al siguiente turno");
        simondice();
        }
        else{
            if(turnos==4 && correcto==true){
                console.log("Ganaste")
            }else{
                console.log("Perdistes reiniciando");
                simondice();
            }
        }
    }
    else{
        elegidos++
    }
}