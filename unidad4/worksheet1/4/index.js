window.onload = ()=>{
    let tr, td;
    let tabla = document.getElementById("tabla");
    let btn = document.getElementById("botonTotal");
    
    if(btn){
        btn.addEventListener("click", borradoTotal);
    }

    for(i = 0; i<100;i++){
        tr = document.createElement("tr");
        tr.addEventListener("mouseover", entra);

        for(j = 0; j<100; j++){
            td = document.createElement("td");
            tr.appendChild(td);
        }
        tabla.appendChild(tr);
    }
}
function entra(e){
    if(e.altKey){
        e.target.style.backgroundColor = "pink";
    }else if(e.ctrlKey){
        borrarFila(e.target);
    } 
    else e.target.style.backgroundColor = "black";
}
function borradoTotal(){
    let celda = tabla.getElementsByTagName("td");
    for(let i = 0;i<celda.length; i++){
        celda[i].style.backgroundColor = "";
    }
}
function borrarFila(e){
    let fila = e.parentNode;
    let celdaFila = fila.getElementsByTagName("td");
    for(let i = 0; i < celdaFila.length; i++){
        // Eliminamos el estilo en línea para borrar el color
        celdaFila[i].style.backgroundColor = ""; 
    }
}