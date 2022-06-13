import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {Users} from '../users';

@Component({
  selector: 'app-register-form',
  templateUrl: './register-form.component.html',
  styleUrls: ['./register-form.component.css']
})
export class RegisterFormComponent implements OnInit {
  users: Users[] = [{
    email: 'nguyenvana@gmail.com',
    password: '123123',
    age: 18,
    country: 'de',
    gender: 'female',
    phoneNumber: '123123123'
  }];
  registerForm: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email, Validators.minLength(10)]),
      password: new FormControl('', [Validators.required, Validators.minLength(6)]),
      confirmPassword: new FormControl('', [Validators.required]),
      age: new FormControl('', [Validators.required, Validators.min(18)]),
      country: new FormControl('', [Validators.required]),
      gender: new FormControl('', [Validators.required]),
      phoneNumber: new FormControl('', [Validators.required, Validators.pattern('^\\+84\\d{9,10}$')])
    }, [this.confirmPassword]);
  }
  confirmPassword(c: AbstractControl) {
    const pass = c.get('password').value;
    const passConfirm = c.get('confirmPassword').value;
    console.log(pass + ' ' + passConfirm);
    if (passConfirm !== pass) {
      return {
        passValid: true
      };
    }
    return null;
  }

  onSubmit() {
    if (this.registerForm.valid) {
      this.users.push(this.registerForm.value);
      this.registerForm.reset();
    }
  }
}
