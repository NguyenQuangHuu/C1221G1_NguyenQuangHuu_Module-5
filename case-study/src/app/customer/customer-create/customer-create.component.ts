import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerFormGroup: FormGroup;
  constructor() {
    this.customerFormGroup = new FormGroup({
      id: new FormControl(0),
      code: new FormControl('', [Validators.pattern('^KH-\\d{4}')]),
      name: new FormControl(''),
      email: new FormControl('', [Validators.email]),
      dayOfBirth: new FormControl('', [Validators.pattern('')]),
      identify: new FormControl('', [Validators.pattern('^\\d{9}|\\d{12}')]),
      phoneNumber: new FormControl('', [Validators.pattern('^((\\(84\\)\\+(90))|(\\(84\\)\\+(91))|(090)|(091))\\d{7}$')]),
      address: new FormControl(''),
      gender: new FormControl(''),
      type: new FormControl('')
    });
  }

  ngOnInit(): void {

  }

  onCustomerSubmit() {
    console.log(this.customerFormGroup.value);
  }
}
