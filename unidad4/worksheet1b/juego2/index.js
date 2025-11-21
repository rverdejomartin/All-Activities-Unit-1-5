window.onload = ()=>{
    let boton = document.getElementById("boton");
    cambiarTexto();
    fuera();
    dentro();
}
function cambiarTexto(){
    boton.addEventListener("click", (e)=>{
    if(e.target){
        boton.textContent = "Me hiciste click";
    }
})
}
function fuera(){
    boton.addEventListener("mouseout", (e)=>{
    let color = "red";
    boton.style.backgroundColor = color;
    boton.style.color = "white";
})
}
function dentro(){
    boton.addEventListener("mouseover", (e)=>{
    let color = "green";
    boton.style.backgroundColor = color;
    boton.style.color = "black";
})
}