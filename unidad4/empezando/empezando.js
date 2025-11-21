//onload
window.onload = ()=>{
    let div1 = document.getElementById("div1");
    let div2 = document.getElementById("div2");
    let div3 = document.getElementById("div3");
    añadirEventos(div1);
    añadirEventos(div2);
    añadirEventos(div3);
    document.addEventListener("mousemove", (e) => {
    if (e.clientX < 200) {
        document.body.style.backgroundColor = "brown";
    } else {
        document.body.style.backgroundColor = "white";
    }
});
}


function añadirEventos(target){
    target.addEventListener("mouseover", cambiaColorEntrada);
    target.addEventListener("mouseout", cambiaColorSalida);
    target.addEventListener("click", () => {target.style.backgroundColor = "green"});
}

function cambiaColorEntrada(evento){
    let n;
    if(evento.altKey) n = 1;
    else if(evento.ctrlKey) n = 2;
    else n = 3;
    switch(n){
        case 1: evento.target.style.backgroundColor = "Blue"; break;
        case 2: evento.target.style.backgroundColor = "red"; break;
        case 3: evento.target.style.backgroundColor = "pink"; break;
        default:
    }
}
function cambiaColorSalida(evento){
    evento.target.style.backgroundColor = "white";
}