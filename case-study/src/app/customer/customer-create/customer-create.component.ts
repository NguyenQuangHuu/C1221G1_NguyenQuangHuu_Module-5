import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerFormGroup: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.customerFormGroup = new FormGroup({
      id: new FormControl(0),
      code: new FormControl(''),
      name: new FormControl(''),
      email: new FormControl(''),
      dayOfBirth: new FormControl(''),
      identify: new FormControl(''),
      phoneNumber: new FormControl(''),
      address: new FormControl(''),
      gender: new FormControl(''),
      type: new FormControl('')
    });
  }

  onCustomerSubmit() {
    console.log(this.customerFormGroup.value);
  }
}
