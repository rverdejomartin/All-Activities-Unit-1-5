/**
 * @name removeDuplicates
 * @description Remueve duplicados de un array 
 *
 * @param {[]} arr - Array con duplicados a remover
 * @returns {[]} - El array resultante sin duplicados
 * 
 * @example
 *  removeDuplicates([4, 5, 10, 4, 10, 2]) // returns [4, 5, 10, 2]
 */

function removeDuplicates(arr){
    let array = [];
    for(let i = 0; i<=arr.length-1; i++){
        if(!array.includes(arr[i])) array.push(arr[i])
    }
    return array;
}
console.log(removeDuplicates([4, 5, 10, 4, 10, 2]));