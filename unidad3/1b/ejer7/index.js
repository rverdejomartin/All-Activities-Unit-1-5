/*7. Write an arrow function that takes an array of integers, 
and returns the sum of the elements in the array. Google and use the built-in
reduce array method for this.*/

let array = [1,2,3,4,5];

let suma = (array) => {
    console.log(array.reduce((contador, numero)=>contador+numero,0));
}
suma(array);
