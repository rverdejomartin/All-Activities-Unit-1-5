/**
 * @name getRockPaperScissorRandomSequence
 * @description Devuelve una secuencia aleatoria de jugadas de piedra, papel o tijera, con cierta longitud
 *
 * @param {number} length - Longitud de la secuencia
 * @returns {String[]}
 *
 * @example
 *  getRockPaperScissorRandomSequence(4) // returns ["rock", "paper", "rock", "scissor"]
 */

function getRockPaperScissorRandomSequence(length){
    let salida = [];
    for(let i =1; i<=length; i++){
        let tirada = ["rock", "paper", "scissor"];
        let sol = Math.floor(Math.random()*tirada.length);
        salida.push(tirada[sol])
    }
    
return salida;
}
console.log(getRockPaperScissorRandomSequence(4));