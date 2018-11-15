$(document).ready(function () {


    // ================= Async: Now and Later =================

    var num_1_global
    let firstFunction = (msg, num) => {
        console.log(msg);
        num_1_global = num
        return num;
    }
    firstFunction('Hey there!', 5);
    let secondFunction = () => {
        let result = 4 * num_1_global;
        console.log(result);
    }
    let myTimeout = () => {
        setTimeout(secondFunction, 2000);
    }
    secondFunction();
    myTimeout();


    // ====================== Callbacks ======================

    let getWords = () => {
        let word1 = "Pleased";
        let word2 = 'to';
        let word3 = 'meet';
        let word4 = "y'all";

        console.log(word1);
        
    }



});