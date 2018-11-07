$(document).ready(function () {

    // ========== Template Literals and Default Parameters Value ==========

    let favMovie = (name = 'Austin', movie = 'The Room') => console.log(`My name is ${name}, and my favorite movie is ${movie}`);;
    favMovie();
    favMovie('Daniel', 'Kill Bill');



    // ========== Arrow Functions ==========

    let getFirstName = function(name = 'FirstName') {
        let full_name = name.split(' ');
        console.log(full_name[0]);
    };
    let getFirstName2 = (name = 'FirstName') => console.log(name.split(' ')[0]);

    getFirstName();
    getFirstName2();
    getFirstName('Austin Daniel Davis');
    getFirstName2('Austin Daniel Davis');

    let doSomeMath = (a, b = 1) => ({
        multiplify: (a * b),
        exponentiate: Math.pow(a, b),
    });

    let math_result = doSomeMath(5, 9);
    console.log(math_result);



    // ========== Spread Syntax ==========

    let my_array = ['Zeus', 'Olympus', 'fried unicorn'];
    
    let printFavFood = function (name = 'Austin', location = 'Birimingham', favFood = 'cheeseburgers') {
        console.log(`My name is ${name}, I live in ${location}, and like to eat ${favFood}. Yummmmmm!`)
    };

    printFavFood();
    printFavFood(...my_array);

    let my_name = 'Austin';

    let spreadThatButter = function(butter) {
        let dinner_roll = [...butter];
        for (let i = 0; i < dinner_roll.length; i++) {
            console.log(dinner_roll[i]);
        };
    };

    spreadThatButter('I can\'t believe it\'s not butter!');

});