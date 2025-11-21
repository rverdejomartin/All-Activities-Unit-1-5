//1
let frutas = ["sandía", "fresa", "melocoton", "melón", "pera"];
console.log(frutas[0]);
console.log(frutas[4]);

//2
//añadir
frutas.push("tomate");
frutas.unshift("manzana");
console.log(frutas);
//eliminar
let pop = frutas.pop();
let shift = frutas.shift();
console.log(frutas);

//3
//for
console.log("CON FOR");
for(let i = 0; i<=frutas.length-1; i++){
    console.log(frutas[i]);
}

//for of
console.log("CON FOR OF");
for(let i of frutas){
    console.log(i);
}

//for each
console.log("CON FOR EACH");
frutas.forEach((fruta,i) => console.log(fruta));

//4
//indexOf()
console.log(frutas.indexOf("melón"));
//includes()
console.log(frutas.includes("melocoton"));

//5
//concat()
let array = ["caballo", "perro"];
console.log(array.concat(frutas));
console.log([...array, ...frutas]);

//6
let numeros = [3,4,5,6];
let subidas = numeros.map(numero => numero*2);
console.log(subidas);

//7
let pares = numeros.filter(numero => numero%2==0)
console.log(pares);

//8
let sum = numeros.reduce((total,nota) => total += nota,0);
console.log(sum);

//9
//sort
let nombres = ["Paco", "Juan", "Alvaro", "Federico"];
let sort = nombres.sort()
console.log(sort);
//reverse
let reverse = nombres.reverse();
console.log(reverse);

//10
let join = nombres.join(", ");
console.log(join);

//11
let nombres2 = "Paco, Juan, Alvaro, Federico";
let split = nombres2.split(",");
console.log(split);

//12 eliminar los duplicados de un array
//filter
numeros = [3,4,5,6,7,8,9,3,4,3];
let unicos = [];
unicos = numeros.filter(num => {
if (!unicos.includes(num)) {
    unicos.push(num);
    return true; //importante
}
return false;
});
console.log(unicos); 
//indexOf
numeros = [3, 4, 5, 6, 7, 8, 9, 3, 4, 3];
unicos = [];

for (let i = 0; i < numeros.length; i++) {
// Solo agregamos el número si no está aún en el nuevo array
if (unicos.indexOf(numeros[i]) === -1) {
    unicos.push(numeros[i]);
}
}

console.log(unicos);
//Set
let ganadores = ['Márquez', 'Rossi', 'Márquez', 'Lorenzo', 'Rossi', 'Márquez', 'Márquez'];
let ganadoresNoDuplicados = Array.from(new Set(ganadores));
console.log(ganadoresNoDuplicados)

//13
//min
numeros = [3,4,5,6,7,8,9];
let menor = Math.min(... numeros);
console.log(menor);
//max
let mayor = Math.max(... numeros);
console.log(mayor);

//14 aplanar un array de arrays
let arrayDeArrays = [[1,2],[3,4]];
let arrayAplanado = arrayDeArrays.flat();
console.log(arrayAplanado);

//15 contar veces de un elemento
//reduce()
numeros = [3, 4, 5, 6, 7, 8, 9, 3, 4, 3];
let conteo = numeros.reduce((acc, num) => {
acc[num] = (acc[num] || 0) + 1;
return acc;
}, {});
console.log(conteo);

//foreach
let contador = 0;
let valorBuscado = 3; // el número que quieres contar

numeros.forEach((numero) => {
    if (numero === valorBuscado) {
        contador += 1;
    }
});

console.log(contador); // Esto imprimirá 3


//16
let personas = [
  { nombre: "Ana", edad: 23 },
  { nombre: "Luis", edad: 30 }
];
// Resultado esperado: ["Ana", "Luis"]
nombres = personas.map(persona => persona.nombre);
console.log(nombres);

//17
// Extraemos nombres y edades
nombres = personas.map(p => p.nombre);
let edades = personas.map(p => p.edad);

// Combinamos otra vez en objetos
let combinado = nombres.map((nombre, index) => ({
nombre,
edad: edades[index]
}));

console.log(combinado);
// 👉 [ { nombre: "Ana", edad: 23 }, { nombre: "Luis", edad: 30 } ]

//18
let usuarios = [
  { nombre: "Ana", edad: 25 },
  { nombre: "Luis", edad: 30 },
  { nombre: "Marta", edad: 20 }
];
usuarios.sort((a, b) => a.edad - b.edad);
console.log(usuarios);

//19
let edades2 = usuarios.map(u => u.edad);
let edadesUnicas = [...new Set(edades2)];
let edadesOrdenadas = edadesUnicas.sort((a, b) => a - b);
console.log(edadesOrdenadas); 

//20
let a = [1,2,3,4,5];
console.log(a.filter((v)=>v%2==0).map((v) => v*v).reduce((ac,v)=>ac+v,0));