window.onload = ()=>{
    posicion();
}
function posicion(){
    document.addEventListener("mousemove", (e) => console.log(e.clientX, e.clientY));
}