import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  editCustomerForm: FormGroup;
  constructor() {
    this.editCustomerForm = new FormGroup({
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

  ngOnInit(): void {

  }

  editCustomerSubmit() {
    console.log(this.editCustomerForm.value);
  }
}
