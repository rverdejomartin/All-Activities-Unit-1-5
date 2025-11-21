window.onload = () =>{
    
}

function animacionSecuencia(arrayRecorrido){
    let colores = document.getElementsByClassName("seleccion");
    let pos = 0;
    let div;

    arrayRecorrido.array.forEach((movi,i) => {
        setTimeout(()=>{
            if(div) div.syle.opacity = "50%";
            div = colores[movi];
            div.computedStyleMap.opacity = "100%";
        },i*1000)
        
    });
}
