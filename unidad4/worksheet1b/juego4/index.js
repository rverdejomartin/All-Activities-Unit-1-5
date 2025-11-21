window.onload = ()=>{
    jugar();
}

function jugar(){
    let circulo = document.getElementById("circulo");
    let texto = document.getElementById("texto");
    let tiempo = Math.floor((Math.random()*(5-2)+2))*1000;

    let result = false;
    let clickado = false;
    
    setTimeout(()=>{
        circulo.style.backgroundColor = "green";
        clickado = true;
    },(tiempo))

    circulo.addEventListener("click",(e)=>{
        if(clickado){
            texto.innerHTML = "¡Reflejos rápidos!";
        }
        else{
            texto.innerHTML = "Demasiado pronto";
            circulo.style.backgroundColor = "red";
        }
    })
}