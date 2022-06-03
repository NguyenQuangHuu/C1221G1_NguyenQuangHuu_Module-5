"use strict";
let money = 100;
const buyACar = (car) => {
    // @ts-ignore
    return new Promise(((resolve, reject) => {
        setTimeout(() => {
            if (money >= 10000) {
                resolve("can buy " + car);
            }
            else {
                reject("Do not enough money");
            }
        }, 100);
    }));
};
money = 10000;
const promise = buyACar("vinfast")
    .then(value => {
    console.log(value);
}, error => {
    console.log(error);
});
