//ejercicio 1
//longitud de un string
let cadena = "JavaScript";
console.log(cadena.length);

//acceso a caracteres   
cadena = "Hola mundo";
console.log(cadena.charAt(0));
console.log(cadena.charAt(9));

//mayusculas y minusculas
cadena = "Programar es divertido";
console.log(cadena.toUpperCase());
console.log(cadena.toLowerCase());

//concatenación
let cadena2 = "Hola";
let cadena3 = "Mundo";
let f = cadena2.concat(cadena3);
console.log(cadena2+cadena3);
console.log(f);

//ejercicio2
//índices de caracteres
cadena = "Hola mundo";
console.log("Primera posición: "+cadena.indexOf("o"));
console.log("Última  posición: "+cadena.lastIndexOf("o"));

//subcadenas
cadena = "JavaScript es genial";
console.log(cadena.substring(0,10));
console.log(cadena.substring(14));
console.log(cadena.slice(0,10));
console.log(cadena.slice(14));

//reemplazo de texto
cadena = "El perro corre rapido";
cadena = cadena.replace("perro","gato");
console.log(cadena);

//incluye o empiezo
cadena = "Frontend Developer";
console.log(cadena.includes("end"));
console.log(cadena.startsWith("Front"));
console.log(cadena.endsWith("per"));

//ejercicio3
//dividir un string
cadena = ("rojo,verde,azul,amarillo");
cadena2 = cadena.split(","); // si no le agregamos "," lo va a seguir tomando como un texto plano y no como array.
console.log(cadena2);

//repetir texto
cadena = "hola ";
console.log(cadena.repeat(5));

//eleminar espacios
cadena = "  Hola mundo  ";
console.log(cadena.trim());

//padding
cadena = "7";
console.log(cadena.padStart(3,"0"));

//ejercicio4
//contar vocales
function contarVocales(cadena)
{
    let contador = 0;
    for(let i = 0; i<=cadena.length-1; i++)
    {
        let letra = cadena.charAt(i);
        if(letra == "a" || letra == "e" || letra == "i" || letra == "o" || letra == "u")
        {
            contador++;
        }
    }
    return contador;
}
cadena = "Buenas noches a todos mis compañeros";
cadena = cadena.toLowerCase();
console.log(contarVocales(cadena));

//palíndromo
function esPalindromo(cadena)
{
    let reves = "";
    let igual = false;
    for(let i=cadena.length-1; i >= 0;i--){
        reves += cadena.charAt(i);
    }
    if(cadena == reves){
            igual = true;
    }
    return igual;
}

cadena = "radar";
console.log(esPalindromo(cadena));

//invertir string
cadena = "JavaScript";
cadena2 = "";
for(let i = cadena.length-1;i>=0;i--){
    cadena2 += cadena.charAt(i);
}
console.log(cadena2);

//capitalizar frase
cadena = "hola mundo desde javascript"
function capitalizar(cadena){
    let cadena2 = "" + cadena.charAt(0).toUpperCase();
    let inicio = false;
    for(let i = 1; i<=cadena.length-1; i++){
        let letra = cadena.charAt(i);

        if(letra === ' '){
            cadena2 += letra;
            inicio = true;
        }
        else if(inicio){
            cadena2 += letra.toUpperCase();
            inicio = false;
        }
        else{
            cadena2 += letra;
        }
    }
    return cadena2;
}

console.log(capitalizar(cadena));

//ocultar parte de un string
let tarjetazo = "1234567812345678";
let oculto = "*".repeat(tarjetazo.length-4);
let visible = tarjetazo.substring(tarjetazo.length -4)
console.log(oculto+visible);


//contador de palabras
cadena = "El lenguaje JavaScript es muy poderoso".split(" ").length;
console.log(cadena);