//treasure hunt
//creado matriz
let tesoro = [
    [],
    [],
    [],
    [],
    []
];
let tesoroRandom = 0;
let variableAyuda = 0;

//random el tesoro
do {
  tesoroRandom = Math.floor(Math.random() * (55 - 11 + 1) + 11);
} while ( !(
(tesoroRandom >= 11 && tesoroRandom <= 15) ||
(tesoroRandom >= 21 && tesoroRandom <= 25) ||
(tesoroRandom >= 31 && tesoroRandom <= 35) ||
(tesoroRandom >= 41 && tesoroRandom <= 45) ||
(tesoroRandom >= 51 && tesoroRandom <= 55)
)
);
console.log(tesoroRandom);

//rellenamos el sitio del tesoro en el array
let cambio = tesoroRandom.toString();
let n1 = parseInt(cambio.charAt(0));
let n2 = parseInt(cambio.charAt(1));
tesoro[n1-1][n2-1] = parseInt(tesoroRandom);

console.log(tesoro);


//rellenar el array
let fila = 0;
let col = 0;

//si no llegamos al tesoro
while (fila !== n1 - 1 || col !== n2 - 1) {
  // Si aún no estamos en la fila del tesoro, bajamos una fila
  if (fila < n1 - 1) {
    tesoro[fila][col] = (fila + 2) * 10 + (col + 1); // apunta hacia abajo
    fila++;
  }
  // Si estamos en la fila correcta pero no en la columna, nos movemos a la derecha
  else if (col < n2 - 1) {
    tesoro[fila][col] = (fila + 1) * 10 + (col + 2); // apunta a la derecha
    col++;
  }
}


//resto del array
for (let i = 0; i < 5; i++) {
  for (let j = 0; j < 5; j++) {
    if (tesoro[i][j] === undefined) {
      let numeroRandom;
      do {
        numeroRandom = Math.floor(Math.random() * (55 - 11 + 1) + 11);
      } while (!(
        (numeroRandom >= 11 && numeroRandom <= 15) ||
        (numeroRandom >= 21 && numeroRandom <= 25) ||
        (numeroRandom >= 31 && numeroRandom <= 35) ||
        (numeroRandom >= 41 && numeroRandom <= 45) ||
        (numeroRandom >= 51 && numeroRandom <= 55)
      ));
      tesoro[i][j] = numeroRandom;
    }
  }
}
console.table(tesoro);

/*let texto = "";
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
}*/