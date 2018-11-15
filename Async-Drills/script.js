$(document).ready(function () {


    // ================= Async: Now and Later =================

    var num_1_global
    const firstFunction = (msg, num) => {
        console.log(msg);
        num_1_global = num
        return num;
    };
    const secondFunction = () => {
        let result = 4 * num_1_global;
        console.log(result);
    };
    const myTimeout = () => {
        setTimeout(secondFunction, 2000);
    };


    $(`#button1`).click(() => {
        firstFunction('Hey there!', 5);
        secondFunction();
        myTimeout();
    });




    // ====================== Callbacks ======================


    // I don't know if this was the intended method, but I just kinda made it work...ish
    const getWords = () => {
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
    $(`#button2`).click(getWords);


    const countdown = (num, callback = done) => {
        let duration = num; // Saving the initial 'num' value to pass it into the callback function.
        const internalTimer = (i, internalCallback) => {
            if (i > 0) {
                setTimeout(() => {
                    console.log(i);
                    internalTimer(i - 1, internalTimer);
                }, 1000);
            } else {
                setTimeout(() => {
                    return callback(duration);
                }, 1000);
            };
        };
        internalTimer(num, callback);
    };

    const done = (n) => {
        console.log(`Done-ion rings! after ${n} seconds.`);
    };
    $(`#button3`).click(() => {
        countdown(5, done)
    });





});