/**
 * @name getRockPaperScissor
 * @description Devuelve una jugada aleatoria de piedra, papel o tijera
 * 
 * @returns {String} - Devuelve "rock", "paper" o "scissor"
 *
 * @example
 *  getRockPaperScissor() // returns "paper"
 */

function getRockPaperScissor(){
    let tirada = ["rock", "paper", "scissor"]
    let sol = Math.floor(Math.random()*tirada.length);
    return tirada[sol];
}
console.log(getRockPaperScissor());