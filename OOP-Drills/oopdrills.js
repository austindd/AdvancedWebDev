$(document).ready(function() {

    

    let person1 = {
        name: 'Sterling',
        sayHello: function() {
            console.log(`Hello, my name is ${this.name}`);
        }
    };
    let person2 = {
        name: 'Lana',
        sayHello: function() {
            console.log(`Hello, my name is ${this.name}`);
        }
    };
    let person3 = {
        name: 'Cyril',
        sayHello: function() {
            console.log(`Hello, my name is ${this.name}`);
        }
    };
    let person4 = {
        name: 'Krieger',
        sayHello: function() {
            console.log(`Hello, my name is ${this.name}`);
        }
    };
    let person5 = {
        name: 'Pam',
        sayHello: function() {
            console.log(`Hello, my name is ${this.name}`);
        }
    };
    person1.sayHello();
    person2.sayHello();
    person3.sayHello();
    person4.sayHello();
    person5.sayHello();


    
});