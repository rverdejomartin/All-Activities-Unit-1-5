class Car{
    model;
    milesPerGallon;
    tank = 0;
    odometer = 0;

    //constructor
    constructor(model, milesPerGallon){
        this.model = model;
        this.milesPerGallon = milesPerGallon;
    }

    //métodos
    fill(gallons){
        this.tank += gallons;
    }

    drive(distance){
        let gallonNecesario = (distance*this.milesPerGallon)/100;
        let distanciaPosible = (this.tank*100)/this.milesPerGallon;

        if (this.tank >= gallonNecesario){
            this.odometer += distance;
            this.tank -= gallonNecesario;
        }
        else{
            //sin gasolina a mitad
            this.odometer += distanciaPosible;
            let distanciaRestante = distance - distanciaPosible;
            this.tank = 0;
            console.log("¡Me quedé sin combustible a "+distanciaRestante+" millas!");
        }
    }
}
let lambo = new Car("Aventador", 50);
lambo.fill(50);
lambo.drive(70);
console.log(lambo.odometer);
console.log(lambo.tank);
lambo.drive(400);