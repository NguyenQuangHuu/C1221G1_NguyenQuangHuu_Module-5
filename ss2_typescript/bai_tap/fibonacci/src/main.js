var number = 10;
function fibonacci(num) {
    var number_one = 0;
    var number_two = 1;
    var sum = 1;
    if (num == 0) {
        sum = 0;
    }
    if (num == 1 || num == 2) {
        sum = 1;
    }
    else {
        for (var i = 3; i <= num; i++) {
            number_one = number_two;
            number_two = sum;
            sum = number_two + number_one;
        }
    }
    console.log(sum);
}
fibonacci(3);
function fibo(num) {
    if (num <= 2) {
        return 1;
    }
    return fibo(num - 2) + fibo(num - 1);
}
console.log(fibo(10));
