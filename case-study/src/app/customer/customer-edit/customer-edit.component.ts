import {Component, OnInit} from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {CustomerService} from '../customer.service';
import {Customer} from '../customer';

@Component({
  selector: 'app-customer-edit',
  templateUrl: './customer-edit.component.html',
  styleUrls: ['./customer-edit.component.css']
})
export class CustomerEditComponent implements OnInit {
  editCustomerForm: FormGroup;
  customer: Customer;

  constructor(private activatedRoute: ActivatedRoute, private customerService: CustomerService, private route: Router) {
    activatedRoute.paramMap.subscribe((param: ParamMap) => {
      const id = param.get('id');
      // tslint:disable-next-line:radix
      this.customer = this.customerService.findById(parseInt(id));
    });


  }

  ngOnInit(): void {
    this.editCustomerForm = new FormGroup({
      id: new FormControl(this.customer.id),
      code: new FormControl(this.customer.code, [Validators.required, Validators.pattern('^KH-\\d{4}')]),
      name: new FormControl(this.customer.name, [Validators.required]),
      email: new FormControl(this.customer.email, [Validators.required, Validators.email]),
      birthday: new FormControl(this.customer.birthday, [Validators.required, Validators.pattern('')]),
      identify: new FormControl(this.customer.identify, [Validators.required, Validators.pattern('^\\d{9}|\\d{12}')]),
      phone: new FormControl(this.customer.phone, [Validators.required,
        Validators.pattern('^((\\(84\\)\\+(90))|(\\(84\\)\\+(91))|(090)|(091))\\d{7}$')]),
      address: new FormControl(this.customer.address, [Validators.required]),
      gender: new FormControl(this.customer.gender, [Validators.required]),
      type: new FormControl(this.customer.type, [Validators.required])
    });
  }

  editCustomerSubmit() {
    const custom = this.editCustomerForm.value;
    if (this.editCustomerForm.valid) {
      this.customerService.edit(custom);
      this.editCustomerForm.reset();
      this.route.navigateByUrl('/customer').then();
    }
    this.ngOnInit();
  }
}
