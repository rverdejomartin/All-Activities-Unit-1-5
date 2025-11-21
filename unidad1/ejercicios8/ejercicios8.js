//ejercicio 1
let edad = Number(prompt("Ingrese su edad"));
let permiso = prompt("¿Tiene permiso de sus padres? (sí/no)");
if((edad>= 18) && (permiso == "si" || permiso == "sí"))
{
    console.log("Usted tiene permiso")
}
else console.log("Usted no tiene permiso")

//ejercicio 2
let matematicas = prompt("¿Aprobó matemáticas? (sí/no)");
let fisica = prompt("¿Aprobó física? (sí/no)");
let quimica = prompt("¿Aprobó química? (sí/no)");
// Usa un condicional con || para determinar si pasa al siguiente nivel
if((matematicas == "si" || matematicas == "sí") || 
   (fisica == "si" || fisica == "sí") || 
   (quimica == "si" || quimica == "sí"))
{
    console.log("Pasas al siguiente nivel");
}
else console.log("No pasas de nivel");

//ejercicio 3
let contraseña = prompt("Ingrese la contraseña");
// Usa ! para comprobar si no es correcta
let contraseñaReal = "Hola";
let mensaje = (contraseña !== contraseñaReal) ? console.log("Contraseña incorrecta") : console.log("Contraseña correcta");

//ejercicio 4
let numero = Number(prompt("Ingrese un número"));
// Usa && para verificar el rango
let mensaje2 = (numero>= 10 && numero<=50) ? console.log("Numero en el rango") : console.log("Numero no en el rango") ;

//ejercicio 5
let edad2 = Number(prompt("Ingrese su edad"));
let tutor = prompt("¿Tiene tutor presente? (sí/no)");
// Usa && y || según corresponda
if(edad2 >= 18 || tutor == "si")
{
    console.log("Tiene permiso");
}
else console.log("No tiene permiso");

//ejercicio 6
let usuario = prompt("Ingrese su usuario").toLowerCase();
// Condicional usando && y ||
if(usuario == "admin")
{
    let contraseña2 = prompt("Ingrese su contraseña");
    if(contraseña2 == "1234") console.log("Usuario aceptado");
}
else if(usuario == "invitado") console.log("Usuario aceptado");
else console.log("Usuario no aceptado");

//ejercicio 7
let numero2 = Number(prompt("Ingrese un número"));
// Usa operadores lógicos para evaluar ambas condiciones
let mensaje3 = (numero2 >= 0 && numero < 100) ? console.log("Numero comprendido") : console.log("Numero no comprendido");

//ejercicio 8
let dia = prompt("Ingrese un día de la semana").toLowerCase();
// Usa || para comparar con lunes, martes, miércoles, jueves, viernes
if(dia == "lunes" ||
    dia == "martes" || 
    dia == "miercoles" || 
    dia == "jueves" || 
    dia == "viernes")
{
    console.log("Día laborable");
}
else console.log("Día no laborable");

//ejercicio 9
let edad3 = Number(prompt("Ingrese su edad"));
let nacionalidad = prompt("Ingrese su nacionalidad").toLowerCase();
// Usa && y >= para verificar la condición
if(edad3 >= 18 && nacionalidad == "españa")
{
    console.log("Puede votar");
}
else console.log("No puede votar");

//ejercicio 10
let usuario3, contraseña3;

while (!(usuario3 === "admin" && contraseña3 === "1234")) {
    usuario3 = prompt("Usuario:");
    contraseña3 = prompt("Contraseña:");
    // Mensaje de error si no es correcto
    if(usuario3 !== "admin" || contraseña3 !== "1234") console.log("Acceso denegado");
}
console.log("¡Acceso permitido!");