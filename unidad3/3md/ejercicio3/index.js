//treasure hunt
//array con los datos
let tesoro = [
    [34,21,32,41,25],
    [14,42,43,14,31],
    [54,45,52,42,23],
    [33,15,51,31,35],
    [21,52,33,13,23]
];

let texto = "";
//script para mostrar el tesoro
for(let i = 0; i<tesoro.length; i++){
    texto += tesoro[i].join(" ")+"\n";
}
document.getElementById("tesoro").innerHTML = texto;

//script para ir siguiendo el tesoro
let numeroUsado = tesoro[0][0];
while(numeroUsado != tesoro[4][1]){
    let numeroUsadoString = numeroUsado.toString();
    let n1 = parseInt(numeroUsadoString.charAt(0));
    let n2 = parseInt(numeroUsadoString.charAt(1));
    let siguiente = tesoro[n1-1][n2-1];
    console.log(numeroUsado+" -> "+siguiente);
    numeroUsado = siguiente;
}