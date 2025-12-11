var nombre = "";         
var cont = 1;             
var anio = "";             
var contenedor;
var input;                
var inputAnio;
var cargando = false;   
var divFlotanteDetalle = null;  
var detenerScroll = false;     
var contenedorFavoritas;
var verFavoritas;
var btnVolverBusqueda;



function obtenerFavoritos(){
    let favoritos = localStorage.getItem("pelisFavoritas");
    if(favoritos){
        favoritos = JSON.parse(favoritos);
    } else favoritos = [];

    return favoritos;
}

function esPeliFavorita(id){
    let favoritos = obtenerFavoritos();
    let esFav = false;

    for(let i=0; i<favoritos.length && !esFav; i++){
        if(favoritos[i].imdbID === id){
            esFav = true;
        }
    }

    return esFav;
}

function manejarFavoritos(pelicula, esFavorita){
    let fav = obtenerFavoritos();
    let indice = -1;
    let posEncontrada = false;

    for(let i = 0; i<fav.length && !posEncontrada;i++){
        if(fav[i].imdbID === pelicula.imdbID){
            indice = i; //guardamos la posicion
            posEncontrada = true;
        }
    }

    if(esFavorita){
        //si se marca el checkbox
        if(indice === -1){
            //no esta en la lista, asique la añadimos
            const datosMostrados = {
                imdbID: pelicula.imdbID,
                Title: pelicula.Title,
                Poster: pelicula.Poster
            };
            fav.push(datosMostrados);
        }
    } else{
        //si la quitamos de favorita
        if(indice !== -1){
            fav.splice(indice, 1);
        }
    }

    localStorage.setItem("pelisFavoritas", JSON.stringify(fav))
}

function mostrarFavoritas(){
    const listaFavoritas = obtenerFavoritos();
    contenedorFavoritas.innerHTML = "<h2>Peliculas favoritas</h2>";
    let existen = true;

    if(listaFavoritas.length === 0){
        let mensaje = document.createElement("p");
        mensaje.innerHTML = "No hay favoritas aún";
        contenedorFavoritas.appendChild(mensaje);
        existen = false;
    }

    if(existen){
        for(const peli of listaFavoritas){
        let divPeli = document.createElement("div");
        let titulo = document.createElement("p");
        let imagen = document.createElement("img");
        let id = peli.imdbID;


        
        let botonFav = document.createElement("input");
        botonFav.type = "checkbox";
        botonFav.className = "favorito";
        
        botonFav.checked = true; 
        
        botonFav.addEventListener("change", (e)=>{
            e.stopPropagation(); //lo he buscado para qeu no me salte el detalle
            manejarFavoritos(peli, e.target.checked); 
            mostrarFavoritas(); 
        });

        botonFav.addEventListener("click", (e) => {
             e.stopPropagation();
        });

        divPeli.id = id;
        titulo.innerHTML = peli.Title;
        imagen.src = peli.Poster;
        imagen.onerror = () => imagen.src = "./imagen_definida.jpg";

        divPeli.appendChild(botonFav);
        divPeli.appendChild(imagen);
        divPeli.appendChild(titulo);
        contenedorFavoritas.appendChild(divPeli);
        
        // Evento para ver el detalle al hacer click
        divPeli.addEventListener("click", (e)=>{
             if(e.target){
                 peticionDetalle(peli.imdbID);
             }
        });
    }
    }
}

