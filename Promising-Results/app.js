document.addEventListener('DOMContentLoaded', function () {


    const workingHard = () => {
        console.log('Hardly working!');
    };
    workingHard();


    let progBar1 = document.getElementById('prog-bar-1');
    progBar1.style.width = '0%';

    let prog_array = [0];
    let prog_audit = [];


    // ======================= Main Logic =======================

    const myPromiseChain = (num_1, num_2) => {
        let start_val_1 = num_1;
        let start_val_2 = num_2;
        let err = (msg = 'Unspecified Error') => {
            let error = new Error('You done effed up, A-Aron!!');
            console.log(msg);
            console.log(error);
            return error;
        };
        console.log(`Starting Values: ${start_val_1} | ${start_val_2}`);

        updateProgress(1);

        return new Promise((resolve, reject) => {
            let result = slowMath.add(start_val_1, start_val_2); // 1
            resolve(result);
            reject(err);
        }).then((val) => {
            console.log(val);

            updateProgress(2);

            return new Promise((resolve, reject) => {
                let result = slowMath.multiply(val, 2); // 2
                resolve(result);
                reject(err);
            }).then((val) => {
                console.log(val);

                updateProgress(3);

                return new Promise((resolve, reject) => {
                    let result = slowMath.divide(val, 4); // 3
                    resolve(result);
                    reject(err);
                }).then((val) => {
                    console.log(val);

                    updateProgress(4);

                    return new Promise((resolve, reject) => {
                        let result = slowMath.subtract(val, 3); // 4
                        resolve(result);
                        reject(err);
                    }).then((val) => {
                        console.log(val);

                        updateProgress(5);

                        return new Promise((resolve, reject) => {
                            let result = slowMath.add(val, 98); // 5
                            resolve(result);
                            reject(err);
                        }).then((val) => {
                            console.log(val);

                            updateProgress(6);

                            return new Promise((resolve, reject) => {
                                let result = slowMath.remainder(val, 2); // 6
                                resolve(result);
                                reject(err);
                            }).then((val) => {
                                console.log(val);

                                updateProgress(7);

                                return new Promise((resolve, reject) => {
                                    let result = slowMath.multiply(val, 50); // 7
                                    resolve(result);
                                    reject(err);
                                }).then((val) => {
                                    console.log(val);

                                    updateProgress(8);

                                    return new Promise((resolve, reject) => {
                                        let result = slowMath.remainder(val, 40); // 8
                                        resolve(result);
                                        reject(err);
                                    }).then((val) => {
                                        console.log(val);

                                        updateProgress(9);

                                        return new Promise((resolve, reject) => {
                                            let result = slowMath.add(val, 32); // 9
                                            resolve(result);
                                            reject(err);
                                        }).then((val) => {
                                            console.log(val);

                                            updateProgress(10);

                                            console.log(`The final anser is ${val}`);

                                            return val;
                                        }).catch(err);
                                    }).catch(err);
                                }).catch(err);
                            }).catch(err);
                        }).catch(err);
                    }).catch(err);
                }).catch(err);
            }).catch(err);
        }).catch(err);
    };


    let startBtn = document.getElementById('button-1');
    let msgBanner = document.createElement('button');
    let msgText = document.createTextNode('But what if we start with 1 & 1?');

    startBtn.addEventListener('click', () => {
        msgBanner.className = 'btn m-2 btn-warning';
        msgBanner.appendChild(msgText);
        document.getElementById('banner-wrapper').appendChild(msgBanner);

        prog_audit.push(prog_array.shift());
        prog_array.push(0);

        setTimeout(() => { myPromiseChain(6, 2) }, 500);

    });

    msgBanner.addEventListener('click', () => {

        prog_audit.push(prog_array.shift());
        prog_array.push(0);

        setTimeout(() => { myPromiseChain(1, 1) }, 500);

    })

    // ==== CopyPasta ====

    // return new Promise((resolve, reject) => {}).then((val) => {}).catch(err);

    /*

    let result =  //
    console.log(result);
    resolve(result);
    reject(err);

    */





    // =================== Helper Functions ===================


    const updateProgress = (num) => {

        let result;

        while (prog_array.length != 2) {
            if (prog_array.length < 2) {
                prog_array.push(prog_array[0]);
            } else if (prog_array.length > 2) {
                prog_audit.push(prog_array.shift());
            }
        }

        if (prog_array.length === 2) {
            prog_audit.push(prog_array.shift());
            prog_array.push(num);                 // Add progress level (1-10) to array    
            result = getProgress(prog_array);
            progBar1.style.width = `${result}%`;
        }
    }

    const getProgress = ([a, b = a]) => {
        let p = 10 * (Math.floor(avg(a, b)) + 1);               // Using 10% increments
        console.log(`${p}% complete`);
        return p;
    }

    const avg = (a, b) => {
        return (a + b) / 2;
    }


});