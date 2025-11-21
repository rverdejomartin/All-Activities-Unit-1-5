//ejercicio 1
for(let i=1 ; i<=10 ; i++) console.log(i);

//ejercicio 2
let sumaTotal = 0;
for(let i=1 ; i<=5 ;i++)
{
    sumaTotal += i;
}
console.log(sumaTotal);

//ejercicio 3
let numero = Number(prompt("Dime un numero para mostrar su tabla del 1 al 10"));
for(let i = 1; i<=10; i++)
{
    let resultado = numero * i;
    console.log(resultado);
}

//ejercicio 4
let i = 10;
while(i>=1)
{
    console.log(i);
    i--;
}

//ejercicio 5
let suma = 1;
while(suma<=20)
{
    suma += suma;
}
console.log(suma);

//ejercicio 6
let contrasena = "";
do{
    contrasena = prompt("Dime la contraseña:");
}while(contrasena != "1234");

//ejercicio 7
let n=1;
do
{
    console.log(n);
    n++;
}while(n<6);