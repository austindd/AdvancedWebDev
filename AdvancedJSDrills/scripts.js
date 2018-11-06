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
let favFruit = 'orange';
function getFirstFruit() {
    console.log(fruits[0]);
    $('#fruits').append(`<p>First fruit in array: ${fruits[0]}</p>`);

    let myNewFav = favFruit;
}
getFirstFruit();

function getFavFruit() {
    console.log(favFruit);
    $('#fruits').append(`<p>My favorite fruit in array: ${favFruit}</p>`);
}
getFavFruit();