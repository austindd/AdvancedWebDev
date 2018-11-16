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


    // ========================= Promises =========================

    var my_var = true;

    let orderingChickenSandwich = () => {           // Had to wrap this promise in a function because otherwise it runs on page load
        return new Promise((resolve, reject) => {   // I only want this to run when I invoke the orderFood() function below.
            if (my_var === true) {
                let myOrder = {
                    sandwich: 'chicken',
                    veggies: 'lettuce'
                };
                let success = [myOrder, 'Would you like fries with that?'];
                resolve(success);
            };
            if (my_var === false) {
                let err = new Error('Suit yourself...');
                reject(err);
            };
        });
    };

    const orderFood = () => {
        orderingChickenSandwich().then((result) => {
            let [order, message] = result;
            console.log(order);
            console.log(message);
        }, (err) => {
            console.log(err);
        }).catch((err) => {
            console.log(err, `I guess you'll be having a knuckle sandwich, then!`);
        });
    };

    $(`#button4`).click(orderFood);


    // ====================== Chaining Promises ======================

    let startChain = (num) => {
        let start_value = num
        let err = () => new Error('Something AWFUL happened!');
        return new Promise((resolve, reject) => {
            let val = start_value
            setTimeout(() => {
                let x1 = val;
                console.log(val);
                resolve(x1);
                reject(err);
            }, 500);
        }).then((val) => {
            return new Promise((resolve, reject) => {
                let x = val;
                setTimeout(() => {
                    let x2 = 2 * x;
                    console.log(x2);
                    resolve(x2);
                    reject(err);
                }, 500);
            }).then((val) => {
                return new Promise((resolve, reject) => {
                    let x = val;
                    setTimeout(() => {
                        let x3 = 4 * x;
                        console.log(x3);
                        resolve(x3);
                        reject(err);
                    }, 500);
                }).then((val) => {
                    return new Promise((resolve, reject) => {
                        let x = val;
                        setTimeout(() => {
                            let x4 = 6 * x;
                            console.log(x4);
                            resolve(x4);
                            reject(err);
                        }, 500);
                    }).then((val) => {
                        console.log('Done-ion Rings!');
                        return val;                         // Final value returned here
                    }).catch(err)
                }).catch(err)
            }).catch(err)
        }).catch(err)
    };

$(`#button5`).click(() => {
    console.log('Starting Chain...')
    startChain(1);
});

});