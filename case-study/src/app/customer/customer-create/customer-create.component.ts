import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {CustomerService} from '../customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer-create',
  templateUrl: './customer-create.component.html',
  styleUrls: ['./customer-create.component.css']
})
export class CustomerCreateComponent implements OnInit {
  customerFormGroup: FormGroup;
  constructor(private customerService: CustomerService, private route: Router) {
    this.customerFormGroup = new FormGroup({
      id: new  FormControl(),
      code: new FormControl('', [Validators.pattern('^KH-\\d{4}')]),
      name: new FormControl(''),
      email: new FormControl('', [Validators.email]),
      birthday: new FormControl('', [Validators.pattern('')]),
      identify: new FormControl('', [Validators.pattern('^\\d{9}|\\d{12}')]),
      phone: new FormControl('', [Validators.pattern('^((\\(84\\)\\+(90))|(\\(84\\)\\+(91))|(090)|(091))\\d{7}$')]),
      address: new FormControl(''),
      gender: new FormControl(''),
      type: new FormControl('')
    });
  }

  ngOnInit(): void {

  }

  onCustomerSubmit() {
    console.log(this.customerFormGroup.valid);
    console.log(this.customerFormGroup);
    if (this.customerFormGroup.valid) {
      const customer = this.customerFormGroup.value;
      this.customerService.addCustomer(customer).subscribe(
        next => {
          this.customerFormGroup.reset();
          this.route.navigateByUrl('/customer/list').then();
        }
      );
    }
  }
}
