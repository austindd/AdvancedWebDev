$(document).ready(function () {



let firstFunction = (msg, num) => {
    console.log(msg);
    return num;
}
var num_1_global = firstFunction('Hey there!', 5);

let secondFunction = () => {
    let result = 4 * num_1_global;
    console.log(result);
}

let myTimeout = () => {
    setTimeout(secondFunction, 2000);
}

secondFunction();
myTimeout();





});