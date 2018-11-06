name = 'Austin';
var name;
console.log(name);
setName();
function setName() {
    var name = 'Covalence';
    console.log(name);
}


console.log("Let's average some stuff!");
let avg = findAvg(2, 2);
console.log("avg = ", avg);
function findAvg(a, b) {
    console.log('inside the average function');
    var answer = (a + b) / 2;
    return answer
}


let fruits = ['apple', 'banana', 'orange'];
function getFirstFruit() {
    let favFruit;
    console.log(fruits[0]);

    favFruit = fruits[2];
    function getFavFruit() {
        console.log(favFruit);
    };
    getFavFruit();

    let leastFav = fruits[1];
    console.log(leastFav);

};
getFirstFruit();

printMyName();

function printMyName() {
    console.log('Hello, ', name);
}

let myFunction = function() {
    console.log('Hellooooo!');
}
myFunction();
