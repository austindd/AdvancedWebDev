document.addEventListener('DOMContentLoaded', function () {

    const sayHello = () => {
        console.log('Hello World!');
    };
    sayHello();

    let myPromiseChain = (num_1, num_2) => {
        let start_val_1 = num_1;
        let start_val_2 = num_2;
        let err = () => {
            let error = new Error('You done effed up, A-Aron!!');
            console.log(error);
            return error;
        };
        console.log(`Starting Values: ${start_val_1} | ${start_val_2}`);
        return new Promise((resolve, reject) => {
            let result = slowMath.add(start_val_1, start_val_2); // 1
            resolve(result);
            reject(err);
        }).then((val) => {
            console.log(val);
            return new Promise((resolve, reject) => {
                let result = slowMath.multiply(val, 2); // 2
                resolve(result);
                reject(err);
            }).then((val) => {
                console.log(val);
                return new Promise((resolve, reject) => {
                    let result = slowMath.divide(val, 4); // 3
                    resolve(result);
                    reject(err);
                }).then((val) => {
                    console.log(val);
                    return new Promise((resolve, reject) => {
                        let result = slowMath.subtract(val, 3); // 4
                        resolve(result);
                        reject(err);
                    }).then((val) => {
                        console.log(val);
                        return new Promise((resolve, reject) => {
                            let result = slowMath.add(val, 98); // 5
                            resolve(result);
                            reject(err);
                        }).then((val) => {
                            console.log(val);
                            return new Promise((resolve, reject) => {
                                let result = slowMath.remainder(val, 2); // 6
                                resolve(result);
                                reject(err);
                            }).then((val) => {
                                console.log(val);
                                return new Promise((resolve, reject) => {
                                    let result = slowMath.multiply(val, 50); // 7
                                    resolve(result);
                                    reject(err);
                                }).then((val) => {
                                    console.log(val);
                                    return new Promise((resolve, reject) => {
                                        let result = slowMath.remainder(val, 40); // 8
                                        resolve(result);
                                        reject(err);                                    
                                    }).then((val) => {
                                        console.log(val);
                                        return new Promise((resolve, reject) => {
                                            let result = slowMath.add(val, 32); // 9
                                            resolve(result);
                                            reject(err);                                        
                                        }).then((val) => {
                                            console.log(val);
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
    console.log(startBtn);
    let msgBanner = document.createElement('button');
    let msgText = document.createTextNode('But what if we start with 1 & 1?');

    startBtn.addEventListener('click', () => {
        msgBanner.className = 'btn m-2 btn-warning';
        msgBanner.appendChild(msgText);
        document.getElementById('banner-wrapper').appendChild(msgBanner);

        setTimeout(() => {myPromiseChain(6, 2)},500);

    });

    msgBanner.addEventListener('click', () => {
        setTimeout(() => {myPromiseChain(1, 1)},500);

    })


    // ==== CopyPasta ====

    // return new Promise((resolve, reject) => {}).then((val) => {}).catch(err);

    /*

    let result =  //
    console.log(result);
    resolve(result);
    reject(err);

    */

});