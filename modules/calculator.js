let addition = require('../modules/addition');

let cal = function (x, y) {
    console.log("value of x", x);
    console.log("value of y", y);
    return new Promise(function (resolve, reject) {
        addition.add(x, y).then(function (result) {
            console.log("result on 8 ",result);
            resolve(result)
        }).catch(function (err) {
            reject(err)
        })
    });
}

let calculate = function (x, y) {
    console.log("value of x in calculate ", x);
    console.log("value of y in calculate", y);
    return new Promise(function (resolve, reject) {
        addition.add(x, y).then(function (result_1) {
            console.log("result_1  ", result_1);
            addition.add(y,result_1).then(function (result_2) {
                console.log("result_2  ", result_2);
                resolve(result_2)
            }).catch(function (err) {
                reject(err)
            })
        })
        });
    }



exports.cal = cal;
exports.calculate = calculate;