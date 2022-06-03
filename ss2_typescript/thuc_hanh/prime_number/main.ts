function isPrime(num:number):boolean {
    let isPrime = true;
    if(num<2){
        isPrime=false;
    }else{
        for(let i = 2;i<=Math.sqrt(num);i++){
            if(num%i===0){
                isPrime=false;
                break;
            }
        }
    }
    return isPrime;
}

let array:number[] = [1,5,9,2,6,15,19,35,51,53];
let sum = 0;
let text:string = "";
array.forEach(
    number=>{
        console.log(number);
        if(isPrime(number))
        {
            sum+=number;
            text+=number+" "
        }
    }
    );
console.log("Tổng giá trị của các số nguyên tố ở trong mảng này là "+sum);
console.log(` Các số nguyên tố có trong mảng là : ${text}`);
