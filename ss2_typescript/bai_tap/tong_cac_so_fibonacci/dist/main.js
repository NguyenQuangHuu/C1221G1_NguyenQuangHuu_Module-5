const number = 10;
function fibonacci(num) {
    if (num <= 0) {
        return 0;
    }
    else if (num <= 2) {
        return 1;
    }
    return fibonacci(num - 2) + fibonacci(num - 1);
}
console.log(fibonacci(10));
function tong_fibonacci(numb) {
    let sum = 0;
    for (let i = 0; i <= numb; i++) {
        sum += fibonacci(i);
    }
    return sum;
}
console.log(tong_fibonacci(10));
//# sourceMappingURL=main.js.map