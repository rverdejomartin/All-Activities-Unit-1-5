let colorActual = "";
const colores = ["amarillo", "azul", "rojo", "verde"];
let textoElemento;

window.onload = () => {
    jugar();
}

function elegirNuevoColor(){
    let colorRandomIndex = Math.floor(Math.random()*colores.length);
    colorActual = colores[colorRandomIndex];
    if(textoElemento){
        textoElemento.textContent = "Elige el color "+colorActual+":";
    }
}

function clickColor(e){
    if(e.target.id && e.target.id !== "imagenes"){
        if(e.target.id === colorActual){
            //es el mismo color
            alert("¡Color correcto!");
            elegirNuevoColor();
        } else{
            alert("Color incorrecto");
        }
    }
}

function jugar(){
    //inicializamos
    textoElemento = document.getElementById("elegir");
    let imagenesContenedor = document.getElementById("imagenes");

    //agregamos el evento
    imagenesContenedor.addEventListener("click", clickColor);
    //primer color para jugar
    elegirNuevoColor();
}