// ejercicio 1
let numero;
numero = Number(prompt("Dime un numero"));

if(numero >= 0) {
    console.log("Positivo");
}
else {
    console.log("Negativo");
}

// ejercicio 2
let edad;
edad = Number(prompt("Dime tu edad"));

if(edad >= 18)
{
    console.log("Mayor de edad");
}
else {
    console.log("Menor de edad");
}

//ejercicio 3
let numIP;
numIP = Number(prompt("Dime un numero aleatorio"));
if(numIP % 2 == 0) {
    console.log("Par")
}
else{
    console.log("Impar")
}

//ejercicio 4
let nota;
nota = Number(prompt("Dime tu nota para decirte aprobado o no"));

if(nota >= 5){
    console.log("Aprobado");
}
else{
    console.log("Reprobado");
}

//ejercicio 5
let num;
let num2;
num = Number(prompt("Dime un numero"));
num2 = Number(prompt("Dime otro numero"));

if(num > num2){
    console.log(num," es mayor que ",num2);
}
else
    if(num < num2){
        console.log(num2," es mayor que ",num);
}
else{
    console.log("Son iguales");
}

//ejercicio 6
let dia;
dia = Number(prompt("Dime numero de 1-7 correspondiente a uno de la semana"));
switch(dia){
    case 1:
        console.log("Lunes");
        break;

    case 2:
        console.log("Martes");
        break; 
    
    case 3:
        console.log("Miercoles");
        break; 
    
    case 4:
        console.log("Jueves");
        break; 
    
    case 5:
        console.log("Viernes");
        break; 
    
    case 6:
        console.log("Sábado");
        break; 
    
    case 7:
        console.log("Domingo");
        break;

    default:
        console.log("Valor no comprendido");
}

//ejercicio 7
let opcion;
opcion = prompt("Di un numero del 1 al 3");
switch(opcion){
    case '1':
        console.log("Opción A seleccionada");
        break;
    case '2':
        console.log("Opcion B seleccionada");
        break;
    case '3':
        console.log("Opción C seleccionada");
        break;
    default:
        console.log("Opción no válida");
}

//ejercicio 8
let color;
color = prompt("Dime uno de estos colores (rojo, amarillo o verde");
switch(color){
    case 'rojo':
    case 'Rojo':
    case 'ROJO':
        console.log("Alto");
        break;
    case 'amarillo':
    case 'Amarillo':
    case 'AMARILLO':
        console.log("Precaución");
        break;
    case 'verde':
    case 'Verde':
    case 'VERDE':
        console.log("Avanza");
        break;
    default:
        console.log("No comprendido");
}

//ejercicio 9
let fruta;
fruta = prompt("Dime que fruta te gusta más de estas (manzana, plátano, uva)");
switch(fruta){
    case 'manzana':
    case 'Manzana':
    case 'MANZANA':
        console.log("Es una manzana roja");
        break;
    case 'plátano':
    case 'Plátano':
    case 'PLÁTANO':
    case 'platano':
    case 'Platano':
    case 'PLATANO':
        console.log("Es un plátano amarillo");
        break;
    case 'uva':
    case 'Uva':
    case 'UVA':
        console.log("Es una uva morada");
        break;
    default:
        console.log("Fruta no reconocida");
}

//ejercicio 10
let final;
final = prompt("Dime tu nota del ultimo examen (A, B, C, D, F)");
switch(final){
    case 'a':
    case 'A':
        console.log("Excelente");
        break;
    case 'b':
    case 'B':
        console.log("Muy bien");
        break;
    case 'c':
    case 'C':
        console.log("Bien");
        break;
    case 'd':
    case 'D':
        console.log("Suficiente");
        break;
    case 'f':
    case 'F':
        console.log("Reprobado");
        break;
    default:
        console.log("No comprendida esa nota");
}