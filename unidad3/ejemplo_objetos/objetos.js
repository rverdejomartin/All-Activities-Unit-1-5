class Animal{
    //propiedades
    name;
    apellido1;
    apellido2;


    constructor(name, apellido1, apellido2){
        this.name = name;
        this.apellido1 = apellido1;
        this.apellido2 = apellido2;
    }

    //métodos
    hablar(){
        return "Me encantan los lunes! Fake!"
    }

    get nombreCompleto(){
        return this.name + " " + this.apellido1 + " " + this.apellido2;
    }
}
let pato = new Animal("Antonio", "Piñero", "Berbel");
console.log(pato.hablar());
console.log(pato.nombreCompleto);