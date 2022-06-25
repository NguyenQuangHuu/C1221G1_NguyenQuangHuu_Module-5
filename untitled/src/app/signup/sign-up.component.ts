import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-sign-up',
  templateUrl: './sign-up.component.html',
  styleUrls: ['./sign-up.component.css']
})
export class SignUpComponent implements OnInit {
  signUpForm: FormGroup;

  constructor() { }

  ngOnInit(): void {
    this.signUpForm = new FormGroup({
      customerName: new FormControl(),
      customerAge: new FormControl(),
      customerAddress: new FormControl(),
      customerPhone: new FormControl(),
      customerNote: new FormControl(),
      customerUsername: new FormControl(),
      password: new FormControl(),
      confirmPassword: new FormControl()
    });
  }

  signUpSubmit(){
    console.log(this.signUpForm.value);
  }
}
