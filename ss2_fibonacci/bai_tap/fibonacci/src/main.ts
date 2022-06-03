const number:number = 10;

function fibonacci(num:number):void{
    let number_one:number=0;
    let number_two:number=1;
    let sum:number = 1;
    if(num == 0){
        sum=0;
    }if(num==1 || num==2){
        sum=1;
    }else{
        for(let i = 3;i<=num;i++){
            number_one=number_two;
            number_two=sum;
            sum=number_two+number_one;
        }
    }
    console.log(sum);
}

fibonacci(3);
