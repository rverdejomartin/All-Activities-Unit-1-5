//aleatoriedad avanzada
//1. generador de matrículas aleatorias
let letras = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numero = "1234567890";
let signo = "-";
let matricula = "";
let indice = 0;

for(let i = 0; i<=7; i++){
    if(i<3){
        indice = Math.floor(Math.random()*letras.length);
        matricula += letras.charAt(indice);
    }
    else if(i>2 && i<4) matricula += signo;
    else{
        matricula += Math.floor(Math.random()*numero.length);
    }
}
console.log(matricula);

//2.simulador de dados múltiples
function lanzarDados(n, m) {
    let resultados = "";
    let total = 0;

    for (let i = 0; i < n; i++) {
        let tirada = Math.floor(Math.random() * m) + 1;
        total += tirada;

        resultados += tirada;
        if (i < n -1) resultados += ","; // agrega coma entre números
    }
    
    return (n+" dados de "+m+" caras = "+resultados+" = total "+total);
}

let n = parseInt(prompt("Dime el número de dados:"));
let m = parseInt(prompt("Dime el número de caras:"));

console.log(lanzarDados(n, m));

//3.generador de identificadores únicos
let cadena = "";
while(cadena.length < 16){
    cadena += Math.floor(Math.random()*36).toString(36);
}
console.log(cadena);

//4. validador de contraseñas
function validarContrasena(cadena){
    let resultado = "Contraseña correcta";
    let longitud = cadena.length;
    let numeros = "0123456789";
    let caracteres = "!·$%&/()=?¿^*Ç¨_`+ç´-¡'¬~#@{}[]€"
    let bol1 = false; //numero
    let bol2 = false; //mayuscula
    let bol3 = false; //carqacter especial
    if(longitud == 8){
        for(let i = 0; i<=cadena.length-1; i++){
            if(numeros.includes(cadena[i])) bol1 = true;
            if(cadena[i] === cadena[i].toUpperCase() && cadena[i] !== cadena[i].toLowerCase()) bol2 = true;
            if(caracteres.includes(cadena[i])) bol3 = true;
        } 

        if(bol1 == false) resultado = "No tiene un numero";
        else if(bol2 == false) resultado = "No tiene mayuscula";
        else if(bol3 == false) resultado = "No tiene caracteres especiales";
    else resultado = "No son 8 caracteres";
    return resultado;
    }
}
console.log(validarContrasena("Bu€na$78"));
console.log(validarContrasena("buenas78"));
console.log(validarContrasena("buenas785748"));

//5.compresor de texto rle
function compresorRLE(cadena){
    let resultado = "";
    let contador = 1;

    for(let i = 1; i<cadena.length; i++){
        if(cadena[i] === cadena[i-1]) contador++;
        else{
            resultado += cadena[i-1] + contador;
            contador = 1;
        }
    }

    if(cadena.length > 0){
        resultado += cadena[cadena.length-1]+contador
    }
    return resultado;
}
console.log(compresorRLE("aaabbcddd")); // "a3b2c1d3"

function descompresorRLE(cadena) {
let resultado = "";

for (let i = 0; i < cadena.length; i += 2) {
    let letra = cadena[i];                 // la letra
    let repeticiones = parseInt(cadena[i+1]); // el número
    resultado += letra.repeat(repeticiones);
}

return resultado;
}

console.log(descompresorRLE("a3b2c1d3")); // "aaabbcddd"

//7.juego adivina el numero con intentos limitados
let random = Math.floor((Math.random()*100)+1);
for(i=7; i>0; i--){
    let numero=parseInt(prompt("Dime el numero aleatorio: "));
    let intentos = i-1;
    if(numero === random) console.log("Has ganado");
    else if(numero < random){
        console.log("Quedan "+intentos+" intentos ");
        console.log("El numero a adivinar es mayor");
    }
    else if(numero > random){
        console.log("Quedan "+intentos+" intentos ");
        console.log("El numero a adivinar es menor");
    }
    if(i === 1) console.log("Perdiste");
}

//8.generador de tarjetas de credito falsas
resultado = "";
let luhn;
//generamos 15 aleatorios
for(let i = 1; i <= 15 ; i++){
    let random2 = Math.floor((Math.random()*9)+1);
    resultado += random2;
}
//generamos el ultimo con luhn
let suma2 = 0;
let num = 0;
for(let i = resultado.length-1; i>0; i--){
    if(i%2==0){
        num = i;
        let s = num*2;
        if(s > 9){
            s = s.toString(); //pasamos a string para separarlo
            let num1 = s.charAt[0];
            let num2 = s.charAt[1];
            num1 = parseInt(num1);
            num2 = parseInt(num2);
            s = num1+num2;
        } else suma2 += s;
    }
    if(suma2%10!=0){
        while(suma2%10!=0){
            luhn = Math.floor((Math.random()*9)+1);
            suma2 += luhn;
        }
    }else luhn=0;
}
resultado += luhn;
resultado = resultado.toString();

console.log(suma2);
console.log(resultado);

//9.analizador de dataset en texto
let cadenaNumeros = "10 20 30 40 50 60";
let array = cadenaNumeros.split(" ");//transforma a array y los separa.
//trnasformamos en numeros
let arNumeros = [];
let suma = 0;
let promedio = 0;
let mediana = 0;
for(let num of array){
    arNumeros.push(Number(num));
    suma += num;
}
promedio = suma/num.length;
console.log(arNumeros);


//10. ahorcado simple
/*let oculta = "javascript";
let mostrar = "j_va_cript";
let intento = "";
console.log(mostrar);

while(mostrar.includes("_")){
    intento = prompt("Dime una letra para completar");
    let seguir = true;
    if(intento === ){

    }
}*/