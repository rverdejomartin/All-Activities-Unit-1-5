/*
Voy a implementar una clase TresEnRaya.
Quiero:
1- Que genere el 3x3 con valores undefined.
2- Que el constructor llame a otro método para que se reinicie la partida.
2- métodos #mover(), moverJ1(), moverJ2(), reiniciarPartida(), validacion().
4- moverj1 y moverj2 llamarán al método mover, el cual mueve dependiendo de las comprobaciones
5- validar nos valida para ver si se ha ganado.
@author: Raúl Verdejo Martín
*/

/*
Clase TresEnRaya corregida para solucionar los problemas de console.log y validación.
Se mantiene el método mostrarTablero() original.
@author: Raúl Verdejo Martín
*/
class TresEnRaya{
    //atributos iniciales
    tablero;
    jugador1;
    jugador2;
    turno; //turno 1 para jugador1, turno 2 para jugador2. inicializamos en jugador 1
    movimientos;//controlar el empate.
    terminado;

    constructor(nombre1, nombre2){
        this.jugador1 = nombre1;
        this.jugador2 = nombre2;
        this.#reiniciarPartida();
    }

    //métodos
    #reiniciarPartida(){
        this.tablero = Array(3).fill().map(() => Array(3).fill(undefined));
        //jugador 1 es el 1, 2 es el 2
        this.turno = 1;
        this.movimientos = 0;
        this.terminado = false;
    }

    /**
     * Valida si el jugador ('X' u 'O') ha ganado. (CORRECCIÓN: Uso de && en lugar de ||)
     * @param {string} simbolo - El símbolo del jugador ('X' o 'O').
     * @returns {boolean} - true si ha ganado, false en caso contrario.
     */
    #validacion(simbolo){
        let conseguido = false;
        // Comprobación horizontal y vertical
        for(let i = 0; i < 3; i++){
            // Horizontal: Fila completa del mismo símbolo
            if(this.tablero[i][0] === simbolo && this.tablero[i][1] === simbolo && this.tablero[i][2] === simbolo){
                conseguido = true;
            }
            // Vertical: Columna completa del mismo símbolo
            if(this.tablero[0][i] === simbolo && this.tablero[1][i] === simbolo && this.tablero[2][i] === simbolo){
                conseguido = true;
            }
        }
        
        // Comprobación diagonal principal (0,0 -> 2,2)
        if(this.tablero[0][0] === simbolo && this.tablero[1][1] === simbolo && this.tablero[2][2] === simbolo){
            conseguido = true;
        }
        
        // Comprobación diagonal secundaria (0,2 -> 2,0)
        if(this.tablero[0][2] === simbolo && this.tablero[1][1] === simbolo && this.tablero[2][0] === simbolo){
            conseguido = true;
        }

        return conseguido;
    }


    #turno(){
        this.turno = (this.turno === 1) ? 2 : 1;
    }

    /**
     * Realiza el movimiento y devuelve el resultado como una cadena. (CORRECCIÓN: Retorna string en lugar de console.log)
     * @param {number} fila 
     * @param {number} columna 
     * @param {number} jugador 
     * @returns {string} - El mensaje de resultado.
     */
    #mover(fila, columna, jugador) {
        let simbolo = jugador === 1 ? "X" : "O";
        let nombre = jugador === 1 ? this.jugador1 : this.jugador2;
        let texto = "";
        let conseguido2 = false;

        // Comprobación de juego terminado
        if(this.terminado){
            return "Juego terminado";
        }

        // Comprobación de validez
        if (fila < 0 || fila > 2 || columna < 0 || columna > 2) {
            texto = "Fuera de los límites";
        }
        else if (jugador !== this.turno) {
            conseguido2 = true;
            if(conseguido2){
                return "No es tu turno";
            }
        }
        else if (this.tablero[fila][columna] !== undefined) {
            texto = "Casilla ocupada";
        }
        else { // Movimiento válido
            this.tablero[fila][columna] = simbolo;
            this.movimientos++;

            // Comprobamos victoria
            if (this.#validacion(simbolo)) {
                texto = `${nombre} ha ganado!`;
                this.terminado = true;
            }
            // Comprobamos empate
            else if (this.movimientos === 9) {
                texto = "Empate";
                this.terminado = true;
            }
            // Siguiente turno
            else {
                texto = "Movimiento válido";
                this.#turno();
            }
        }

        // Devuelve el string (soluciona el 'undefined' en la consola)
        return texto;
    }

    //método moverj1 y moverj2 (CORRECCIÓN: Llama a console.log sobre el resultado de #mover)
    moverJ1(fila, columna){
        const resultado = this.#mover(fila, columna, 1);
        console.log(resultado);
        return resultado;
    }
    moverJ2(fila, columna){
        const resultado = this.#mover(fila, columna, 2);
        console.log(resultado);
        return resultado;
    }

    //mostrar tablero (SIN MODIFICACIONES)
    mostrarTablero(){
        console.log(this.tablero);
    }
}

const juego1 = new TresEnRaya("Jugador1", "Jugador2");

juego1.moverJ1(0, 0); // Console: Movimiento válido
juego1.moverJ2(1, 1); // Console: Movimiento válido
juego1.moverJ1(0, 1); // Console: Movimiento válido
juego1.moverJ2(2, 2); // Console: Movimiento válido
juego1.moverJ1(0, 1); // Console: Casilla ocupada
juego1.moverJ1(2, 0); // Console: No es tu turno
juego1.moverJ2(2, 0); // Console: movimiento valido
juego1.moverJ1(0, 2); // Console: Jugador 1 ha ganado

juego1.mostrarTablero(); 

/**
 * @class TresEnRaya
 * * Implementa el juego de Tres en Raya (Tic-Tac-Toe) para dos jugadores.
 * El Jugador 1 ('X') siempre comienza.
 * * @author: Raúl Verdejo Martín
 * * --- Inicialización ---
 * * @constructor
 * @param {string} nombre1 - Nombre del Jugador 1 (usa 'X').
 * @param {string} nombre2 - Nombre del Jugador 2 (usa 'O').
 * * @example
 * const juego = new TresEnRaya("Raúl", "Ana");
 * * -----------------------
 * * --- Métodos Públicos ---
 * * @method moverJ1
 * Intenta realizar un movimiento para el Jugador 1 ('X').
 * Imprime el resultado a la consola y lo retorna como string.
 * @param {number} fila - Índice de la fila (0-2).
 * @param {number} columna - Índice de la columna (0-2).
 * @returns {string} Mensaje de estado: "Movimiento válido", "Casilla ocupada", "Jugador1 ha ganado!", etc.
 * * @method moverJ2
 * Intenta realizar un movimiento para el Jugador 2 ('O').
 * Imprime el resultado a la consola y lo retorna como string.
 * @param {number} fila - Índice de la fila (0-2).
 * @param {number} columna - Índice de la columna (0-2).
 * @returns {string} Mensaje de estado.
 * * @method mostrarTablero
 * Imprime el estado actual del tablero a la consola como un array de arrays.
 * @returns {void}
 * * @method reiniciarPartida
 * Reinicia la partida, borrando el tablero y restableciendo el turno al Jugador 1.
 * @returns {void}
 * * @example
 * juego.moverJ1(0, 0); // Console: Movimiento válido
 * juego.moverJ2(1, 1); // Console: Movimiento válido
 * juego.mostrarTablero(); 
 */