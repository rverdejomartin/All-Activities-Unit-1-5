//ejercicio 1
/*let nombre = "Ana
console.log(nombre);*/
let nombre1 = "Ana";
console.log(nombre1);

//ejercicio 2
/*console.log(edad);
let edad = 20;*/
let edad = 20;
console.log(edad);

//ejercicio 3
/*let a = 5;
let b = 10;
if (a = b) {
console.log("a es igual a b");
}*/
let a = 5;
let b = 10;
if(a == b)
{
    console.log("A es igual a B");
}

//ejercicio 4
/*let i = 0;
while (i < 5) {
console.log(i);
}*/
let i = 0;
while(i<5)
{
    console.log(i);
    i++;
}

//ejercicio 5
/*function saludar() {
console.log("Hola " + nombre);
}
saludar();*/
let nombre2 = "Raul";
function saludar() {
console.log("Hola " + nombre2);
}
saludar();

//ejercicio 6
/*let frutas = ["manzana", "banana", "pera"];
console.log(frutas[3]);*/
let frutas = ["manzana", "banana", "pera"];
console.log(frutas[2]);

//ejercicio 7
/*let persona = { nombre: "Ana", edad: 25 };
console.log(persona.apellido.toUpperCase());*/
let persona = { nombre: "Ana", edad: 25 };
console.log(persona.nombre.toUpperCase());

//ejercicio 8
/*let a = 5;
let b = "10";
console.log(a + b);*/
let a2 = 5;
let b2 = "10";
console.log(a2+Number(b2));

//ejercicio 9
/*let nota = 8;
if (nota > 5);
{
  console.log("Aprobado");
} else {
  console.log("Reprobado");
}*/
let nota = 8;
if (nota >= 5)
{
    console.log("Aprobado");
}
else 
{
    console.log("Reprobado");
}

//ejercicio 10
/*let numeros = [1, 2, 3, 4, 5];
for (let i = 0; i <= numeros.length; i++) {
  console.log(numeros[i]);
}*/
let numeros = [1, 2, 3, 4, 5];
for (let i = 0; i <= numeros.length-1; i++) {
console.log(numeros[i]);
}