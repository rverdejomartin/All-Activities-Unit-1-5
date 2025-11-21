/**
 * @name getFactorial
 * @description Devuelve el factorial de un número
 *
 * @param {number} x - Número del cuál obtener factorial
 * @returns {Number} - Factorial de {x}
 *
 * @example
 *  getFactorial(4) // returns 24
 */

function getFactorial(x){
    if (x < 0) return undefined; // no existe factorial de negativos
    let resultado = 1;
    for (let i = 1; i <= x; i++) {
        resultado *= i;
    }
    return resultado;
}
console.log(getFactorial(4));