class Person{
    name;
    age;
    stomach = [];
    //constructor
    constructor(name, age){
        this.name = name;
        this.age = age;
    }

    //métodos
    poop(){
        this.stomach.length = 0;
    }

    eat(cadena){
        if(this.stomach.length < 10 )
            this.stomach.push(cadena);
        else return console.log("Estómago lleno");
    }

    toString(){
        return this.name+", "+this.age;
    }

    get capacidad(){
        return console.log(this.stomach);
    }
}
let raul = new Person("Raul", 50);
console.log(raul.toString());
raul.eat("sushi");
raul.eat("macarrones");
console.log(raul.capacidad);
raul.poop();
console.log(raul.capacidad);
raul.eat("arroz negro");
console.log(raul.capacidad);
raul.eat("arroz negro");
raul.eat("arroz negro");
raul.eat("arroz negro");
raul.eat("arroz negro");
raul.eat("arroz negro");
raul.eat("arroz negro");
raul.eat("arroz negro");
raul.eat("arroz negro");
raul.eat("arroz negro");
console.log(raul.capacidad);