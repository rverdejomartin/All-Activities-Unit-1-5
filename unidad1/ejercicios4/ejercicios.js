//ejercicio 4.10
let texto = "Cabecera h";
for(let i = 1 ; i<=6 ; i++)
{
    document.writeln("<h"+i+">"+texto+ "" + i+"</h"+i+">");
}

//ejercicio 4.11
let valor1 = prompt("DIme el numero de columnas");
let valor2 = prompt("DIme el alto");
let valor3 = prompt("DIme el ancho");

document.writeln("<table border= \"0\" cellspacing= \"2\" bgcolor= \"black\" width= \"200\">");
document.writeln("<tr bgcolor = \"white\" height = "+valor2+"px >");
//bucle
for(let i=1 ; i<=valor1 ; i++)
{
    document.writeln("<td width =" +valor3+"px>&nbsp;</td>");
}
document.writeln("</tr>");
document.writeln("</table>");

//salto de linea
document.writeln("<br></br>");

//ejercicio 4.12
let valor4 = prompt("DIme el numero de columnas");
let valor5 = prompt("DIme el alto");
let valor6 = prompt("DIme el ancho");

document.writeln("<table border= \"0\" cellspacing= \"2\" width= \"200\">");
document.writeln("<tr height = "+valor5+"></tr>");

//bucle
for(let i=1 ; i<=valor4 ; i++)
{
    if(i % 2 == 0)
    {
        document.writeln("<td bgcolor = \"white\" height = "+valor5+"px >");
    }
    else document.writeln("<td bgcolor = \"black\" height = "+valor6+"px >");
    document.writeln("<td width =" +valor6+"px>&nbsp;</td>");
}
document.writeln("</tr>");
document.writeln("</table>");

//salto de linea
document.writeln("<br></br>");

//ejercicio 4.13
let valor7 = prompt("DIme el numero de columnas");
let valor8 = prompt("DIme el alto");
let valor9 = prompt("DIme el ancho");
let i = 1;

document.writeln("<table border= \"0\" cellspacing= \"2\" bgcolor= \"black\" width= \"200\">");
document.writeln("<tr bgcolor = \"white\" height = "+valor8+"px >");
//bucle
while(i<=valor7)
{
    document.writeln("<td width =" +valor3+"px>&nbsp;</td>");
    i++;
}

document.writeln("</tr>");
document.writeln("</table>");

//salto de linea
document.writeln("<br></br>");

//ejercicio 4.14
let valor10 = prompt("DIme el numero de columnas");
let valor11 = prompt("DIme el alto");
let valor12 = prompt("DIme el ancho");
let i2 = 1;

document.writeln("<table border= \"0\" cellspacing= \"2\" width= \"200\">");
document.writeln("<tr height = "+valor11+"></tr>");

//bucle
while(i2<=valor10)
{
    if(i2 % 2 == 0)
        document.writeln("<td bgcolor = \"white\" height = "+valor11+"px >");
    
    else
        document.writeln("<td bgcolor = \"black\" height = "+valor11+"px >");
    
    document.writeln("<td width =" +valor12+"px>&nbsp;</td>");
    i2++;
}
document.writeln("</tr>");
document.writeln("</table>");

//salto de linea
document.writeln("<br></br>");

//ejercicio 4.15
let num_adivinar = Number(prompt("Dime el numero a adivinar"));
let num = Number(prompt("Dime cuál es el número"));
let cont = 1;

//bucle
while(num != num_adivinar)
{
    if(num != num_adivinar)
    {
        if(num < num_adivinar)
        {
            alert("El número es mayor");
            num = Number(prompt("Dime cuál es el número"));
            cont++;
        }
        else 
            if(num > num_adivinar)
            {
                alert("El número es menor");
                num = Number(prompt("Dime cuál es el número"));
                cont++;
            }
    }
    else 
    {
    document.writeln("<p>Número acertado, intentos totales: "+cont+"</p>");
    }
}
//salto de linea
document.writeln("<br></br>");

//ejercicio 4.16
let num_adivinar2 = Number(prompt("Dime el numero a adivinar"));
let num2 = Number(prompt("Dime cuál es el número"));
let cont2 = 1;

//buble
do{
    if(num2 != num_adivinar2)
    {
        if(num2 < num_adivinar2)
        {
            alert("El número es mayor");
            num2 = Number(prompt("Dime cuál es el número"));
            cont2++;
        }
        else 
            if(num2 > num_adivinar2)
            {
                alert("El número es menor");
                num2 = Number(prompt("Dime cuál es el número"));
                cont2++;
            }
    }
    else 
    {
    document.writeln("<p>Número acertado, intentos totales: "+cont2+"</p>");
    }
}while(num2 != num_adivinar2);
//salto de linea
document.writeln("<br></br>");

// Ejercicio 4.17
// Imprime las tablas del 1 al 10, multiplicando por 1..10
for (let i = 1; i <= 10; i++) {
  console.log("Tabla del " + i + ":");
  for (let j = 1; j <= 10; j++) {
    console.log(i + " x " + j + " = " + (i * j));
  }
    console.log("-----------------------"); // separador entre tablas
}

// salto de línea
document.writeln("<br></br>");


//ejercicio 4.18
// Pedir valores al usuario
let columnas = Number(prompt("Introduce el número de columnas:"));
let filas = Number(prompt("Introduce el número de filas:"));
let alto = Number(prompt("Introduce la altura (px) de cada celda:"));
let ancho = Number(prompt("Introduce el ancho (px) de cada celda:"));

// Comenzamos a escribir la tabla
document.write("<table border='1' cellspacing='2' bgcolor='black'>");

// Bucle externo: filas
for (let i = 0; i < filas; i++) {
    document.write("<tr bgcolor='white' height='" + alto + "'>");
      // Bucle interno: columnas
    for (let j = 0; j < columnas; j++) {
        document.write("<td width='" + ancho + "'>&nbsp;</td>");
}

    document.write("</tr>");
}

document.write("</table>");
//salto de linea
document.writeln("<br></br>");

//ejercicio 4.19
const numcolumnas=8;
const numfilas=8;
let hw = Number(prompt("Dime el ancho y alto (son iguales)"));
let anchuratotal=hw*numcolumnas;
let color1, color2;
document.writeln("<table border=\"0\" cellspacing=\"2\" bgcolor= \"black\" width= \""+anchuratotal+"\">");

for(let i=0;i<numfilas;i++)
{
document.writeln("<tr bgcolor= \"white\" height=\""+hw+"\">")    
if(i%2==0){ //Compruebo si la fila es par(Comenzando en 0 q lo cuenta como par) empieza pintando en negro
    color1="white";
    color2="black";
}
else
{//En caso de que la fila sea impar empieza en blanco
    color1="black";
    color2="white";
}
    for(let j=0;j<numcolumnas;j++)
    {
        document.writeln("<td width= \""+hw+"\"bgcolor= \""+color2+"\">&nbsp</td>");    
        j++
        document.writeln("<td width= \""+hw+"\"bgcolor= \""+color1+"\">&nbsp</td>");
    }
    document.writeln("</tr>");
}
document.writeln("</table>");