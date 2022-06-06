import {Component, Input, OnInit} from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {
  num: number;
  num2: number;
  result:string;
  constructor() { }

  ngOnInit(): void {

  }

  addition(num1:number,num2:number):string {
   return (Number(num1) + Number(num2)).toString();
  }

  subtract(num1:number,num2:number):string {
    return (Number(num1) - Number(num2)).toString();
  }

  multiple(num1:number,num2:number):string {
    return (Number(num1) * Number(num2)).toString();
  }

  divide(num1:number,num2:number):string {
    return (Number(num1) / Number(num2)).toString();
  }

  calculator(s: string,num1:number,num2:number) {
    switch (s) {
      case '+':
        this.result = this.addition(num1,num2);
        break;
      case '-':
        this.result = this.subtract(num1,num2);
        break;
      case '*':
        this.result = this.multiple(num1,num2);
        break;
      case '/':
        this.result = this.divide(num1,num2);
        break;
    }
  }
}