function maquetar(data){
    for(const peli of data.Search){
        let divPeli = document.createElement("div");
        let titulo = document.createElement("p");
        let imagen = document.createElement("img");
        let id = peli.imdbID;

        let botonFav = document.createElement("input");
        botonFav.type = "checkbox";
        botonFav.className = "favorito";
        botonFav.checked = esPeliFavorita(id);
        botonFav.addEventListener("change", (e)=>{
            e.stopPropagation();
            manejarFavoritos(peli, e.target.checked);
            if (contenedorFavoritas.style.visibility === 'visible' || contenedorFavoritas.style.display === 'flex') {
                mostrarFavoritas();
            }
        });

        botonFav.addEventListener("click", (e) => {
             e.stopPropagation();
        });

        divPeli.id = id;
        titulo.innerHTML = peli.Title;
        imagen.src = peli.Poster;
        imagen.onerror = () => imagen.src = "./imagen_definida.jpg";
        divPeli.appendChild(botonFav);
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
    contenedorFavoritas.classList.add("opaco");
    document.body.classList.add("estatico");
    let url = "https://www.omdbapi.com/?i=" + id + "&apikey=c0f0795e&plot=full"
    fetch(url).then(response => response.json())
    .then(data =>{
        maquetacionClick(data);
    })
}

function maquetacionClick(data){
    if(divFlotanteDetalle){
        divFlotanteDetalle.remove();//para  que solo haya 1 flotante
    }

    detenerScroll = true;

    divFlotanteDetalle = document.createElement("div");
    divFlotanteDetalle.classList.add("flotante");

    let divMaquetado = document.createElement("div");
    divMaquetado.classList.add("detalle-pelicula");
    
    let tituloDetalle = document.createElement("h2");
    tituloDetalle.innerHTML = data.Title;
    
    let posterDetalle = document.createElement("img");
    posterDetalle.src = data.Poster;
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
        contenedorFavoritas.classList.remove("opaco");
        document.body.classList.remove("estatico");
        detenerScroll = false;
    })
}

function navFav(){
    contenedor.style.display = "none";
    document.getElementById("btnBuscar").style.visibility = "hidden";
    verFavoritas.style.visibility = "hidden";
    contenedorFavoritas.style.display = "flex";
    contenedorFavoritas.style.visibility = "visible";
    btnVolverBusqueda.style.visibility = "visible";

    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    detenerScroll = true; //para detener scroll infinito
    mostrarFavoritas();
}

function navBusqueda(){
    document.documentElement.scrollTop = 0;
    document.body.scrollTop = 0;

    contenedorFavoritas.style.visibility = "hidden";
    contenedorFavoritas.style.display = "none";
    btnVolverBusqueda.style.visibility = "hidden";

    
    contenedor.style.visibility = "visible";
    contenedor.style.display = "flex";
    document.getElementById("btnBuscar").style.visibility = "visible";
    verFavoritas.style.visibility = "visible";

    cargando = false; 

    detenerScroll = false; //se reanuda el scroll         
}

function cambiarPage(){
    let boton = document.getElementById("empezar");
    let landin = document.getElementById("landing-page");
    let gen = document.getElementById("general");
    let btn2 = document.getElementById("btnBuscar");
    let btnFav = document.getElementById("verFavoritas");
    boton.addEventListener("click", (e)=>{
        if(e.target){
            landin.style.visibility = "hidden";
            gen.style.visibility = "visible";
            gen.style.display = "flex";
            btn2.style.visibility = "visible";
            btnFav.style.visibility = "visible";
            contenedorFavoritas.style.visibility = "hidden";
            contenedorFavoritas.style.display = "none";
            btnVolverBusqueda.style.visibility = "hidden";
        }
    })

    btnFav.addEventListener("click", navFav);
    btnVolverBusqueda.addEventListener("click", navBusqueda);
}

function construirUrl(){
    let url = "https://www.omdbapi.com/?s="+nombre+"&apikey=c0f0795e&page="+cont;

    if (anio) {
        url += "&y=" + anio;
    }
    return url;
}

function lanzaPeticion(){
    const url = construirUrl();

    cargando = true;

    fetch(url).then(response => response.json())
    .then(data => {
        if (data.Response === "True" && data.Search) {
            if (cont === 1) {
                contenedor.innerHTML = '';
            }
            maquetar(data);
        }
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
    contenedorFavoritas = document.getElementById("favoritas");
    verFavoritas = document.getElementById("verFavoritas"); 
    
    
    btnVolverBusqueda = document.createElement("button");
    btnVolverBusqueda.id = "btnVolverBusqueda";
    btnVolverBusqueda.innerHTML = "Volver a Búsqueda";
    document.body.appendChild(btnVolverBusqueda);

    contenedorFavoritas.style.display = "none";

    input = document.getElementById("input");
    inputAnio = document.getElementById("inputAnio"); 
    cambiarPage();
    funcionar();
}

window.onscroll = () =>{
    if(!detenerScroll){
        let cercaAbajo = (window.innerHeight + window.scrollY >= document.body.offsetHeight - 350);

        if(cercaAbajo && !cargando){
            cont++;
            lanzaPeticion();
        }
    }
}