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
        const getFirstWord = () => {
            console.log(word1);
            return getSecondWord()
        };
        const getSecondWord = () => {
            setTimeout(() => {
                console.log(word2);
                return getThirdWord();
            }, 3000);
        };
        const getThirdWord = () => {
            setTimeout(() => {
                console.log(word3);
                return getFourthWord();
            }, 2000);
        };
        const getFourthWord = () => {
            setTimeout(() => {
                console.log(word4);
            }, 1000);
        };
        getFirstWord();
    };
    getWords();


const countdown = (num, callback) => {

}









});