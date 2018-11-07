$(document).ready(function () {

    // Template Literals and Default Parameters Value

    let favMovie = (name = 'Austin', movie = 'The Room') => console.log(`My name is ${name}, and my favorite movie is ${movie}`);;
    favMovie();
    favMovie('Daniel', 'Kill Bill');



    // Arrow Functions

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


    // Spread Syntax
});