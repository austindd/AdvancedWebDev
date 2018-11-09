$(document).ready(function() {

    

    let person1 = {
        name: 'Sterling',
        sayHello: function() {
            console.log(`Hello, my name is ${this.name}`);
        }
    }
    let person2 = {
        name: 'Lana',
        sayHello: function() {
            console.log(`Hello, my name is ${this.name}`);
        }
    }
    let person3 = {
        name: 'Cyril',
        sayHello: function() {
            console.log(`Hello, my name is ${this.name}`);
        }
    }
    let person4 = {
        name: 'Krieger',
        sayHello: function() {
            console.log(`Hello, my name is ${this.name}`);
        }
    }
    let person5 = {
        name: 'Pam',
        sayHello: function() {
            console.log(`Hello, my name is ${this.name}`);
        }
    }
    person1.sayHello();
    person2.sayHello();
    person3.sayHello();
    person4.sayHello();
    person5.sayHello();

    function Person(name, city, age) {
        this.name = name,
        this.city = city,
        this.age = age,
        this.sayHello = function() {
            console.log(`Hey, my name is ${this.name}, I'm ${this.age} years old, and I'm from ${this.city}.`);
        }
    }
    let homeDog1 = new Person('Joel', 'Birmingham', 32);
    let homeDog2 = new Person('Daniel', 'Birmingham', 30);
    let homeDog3 = new Person('Lauren', 'Asheville', 27);
    let homeDog4 = new Person('Briana', 'Birmingham', 25);
    let homeDog5 = new Person('Stevie', 'Austin', 24);
    homeDog1.sayHello();
    homeDog2.sayHello();
    homeDog3.sayHello();
    homeDog4.sayHello();
    homeDog5.sayHello();


    class Vehicle {
        constructor(type, manufacturer, wheels) {
            this.type = type;
            this.manufacturer = manufacturer;
            this.wheels = wheels;
            this.info = [
                `Type: ${this.type}`,
                `Manufacturer: ${this.manufacturer}`, 
                `# of Wheels: ${this.wheels}`];
        }
        getInfo() {
            console.log(`Vehicle Info: `, this.info);
        }
    }

    let vehicle1 = new Vehicle('sedan', 'subaru', 4);
    vehicle1.getInfo();



    class Truck extends Vehicle {
        constructor(manufacturer, doors, truck_bed = true) {
            super('truck', manufacturer, 4);
            this.doors = doors;
            this.truck_bed = truck_bed;
            this.info = [
                `Type: ${this.type}`,
                `Manufacturer: ${this.manufacturer}`,
                `# of Wheels: ${this.wheels}`,
                `# of Doors: ${this.doors}`,
                `Truck Bed: ${this.truck_bed}`
            ];

        }
    }
    let truck1 = new Truck('toyota', 2, true);
    console.log(truck1);
    truck1.getInfo();



    class Sedan extends Vehicle {
        constructor(manufacturer, doors, size, mpg) {
            super('sedan', manufacturer, 4);
            this.doors = doors;
            if ((size.toLowerCase() == 'medium') || (size.toLowerCase() == 'small')) {
                this.size = size;
            } else {
                this.size = false;
            };
            this.mpg = mpg;
            this.info = [
                `Type: ${this.type}`,
                `Manufacturer: ${this.manufacturer}`,
                `# of Wheels: ${this.wheels}`,
                `# of Doors: ${this.doors}`,
                `Size: ${this.size}`,
                `MPG: ${this.mpg}`
            ];
        }
        getInfo() {
            console.log(`Vehicle Info: `, this.info);
        }

    }

    let sedan1 = new Sedan('subaru', 4, 'medium', 20);
    console.log(sedan1);
    let sedan2 = new Sedan('volkswagen', 2, 'invalid input', 21); // 'size' should return 'false'
    console.log(sedan2);
    sedan1.getInfo();
    sedan2.getInfo();



    class Motorcycle extends Vehicle {
        constructor(manufacturer) {
            super('motorcycle', manufacturer, 2);
            this.handlebars = true;
            this.doors = false;
            this.info = [
                `Type: ${this.type}`,
                `Manufacturer: ${this.manufacturer}`,
                `# of Wheels: ${this.wheels}`,
                `# of Doors: ${this.doors}`,
                `Handlebars: ${this.handlebars}`
            ];
        }
        getInfo() {
            console.log(`Vehicle Info: `, this.info);
        }
    }

    let motorcycle1 = new Motorcycle('yamaha');
    console.log(motorcycle1);
    motorcycle1.getInfo();


    // ========================= Just some more practice below ==========================

    class FreightTruck extends Truck {
        constructor(manufacturer, doors, size, wheels, truck_bed, company_name = 'unassigned') {
            super(manufacturer, doors, truck_bed);
            this.size = size,
            this.wheels = wheels,
            this.company_name = company_name,
            this.info = [
                `Type: ${this.type}`,
                `Manufacturer: ${this.manufacturer}`,
                `# of Wheels: ${this.wheels}`,
                `# of Doors: ${this.doors}`,
                `Truck Bed: ${this.truck_bed}`,
                `Company Name: ${this.company_name}`
            ];
        }
        getInfo() {
            console.log(`Vehicle Info: `, this.info);
        }
    }
    let freightTruck1 = new FreightTruck('mercedes', 2, 'large', 18, true, 'ACME Inc.');
    console.log(freightTruck1);
    freightTruck1.getInfo();






});