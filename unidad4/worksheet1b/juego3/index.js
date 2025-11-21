window.onload = ()=>{
    let teclas = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let arrayTeclas = [];
    for(let i = 0; i<teclas.length; i++){
        arrayTeclas.push(teclas[i]);
    }//en este punto ya tenemos preparado el array con todas las teclas
    
    let texto = document.getElementById("letra");
    let random = Math.floor(Math.random()*arrayTeclas.length);
    texto.textContent = "Presiona la tecla "+arrayTeclas[random];

    jugar(arrayTeclas, random);
}
function jugar(arrayTeclas, random){
    let letra = arrayTeclas[random];
    let comp = letra.toLowerCase();
    document.addEventListener("keydown", (e)=>{
        if(e.key === comp){
            alert("ole");
        }
    })
}