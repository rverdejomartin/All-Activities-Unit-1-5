//ejercicio 1
/*let numero = 10;
if (numero > 5) {
numero == 20;
}
console.log(numero);*/
let numero = 10;
if (numero > 5) 
{
numero = 20;
}
console.log(numero);

/*//ejercicio 2
/*let ciudad = "Madrid";
console.log(Ciudad);*/
let ciudad = "Madrid";
console.log(ciudad);

//ejercicio 3
/*function sumar(a, b) {
let resultado = a + b;
}
console.log(sumar(2, 3));*/
function sumar(a, b) {
let resultado = a + b;
return resultado;
}
console.log(sumar(2, 3));

//ejercicio 4
/*let i = 1;
while (i > 5) {
console.log(i);
i++;
}*/
let i = 1;
while (i <= 5) {
console.log(i);
i++;
}

//ejercicio 5
/*let saludo = "Hola";
let nombre = "Luis";
console.log(saludo + , nombre);*/
let saludo = "Hola";
let nombre = "Luis";
console.log(saludo + ", " + nombre);

//ejercicio 6
/*let dias = ["Lunes", "Martes", "Miércoles"];
console.log(dias[3]);*/
let dias = ["Lunes", "Martes", "Miércoles"];
console.log(dias[1]);

//ejercicio 7
/*let usuario = { nombre: "Ana", edad: 25 };
console.log(usuario.nombre.toLowerCasee());*/
let usuario = { nombre: "Ana", edad: 25 };
console.log(usuario.nombre.toLowerCase());

//ejercicio 8
/*let edad = 18;
if (edad = 18) {
console.log("Tienes 18 años");
}*/
let edad = 18;
if (edad == 18) {
console.log("Tienes 18 años");
}

//ejercicio 9
/*let numeros = [1, 2, 3, 4, 5];
for (let i = 0; i < numeros.length; i++); {
console.log(numeros[i]);
}*/
let numeros = [1, 2, 3, 4, 5];
for (let i = 0; i < numeros.length-1; i++) 
{
console.log(numeros[i]);
}

//ejercicio 10
/*let palabra = "javascript";
for (let i = 0; i <= palabra.length; i++) {
console.log(palabra[i]);
}*/
let palabra = "javascript";
for (let i = 0; i <= palabra.length-1; i++) {
console.log(palabra[i]);
}