//ejercicio 1
let num1 = Number(prompt("Ingrese el primer número"));
let num2 = Number(prompt("Ingrese el segundo número"));
console.log(num1+num2);
console.log(num1-num2);
console.log(num1*num2);
console.log(num1/num2);

//ejercicio 2
let numero = Number(prompt("Ingrese un número"));
const respuesta = (numero % 2 == 0) ? "par" : "impar";
console.log(respuesta);

//ejercicio 3
let a = Number(prompt("Número 1"));
let b = Number(prompt("Número 2"));
let c = Number(prompt("Número 3"));
if((a>b) && (a>c))
{
    console.log(a+" Es mayor")
}
else
    if((b>a)&&(b>c))
    {
        console.log(b+" Es mayor")
    }
    else
    {
        console.log(c+" Es mayor")
    }

//ejercicio 4
let num = Number(prompt("Ingrese un número"));
for(let i = 1; i<=10;i++)
{
    console.log(num + "x" + i + "=" + (num*i));
}

//ejercicio 5
let N = Number(prompt("Ingrese un número"));
let suma = 0;
for(let i = 1; i<=N ; i++)
{
    suma += i
}
console.log(suma);4

//ejercicio 6
let positivos = 0;
let negativos = 0;

for(let i = 0; i < 5; i++) {
    let num = Number(prompt(`Ingrese el número ${i+1}`));
    if(num>=0)
    {
        positivos++;
    }
    else
    {
        negativos++;
    }
}
console.log("Total positivos: "+positivos+" \nTotal negativos: "+negativos);

//ejercicio 7
let nuM = Number(prompt("Ingrese un número"));
const send = (((nuM%2==0)&&(nuM>2))||(nuM==0 || nuM==1)) ? "no primo" : "primo";
console.log(send);

//ejercicio 8
let numero88 = Number(prompt("Ingrese un número"));
let factorial = 1;
let texto = "1";
for(let i = 2; i<=numero88; i++)
{
    factorial *= i;
    texto += `x${i}`;
}
console.log("!"+numero88+"="+texto+"="+factorial);

//ejercicio 9
let N2 = Number(prompt("Ingrese un número"));
let texto2 = "";
for(let i = 1; i<=N2 ; i++)
{
    const respuesta2 = (i % 2 == 0) ? i : "";
    texto2 += respuesta2+" ";
}
console.log(texto2);

//ejercicio 10
let numeroSecreto = Math.floor(Math.random() * 10) + 1;
let intento;
let cont = 0;
while(intento !== numeroSecreto) {
    intento = Number(prompt("Adivina el número entre 1 y 10"));
    if(intento != numeroSecreto) cont++;
    if(intento>numeroSecreto) console.log("mayor");
    else console.log("menor");
}
console.log("Numero de intentos: "+cont+"\nNumero secreto: "+numeroSecreto); 