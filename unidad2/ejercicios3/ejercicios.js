//ejercicio1
//fecha actual
let fechaActual = new Date();
console.log(fechaActual);

//fecha específica
let especifica = new Date("2005-03-20");
console.log(especifica);

//obtener partes de una fecha
console.log(especifica.getFullYear());
console.log(especifica.getMonth());
console.log(especifica.getDate());
console.log(especifica.getDay());
console.log(especifica.getHours()+":"+especifica.getMinutes()+":"+especifica.getSeconds());

//convertir a string
console.log(fechaActual.toDateString());
console.log(fechaActual.toTimeString());

//ejercicio 2
//sumar días
function sumDias(fecha, dias)
{
    let f = new Date(fecha).getTime();
    let t = 1000 * 60 * 60 * 24 * dias;
    let fechaCambiada = new Date(f+t);
    return fechaCambiada;
}
console.log("Antigua fecha: ", Date("2025-09-25"));
console.log("Nueva fecha:", sumDias("2025-09-25", 5));

//diferencia entre dos fechas
let hoy = new Date();
let fin = new Date("2025-12-31");
let diferencia = fin-hoy;
console.log("La diferencia en dias es de: ",Math.ceil(diferencia/(1000*60*60*24))); //para pasar a dias, lo da en milisegundos.

//comparar fechas
let dia1 = new Date();
let dia2 = new Date("2024-06-24");
if(dia2 < dia1){
    console.log(`${dia1}, Es mayor`);
}else console.log(`${dia2}, Es mayor`);

//Primer dia del mes
function primerDiaMes(valor1, valor2){
    let fecha1 = new Date(valor1,(valor2-1),1);
    const semana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    let anio = fecha1.getFullYear();
    let mes = fecha1.getMonth()+1;
    let dia = semana[fecha1.getDay()];

    return console.log("El 1 de "+mes+" de "+anio+" fue "+dia);
}

primerDiaMes(2023,1);

//ejercicio 3
//iso string
let fechaISO = new Date().toISOString();
console.log(fechaISO);

//fecha local y utc
let horalocal = new Date();
let horautc = new Date();
console.log("Local: "+horalocal.getHours());
console.log("UTC: "+horautc.getUTCHours());

//formateo personalizado
function formatDate(date) {
  let dd = String(date.getDate()).padStart(2, '0');
  let mm = String(date.getMonth() + 1).padStart(2, '0'); // Los meses van de 0 a 11
  let yyyy = date.getFullYear();

  let hh = String(date.getHours()).padStart(2, '0'); //rellena con cero si solo hay un digito
  let min = String(date.getMinutes()).padStart(2, '0');
  let ss = String(date.getSeconds()).padStart(2, '0');

  return `${dd}/${mm}/${yyyy} ${hh}:${min}:${ss}`;
}

// Ejemplo:
let ahora = new Date();
console.log(formatDate(ahora)); //"25/09/2025 14:07:05"

//internacionalización
const actual = new Date();

console.log(new Intl.DateTimeFormat('es-ES').format(actual)); // "25/9/2025"
console.log(new Intl.DateTimeFormat('en-US').format(actual)); // "9/25/2025"
console.log(new Intl.DateTimeFormat('ja-JP').format(actual)); // "2025/9/25"

//cuenta atras
let ahoraMismo = new Date();
let añoNuevo = new Date("2026-01-01 00:00:00");

let diferencia2 = añoNuevo-ahoraMismo;

//convertir a dias horas minutos y segundos
let segundosTotales = Math.floor(diferencia2 / 1000);
let dias = Math.floor(segundosTotales / (24 * 3600));
let horas = Math.floor((segundosTotales % (24 * 3600)) / 3600);
let minutos = Math.floor((segundosTotales % 3600) / 60);
let segundos = segundosTotales % 60;

console.log( "Faltan "+dias+" días "+horas+" horas "+minutos+" minutos "+segundos+" segundos para Año Nuevo");

//edad exacta
let ahoraMismo2 = new Date();
let añoNac = new Date(2005,2,20);

let diferencia3 = ahoraMismo-añoNac;

//convertir a años, meses y dias
let segundosTotales2 = Math.floor(diferencia3 / 1000);
let dias2 = ahoraMismo2.getDate() - añoNac.getDate();
let años = ahoraMismo2.getFullYear() - añoNac.getFullYear();
let meses = ahoraMismo2.getMonth() - añoNac.getMonth();

console.log("Años:"+años+" meses:"+meses+" dias:"+dias2);

//calendario simple
function generarFechasMes(año, mes) {
    let fechas = [];
    // Los meses en JavaScript van de 0 (enero) a 11 (diciembre)
    let diasMes = new Date(año, mes, 0).getDate();

    for (let dia = 1; dia <= diasMes; dia++) {
        fechas.push(new Date(año, mes - 1, dia));
    }

    return fechas;
}

// Ejemplo: septiembre 2025
console.log(generarFechasMes(2025, 9));

//proximo viernes 13
//devuelve la fecha del siguiente viernes 13
function encontrarViernes13(){
    let resultado = new Date();
    let encontrado = false;
    while(!encontrado){
        if(resultado.getDay() == 5 && resultado.getDate() == 13){
            encontrado = true;
        }
        else{
            resultado.setDate(resultado.getDate()+1);
        }
    }

    return resultado;
}

console.log(encontrarViernes13());