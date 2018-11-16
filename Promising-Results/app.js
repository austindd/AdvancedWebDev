document.addEventListener('DOMContentLoaded', function () {

    const sayHello = () => {
        console.log('Hello World!');
    };
    sayHello();

    let myPromiseChain = (num_1, num_2) => {
        let start_val_1 = num_1;
        let start_val_2 = num_2;
        let err = () => new Error('You done effed up, A-Aron!!');
        return new Promise((resolve, reject) => {
            let result = add(start_val_1, start_val_2); // 1
            resolve(result);
            reject(err);
        }).then((val) => {
            return new Promise((resolve, reject) => {
                let result = multiply(val, 2); // 2
                console.log(val);
                resolve(result);
                reject(err);
            }).then((val) => {
                return new Promise((resolve, reject) => {
                    let result = divide(val, 4); // 3
                    console.log(result);
                    resolve(result);
                    reject(err);
                }).then((val) => {
                    return new Promise((resolve, reject) => {
                        let result = subtract(val, 3); //4
                        console.log(result);
                        resolve(result);
                        reject(err);
                    }).then((val) => {
                        return new Promise((resolve, reject) => {
                            let result = add(val, 98); //5
                            console.log(result);
                            resolve(result);
                            reject(err);
                        }).then((val) => {
                            return new Promise((resolve, reject) => {
                                let result = remainder(val, 2); //6
                                console.log(result);
                                resolve(result);
                                reject(err);                            
                            }).then((val) => {}).catch(err);
                        }).catch(err);
                    }).catch(err);
                }).catch(err);
            }).catch(err);
        }).catch(err);
    };

    myPromiseChain(6, 2);



    // ==== CopyPasta ====

    // return new Promise((resolve, reject) => {}).then((val) => {}).catch(err);

    /*

    let result = subtract(val, 3); //4
    console.log(result);
    resolve(result);
    reject(err);

    */

});