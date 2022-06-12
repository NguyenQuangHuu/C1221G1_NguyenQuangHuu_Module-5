var number = 10;
function fibonacci(num) {
    if (num <= 2) {
        return 1;
    }
    return fibonacci(num - 2) + fibonacci(num - 1);
}
console.log(fibonacci(10));
function tong_fibonacci(numb) {
    var sum = 0;
    for (var i = 0; i < numb; i++) {
        sum += fibonacci(i);
    }
    return sum;
}
console.log(tong_fibonacci(4));
