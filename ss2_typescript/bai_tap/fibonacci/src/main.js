var number = 10;
function fibonacci(num) {
    var number1 = 0;
    var number2 = 1;
    var sum = 1;
    if (num == 0) {
        sum = 0;
    }
    if (num == 1 || num == 2) {
        sum = 1;
    }
    else {
        for (var i = 3; i <= num; i++) {
            number1 = number2;
            number2 = sum;
            sum = number2 + number1;
        }
    }
    console.log(sum);
}
fibonacci(3);
