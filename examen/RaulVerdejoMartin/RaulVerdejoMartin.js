window.onload = ()=>{
    let cadena = "Illora";
    let cadena2 = "((a)";
    let numero = 15;
    let minutos = 1;
    //let minutos = 1;
    let arrayFechas = ["01/03/2016","02/05/2019","10/12/2008"];
    const productos =  [
        { id: 1, nombre: "Laptop Gamer", categoria: "Electrónica", precio: 1500, stock: 10 },
        { id: 2, nombre: "Silla de Oficina Ergonómica", categoria: "Hogar", precio: 250, stock: 20 },
        { id: 3, nombre: "Libro 'Clean Code'", categoria: "Libros", precio: 45, stock: 50 }
    ];
    let categoria = "Hogar";


    ejercicio1(cadena.toLowerCase());
    ejercicio2(numero);
    ejercicio3(cadena2);
    ejercicio4(minutos);
    ejercicio5(arrayFechas);
    ejercicio6(productos, categoria);


    //EJERCICIO 7
    //instancias objetos
    let cuentaC1 = new CuentaCorriente("Raul", 1200, 300);
    let cuentaA1 = new CuentaAhorro("Pepe", 1300, 2);

    //probar métodos
    cuentaC1.depositar(200);
    cuentaC1.retirar(1500);
    cuentaC1.retirar(300);

    cuentaA1.depositar(400);
    cuentaA1.intereses();
}

function ejercicio1(cadena){
    let cont = 0;
    for(let i=0; i<cadena.length; i++){
        let letra = cadena.charAt(i);
        if(letra == 'a' || letra == 'e' || letra == 'i' || letra == 'o' || letra == 'u'){
            cont++;
        }
    }
    return console.log(cont);
}

function ejercicio2(numero = 100){
    for(let i = 1; i<=numero; i++){
        if((i % 3 == 0) && (i % 5 == 0)){
            console.log("Div 3 + 5");
        } else if(i % 5 == 0){
            console.log("Div 5")
        } else if(i % 3 == 0){
            console.log("Div 3")
        } else console.log(i);
    }
}

function ejercicio3(cadena2){
    let simbolo1 = "(";
    let simbolo2 = ")";
    let cont1 = 0;
    let cont2 = 0;
    let devolver = true;

    for(let i in cadena2){
        if(cadena2[i] === "(") cont1++;
        else if(cadena2[i] == ")") cont2++;
    }
    if(cont1 == cont2) devolver = true;
    else devolver = false;

    return console.log(devolver);
}

function ejercicio4(minutos){
    let tiempo = minutos*60;
    let seguir = true;
    let salida;
    let restar = ()=>{
        console.log(tiempo);
        if(tiempo>0) tiempo--;
        if(tiempo == 0) {
            console.log("Tiempo terminado")
            seguir = false;
        }
    }
    let action = setInterval(restar,1000)
    if(seguir == true) salida = action;
    let parar = ()=>{
        clearInterval(salida);
        salida = null;
    }
    if(seguir == false) salida = parar;
    return salida; 
    /*
    me hace la cuenta atras, pero soy incapaz de pararla
    */
} 

function ejercicio5(arrayFechas){
    let fecha1 = new Date(arrayFechas[0]);
    let fecha2 = new Date (arrayFechas[1]);
    let fecha3 = new Date (arrayFechas[2]);
    let menor;
    
    if(fecha1<fecha2 && fecha1<fecha3){
        menor = fecha1;
    } else if(fecha2<fecha1 && fecha2<fecha3){
        menor = fecha2;
    } else if(fecha3<fecha2 && fecha3<fecha1) menor = fecha3;

    return console.log(menor);
}

function ejercicio6(productos, categoria){
    let devolver;
    let total = productos.map(p =>{
        devolver = p.precio*p.stock;
    })
    return console.log(devolver);
}//me he liado mucho no lo he llegado a sacar



//ejercicio7 clases
class Cuenta{
    //propiedades
    titular;
    saldo = 0;

    //constructor
    constructor(titular, saldo){
        this.titular = titular;
        this.saldo = saldo;
    }

    //métodos
    depositar(cantidad){
        this.saldo = this.saldo+cantidad;
        console.log("Operación realizada");
        console.log("Saldo actual: "+this.saldo);
    }

    retirar(cantidad){
        let posible = true;
        if(cantidad>this.saldo) posible=false;
        else {
            this.saldo = this.saldo-cantidad;
            posible = true;
        }

        if(posible){
            console.log("Operacion correcta");
            console.log("Saldo actual: "+this.saldo);
        }
        else {
            console.log("Operación fallida")
            console.log("Saldo actual: "+this.saldo);
        }
    }
}

class CuentaCorriente extends Cuenta{
    limiteCredito;

    //constructor
    constructor(titular, saldo, limiteCredito){
        super(titular, saldo);
        this.limiteCredito = limiteCredito;
    }

    //métodos
    
    retirar(cantidad){
        if(cantidad>this.saldo){
            let op = Math.abs(this.saldo - cantidad);
            if(op>this.limiteCredito){
                console.log("Operación fallida");
                console.log("Saldo actual: "+this.saldo);
            } else{
                console.log("Operación realizada");
                this.saldo = -1*op; //pasar el valor a negativo
                console.log("Saldo actual: "+this.saldo)
            }
        }
    }
}

class CuentaAhorro extends Cuenta{
    tasaInteres;

    //constructor
    constructor(titular, saldo, tasaInteres){
        super(titular, saldo);
        this.tasaInteres = tasaInteres;
    }

    //métodos
    intereses(){
        this.saldo = this.saldo*this.tasaInteres;
        console.log("Intereses añadidos");
        console.log("Saldo actual: "+this.saldo);
    }
}