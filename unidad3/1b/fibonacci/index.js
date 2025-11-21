/*const fibonacci = function(n) {
if (n < 3) return 1;
return fibonacci(n - 1) + fibonacci(n - 2);
}*/

let fibonacci = (numero) =>
{
    if(numero<3)return 1;
    return fibonacci(numero-1) + fibonacci(numero-2);
}
console.log(fibonacci(13));