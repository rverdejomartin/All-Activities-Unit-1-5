//ejercicio 1
console.log(Number("123"));
console.log(Number("3.14"));
console.log(Number("abc"));
//admite también los decimales pero no acepta los caracteres y los trata como NaN

console.log(parseInt("123"));
console.log(parseInt("3.14"));
console.log(parseInt("abc"));
//no admite los decimales y trata como NaN a los caracteres

console.log(parseFloat("123"));
console.log(parseFloat("3.14"));
console.log(parseFloat("abc"));
//sigue sin admitir los caracteres y los trata como NaN pero sí admite los decimales

//comprobar si es entero
function esEntero(valor)
{
    return Number.isInteger(valor);
}
console.log(esEntero(5));
console.log(esEntero(5.5));
console.log(esEntero("5"));
//entero es el 5, pero el decimal es float y la cadena no es un valor numérico.

//not a number
function esNaN(valor)
{
    return Number.isNaN(valor);
}
console.log(esNaN(NaN));
console.log(esNaN("hello"));
console.log(esNaN(undefined));
console.log(esNaN(0/0));
console.log(esNaN(parseInt("abc")));
//NaN da true, pero las opciones que no son números dan false, excepto el 0/0 y el parseInt("abc") que dan NaN

//valores infinitos
function esInfinito(valor)
{
    return Number.isFinite(valor);
}  
console.log(esInfinito(1/0)); //da falso, no es infinito.


//ejercicio 2
let numero1 = 3.141592;

//decimales fijos
console.log(numero1.toFixed(2)); //3.14
console.log(numero1.toFixed(4)); //3.1416
console.log(numero1.toFixed(6)); //3.141592

//representación exponencial
let numero2 = 123456;
console.log(numero2.toExponential(2)); //1.23e+5

//conversión a string con base
let numero3 = 255;
console.log(numero3.toString(2)); //11111111 (binario)
console.log(numero3.toString(8)); //377 (octal)
console.log(numero3.toString(16)); //ff (hexadecimal)   

//precisión controlada
let numero4 = 123.456789;
console.log(numero4.toPrecision(4)); //123.5
console.log(numero4.toPrecision(7)); //123.4568

//ejercicio 3
//validador de números
function validadorNumero(cadena) {
  // Intentamos convertir la cadena a número
  let num = Number(cadena);

  // Verificamos si realmente es un número válido
  if (Number.isNaN(num)) {
    return `"${cadena}" NO es un número válido.`;
  }

  // Si es un número válido, comprobamos si es entero o decimal
  if (Number.isInteger(num)) {
    return `"${cadena}" es un número válido (entero).`;
  } else {
    return `"${cadena}" es un número válido (decimal).`;
  }
}

// Pruebas
console.log(validadorNumero("123"));     // válido entero
console.log(validadorNumero("3.14"));    // válido decimal
console.log(validadorNumero("-50"));     // válido entero negativo
console.log(validadorNumero("0.0001"));  // válido decimal
console.log(validadorNumero("abc"));     // no válido
console.log(validadorNumero("10e2"));    // válido decimal (notación científica)

