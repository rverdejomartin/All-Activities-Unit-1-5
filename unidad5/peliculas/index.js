var nombre = "";         
var cont = 1;             
var anio = "";             
var contenedor;
var input;                
var inputAnio;
var cargando = false;   
var divFlotanteDetalle = null;  
var detenerScroll = false;     

function maquetar(data){
    for(const peli of data.Search){
        let divPeli = document.createElement("div");
        let titulo = document.createElement("p");
        let imagen = document.createElement("img");
        let id = peli.imdbID;
        divPeli.id = id;
        titulo.innerHTML = peli.Title;
        imagen.src = peli.Poster;
        divPeli.appendChild(imagen);
        divPeli.appendChild(titulo);
        contenedor.appendChild(divPeli);

        //Evento para coger la id
        divPeli.addEventListener("click", (e)=>{
            if(e.target){
                peticionDetalle(peli.imdbID);
            }
        })
    }
}

function peticionDetalle(id){
    contenedor.classList.add("opaco");
    document.body.classList.add("estatico");
    let url = "http://www.omdbapi.com/?i=" + id + "&apikey=c0f0795e&plot=full"
    fetch(url).then(response => response.json())
    .then(data =>{
        maquetacionClick(data);
    })
}

function maquetacionClick(data){
    if(divFlotanteDetalle){
        divFlotanteDetalle.remove();//para  que solo haya 1 flotante
    }

    detenerScroll = true;

    divFlotanteDetalle = document.createElement("div");
    divFlotanteDetalle.classList.add("flotante");

    let divMaquetado = document.createElement("div");
    divMaquetado.classList.add("detalle-pelicula");
    
    let tituloDetalle = document.createElement("h2");
    tituloDetalle.innerHTML = data.Title;
    
    let posterDetalle = document.createElement("img");
    posterDetalle.src = data.Poster === "N/A" ? "placeholder.png" : data.Poster;
    posterDetalle.alt = "Poster de " + data.Title;
    
    let directorDetalle = document.createElement("p");
    directorDetalle.innerHTML = "<strong>Director:</strong> " + data.Director;
    
    let actoresDetalle = document.createElement("p");
    actoresDetalle.innerHTML = "<strong>Actores:</strong> " + data.Actors;
    
    let sinopsisDetalle = document.createElement("p");
    sinopsisDetalle.innerHTML = "<strong>Sinopsis:</strong> " + data.Plot;
    
    let anioDetalle = document.createElement("p");
    anioDetalle.innerHTML = "<strong>Año:</strong> " + data.Year;
    
    let botonQuitar = document.createElement("button");
    botonQuitar.innerHTML = "Volver";

    divMaquetado.appendChild(tituloDetalle);
    divMaquetado.appendChild(posterDetalle);
    divMaquetado.appendChild(directorDetalle);
    divMaquetado.appendChild(actoresDetalle);
    divMaquetado.appendChild(sinopsisDetalle);
    divMaquetado.appendChild(anioDetalle);
    divMaquetado.appendChild(botonQuitar);

    divFlotanteDetalle.appendChild(divMaquetado);
    document.body.appendChild(divFlotanteDetalle);

    //evento para salir del detalle
    botonQuitar.addEventListener("click", ()=>{
        divFlotanteDetalle.remove(); //quita el detalle
        contenedor.classList.remove("opaco");
        document.body.classList.remove("estatico");
        detenerScroll = false;
    })
}

function cambiarPage(){
    let boton = document.getElementById("empezar");
    let landin = document.getElementById("landing-page");
    let gen = document.getElementById("general");
    let btn2 = document.getElementById("btnBuscar");
    boton.addEventListener("click", (e)=>{
        if(e.target){
            landin.style.visibility = "hidden";
            gen.style.visibility = "visible";
            btn2.style.visibility = "visible";
        }
    })
}

function construirUrl(){
    let url = "http://www.omdbapi.com/?s="+nombre+"&apikey=c0f0795e&page="+cont;

    if (anio) {
        url += "&y=" + anio;
    }
    return url;
}

function lanzaPeticion(){
    const url = construirUrl();

    fetch(url).then(response => response.json())
    .then(data => {
        if (cont === 1) {
            contenedor.innerHTML = '';
        }
        maquetar(data);
        cargando = false;
    })
}

function getName(){
    return input ? input.value : "";
}

function getNameAno(){
    return inputAnio ? inputAnio.value : "";
}


function buscar() {
    let nuevoNombre = getName();
    let nuevoAnio = getNameAno();

    if (nuevoNombre) {
        nombre = nuevoNombre;
        anio = nuevoAnio;
        cont = 1; 
        contenedor.innerHTML = '';
        lanzaPeticion();
    }
}

function keydown(e) {
    if(e.key === "Enter") {
        buscar();
    }
}

function funcionar(){
    document.getElementById("addName").addEventListener("click", buscar); 
    if(input) input.addEventListener("keydown", keydown);
    if(inputAnio) inputAnio.addEventListener("keydown", keydown);
}



window.onload = ()=>{
    contenedor = document.getElementById("general");
    input = document.getElementById("input");
    inputAnio = document.getElementById("inputAnio"); 
    cambiarPage();
    funcionar();
}

if(!detenerScroll){
    window.onscroll = () =>{
    console.log(window.scrollY);
    let cercaAbajo = (window.innerHeight + window.scrollY >= document.body.offsetHeight -350);

    if(cercaAbajo && !cargando){
        cargando = true;
        cont++; 
        lanzaPeticion();
    }
}
}