/**
 * @name removeWords
 * @description Dado un string y un array de palabras a remover, devuelve el string sin las palabras removidas
 *
 * @param {string} str - Texto a recortar 
 * @param {string[]} words - Palabras a remover
 * @returns {string} - Texto resultante con las palabras removidas
 * 
 * @example
 *   removeWords("This is a really bad test", ["really", "bad"]) // returns "This is a test"
 */

function removeWords(str, words){
    let solution = str;
    let w1 = words[0];
    let w2 = words[1];
    if(solution.includes(w1)) solution = solution.replace(w1, "");
    if(solution.includes(w2)) solution = solution.replace(w2, "");
    return solution.trim();
}
console.log(removeWords("This is a really bad test", ["really", "bad"]));