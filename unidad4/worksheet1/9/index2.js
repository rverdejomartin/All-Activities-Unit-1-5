window.onload= ()=>{
    let img = document.getElementById("imagen");
    let clickado = false;
    img.style.position = "absolute";
    let difX, difY;
    
    img.addEventListener("click", (e)=>{
        if(!clickado)
        {
            clickado = true;
            difX = e.clientX - img.offsetLeft;
            difY = e.clientY - img.offsetTop;
        }
        else clickado = false;
    })

    document.addEventListener("mousemove", (e)=>{
        if(clickado){
            console.log("Clickado la imagen, su nueva posicion es: "+e.clientX+" "+e.clientY)

            img.style.top = (e.clientY-difY) + "px";
            img.style.left = (e.clientX-difX) + "px";
        }
    })
}