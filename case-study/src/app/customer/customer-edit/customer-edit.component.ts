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
      const id = +param.get('id');
      // tslint:disable-next-line:radix
      this.customerService.findById(id).subscribe(
        customer => {
          this.editCustomerForm = new FormGroup({
            id: new FormControl(customer.id),
            code: new FormControl(customer.code, [Validators.required, Validators.pattern('^KH-\\d{4}')]),
            name: new FormControl(customer.name, [Validators.required]),
            email: new FormControl(customer.email, [Validators.required, Validators.email]),
            birthday: new FormControl(customer.birthday, [Validators.required, Validators.pattern('')]),
            identify: new FormControl(customer.identify, [Validators.required, Validators.pattern('^\\d{9}|\\d{12}')]),
            phone: new FormControl(customer.phone, [Validators.required,
              Validators.pattern('^((\\(84\\)\\+(90))|(\\(84\\)\\+(91))|(090)|(091))\\d{7}$')]),
            address: new FormControl(customer.address, [Validators.required]),
            gender: new FormControl(customer.gender, [Validators.required]),
            type: new FormControl(customer.type, [Validators.required])
          });
        }
      );
    });


  }

  ngOnInit(): void {
  }

  editCustomerSubmit() {
    const custom = this.editCustomerForm.value;
    if (this.editCustomerForm.valid) {
      this.customerService.edit(custom.id, custom).subscribe(
        next => {
          this.editCustomerForm.reset();
          this.route.navigateByUrl('/customer/list').then();
          alert('Chinh sua thanh cong');
        }
      );
    }
  }
}
