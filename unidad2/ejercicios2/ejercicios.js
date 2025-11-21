//ejercicio 1
//numero absoluto
function numeroAbsoluto(num) {
    return Math.abs(num);
}
console.log(numeroAbsoluto(-5)); // 5

//redondeo simple
let numero = Number(prompt("Introduce un número para redondear:"));
let numero2 = Number(prompt("Introduce un número para redondear:"));
let numero3 = Number(prompt("Introduce un número para redondear:"));

//valor redondeado
numero = Math.round(numero);
console.log("Número redondeado: " + numero);
//redondeo por exceso
numero = Math.ceil(numero2);
console.log("Número redondeado por exceso: " + numero);
//redondeo por defecto
numero = Math.floor(numero3);
console.log("Número redondeado por defecto: " + numero);

//potencias y raices
console.log("5 elevado a 3 es: " + Math.pow(5, 3)); // 125
console.log("Raíz cuadrada de 81 es: " + Math.sqrt(81)); // 9

//valor máximo y mínimo
let numeros = [10, -5, 3, 99, 42];
console.log("Valor máximo: " + Math.max(...numeros)); // he usado el operador propagación
//math.max np funciona con arrays por lo cual hay que usar ese operador para que trate el array como números individuales.
console.log("Valor mínimo: " + Math.min(...numeros)); // -5
//al igual que math.max, math.min no funciona con arrays

//ejercicio 2 aleatoriedad
let random = parseInt(Math.random()); // número aleatorio entre 0 y 1 y parseInt para que no de decimales
console.log("Número aleatorio entre 0 y 1: " + random);

//dado virtual (1-6)
let dado = Math.floor(Math.random() * 6) + 1;
console.log("Tirada de dado: " + dado);

//numero aleatorio en un rango
function numeroAleatorioEnRango(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}  
console.log("Número aleatorio entre 5 y 15: " + numeroAleatorioEnRango(5, 15));

//trigonometría y algoritmos
//seno y coseno
let angulo = 45; // grados
//math.sin y math.cos usan radianes
let gradosARadianes = angulo * (Math.PI / 180);
console.log("Seno de " + angulo + " grados: " + Math.sin(gradosARadianes).toFixed(2));
console.log("Coseno de " + angulo + " grados: " + Math.cos(gradosARadianes).toFixed(2));

//tangente y arco tangente
angulo = 60; // grados
//math.atan
gradosARadianes = angulo * (Math.PI / 180);
console.log("Tangente de " + angulo + " grados: " + Math.tan(gradosARadianes).toFixed(2));
console.log("Arco tangente de 1: " + (Math.atan(1) * (180 / Math.PI)) + " grados"); // convierte radianes a grados

//logaritmos
//logaritmo natural
let numeroLog = 10;
console.log("Logaritmo natural de " + numeroLog + ": " + Math.log(numeroLog).toFixed(2));

//ejercicio 4
let numeroSecreto = Math.floor(Math.random() * 100) + 1;
let booleano = true;

do {
    let intento = parseInt(prompt("Adivina el número (entre 1 y 100):"));

    console.log("Intento ingresado:", intento); //  para ver cada entrada

    if (intento === numeroSecreto) {
        console.log("¡Felicidades! Has adivinado el número.");
        booleano = false;
    } else if (intento < numeroSecreto) {
        console.log("El número es mayor. Inténtalo de nuevo.");
    } else{
        console.log("El número es menor. Inténtalo de nuevo.");
    }
} while (booleano);


//distancia entre dos puntos
//formula = [\sqrt{(x2-x1)^2+(y2-y1)^2}]
let x1 = parseInt(prompt("Dime la x1"));
let x2 = parseInt(prompt("Dime la x2"));
let y1 = parseInt(prompt("Dime la y1"));
let y2 = parseInt(prompt("Dime la y2"));

let formula = Math.sqrt(Math.pow((x2-x1),2)+Math.pow((y2-y1),2));
console.log("Distancia entre los puntos: "+formula);

//simulación de ruleta
let numeroGanador = Math.floor(Math.random() * 36) + 1;
console.log("Numero ganador: "+numeroGanador);

//generador de contraseñas simples
let conjunto = ["a","#","3","p","-","%","g",",","?"]; //array conteniente de caracteres para la contraseña.
let contraseña = "";
let indice = 0;

for(let i = 1 ; i<=8 ; i++)
{
    indice = Math.floor(Math.random()*conjunto.length); //cogera un indice aleatorio de ese array.
    contraseña += conjunto[indice];
}
console.log("Contraseña: "+contraseña);