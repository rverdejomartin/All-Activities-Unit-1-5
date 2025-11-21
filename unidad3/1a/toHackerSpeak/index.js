/**
 * @name toHackerSpeak
 * @description Convierte un string a "Hacker Speak". Para hacerlo, tiene que transformar las "a" en 4, las "e" en 3, las "i"
 * en 1, las "o" en 0 y las "s" en 5
 *
 * @param {string} text 
 * @returns {String} - El texto convertido a "Hacker Speak"
 * 
 * @example
 *  toHackerSpeak("I'm a hacker now") // returns "1'm 4 h4ack3r n0w"
 */

function toHackerSpeak(text){
    let solution = "";
    for(let i = 0; i<=text.length-1; i++){
        switch(text.charAt(i).toUpperCase()){
            case 'A': solution += "4";
                break;
            case 'E': solution += "3";
                break;
            case 'I': solution += "1";
                break;
            case 'O': solution += "0";
                break;
            case 'S': solution += "5";
                break;
            default: solution += text[i];
        }
    }
    return solution;
}
console.log(toHackerSpeak("I'm a hacker now"));