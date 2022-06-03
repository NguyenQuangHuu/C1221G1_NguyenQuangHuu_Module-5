function isPrime(num) {
    var isPrime = true;
    if (num < 2) {
        isPrime = false;
    }
    else {
        for (var i = 2; i <= Math.sqrt(num); i++) {
            if (num % i === 0) {
                isPrime = false;
                break;
            }
        }
    }
    return isPrime;
}
var array = [1, 5, 9, 2, 6, 15, 19, 35, 51, 53];
var sum = 0;
var text = "";
array.forEach(function (number) {
    console.log(number);
    if (isPrime(number)) {
        sum += number;
        text += number + " ";
    }
});
console.log("Tổng giá trị của các số nguyên tố ở trong mảng này là " + sum);
console.log(" C\u00E1c s\u1ED1 nguy\u00EAn t\u1ED1 c\u00F3 trong m\u1EA3ng l\u00E0 : ".concat(text));
