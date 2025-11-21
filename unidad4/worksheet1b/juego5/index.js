window.onload = ()=>{
    jugar();
}
function jugar(){
    let random = Math.floor((Math.random()*9)+1);
    let texto = document.getElementById("sol");
    let texto2 = document.getElementById("texto");
    texto.innerHTML = `Presiona el número ${random}`

    let celdas = document.getElementsByTagName("th");

    for(let i = 0; i<celdas.length; i++){
        let celda = celdas[i];
        celda.addEventListener("click", (e)=>{
            if(parseInt(celda.id) === random){
                celda.style.backgroundColor = "green";
                texto2.innerHTML = "¡Correcto!";
            }else{
                celda.style.backgroundColor = "red";
                texto2.innerHTML = "¡Incorrecto!";
                let correcta = document.getElementById(random);
                correcta.style.backgroundColor = "green";
            }
        })
    }
}