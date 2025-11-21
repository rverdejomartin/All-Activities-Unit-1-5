//tres en raya

//array del tablero vacio
let tablero = [
    [" "," "," "],
    [" "," "," "],
    [" "," "," "]
];

let jugador1 = "\u274C"; //cruz en unicode
let jugador2 = "\u2B55"; //circulo en unicode
let ganado = false;
let total = "";
let divId = document.getElementById("tablero"); 
let turno = jugador1;
let movimientos = 0;

//funcion para verificar victoria
function verificar(jugador){
    let haGanado = false; 

    //filas horizontal
    for(let i = 0; i<3; i++){
        if((tablero[i][0] === jugador) && (tablero[i][1] === jugador) && (tablero[i][2] === jugador)){
            haGanado = true;
        }
    }

    //columnas vertical
    for(let j = 0; j<3; j++){
        if((tablero[0][j] === jugador) && (tablero[1][j] === jugador) && (tablero[2][j] === jugador)){
            haGanado = true;
        }
    }

    //diagonales que son 2
    if (tablero[0][0] === jugador && tablero[1][1] === jugador && tablero[2][2] === jugador) {
        haGanado = true;
    }
    // Diagonal secundaria
    if (tablero[0][2] === jugador && tablero[1][1] === jugador && tablero[2][0] === jugador) {
        haGanado = true;
    }

    // Si ha encontrado una victoria, devuelve true inmediatamente.
    return haGanado; 
}

//funcion para poder jugar e ir pintando al final
function jugar(){
    while(!ganado && movimientos < 9){ 
        let fila, columna;
        let jugadaValida = false; // Control temporal para la entrada

        while (!jugadaValida) {
            
            // La variable 'fila' obtiene el valor numérico, o NaN si se cancela/no es número.
            fila = parseInt(prompt("Jugador"  + " (" + (turno === jugador1 ? 'X' : 'O') + "), dime la FILA (0, 1, o 2):"));
            columna = parseInt(prompt("Jugador"  + " (" + (turno === jugador1 ? 'X' : 'O') + "), dime la COLUMNA (0, 1, o 2):"));
            
            // Verificación básica para evitar NaN y el colapso del juego
            if (!isNaN(fila) && !isNaN(columna) && fila >= 0 && fila <= 2 && columna >= 0 && columna <= 2 && tablero[fila][columna] === " ") {
                jugadaValida = true;
            } else {
                // Si el usuario da una entrada inválida, debe repetir el turno.
                // Reintroducimos el alert básico aquí para que el juego no se rompa.
                alert("Entrada inválida. Asegúrate de usar números entre 0 y 2 en una casilla vacía.");
            }
        }

        //damos el valor
        tablero[fila][columna] = turno;
        movimientos++; // Incrementamos el contador

        //Usamos el verificador para que en cada iteración mire si ha ganado
        if(verificar(turno)){
            ganado = true; // Establecemos la variable de control del bucle a true
            alert("¡El jugador " + turno + " (" + (turno === jugador1 ? 'X' : 'O') + ") ha ganado!");
        } 
        //Si no ha ganado y quedan movimientos, cambiar el turno
        else if(movimientos < 9){
            turno = (turno === jugador1) ? jugador2 : jugador1;
        }
    }

    //Verificar empate si el bucle terminó y nadie ganó
    if (!ganado && movimientos === 9) {
        alert("¡Empate! Nadie ha ganado.");
    }
    
    
    total = "<table border='1'>";
    for(let i = 0; i < tablero.length; i++){
        total += "<tr>" //se abre la fila
        for(let j = 0; j < tablero[i].length; j++){
            total += "<td>" + tablero[i][j] + "</td>";
        }
        total += "</tr>"; // se cierra la fila
    }
    total += "</table>"; // Se cierra la tabla

    if(divId){
        divId.innerHTML = total;
    }
}
jugar();