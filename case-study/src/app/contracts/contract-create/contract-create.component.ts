import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {ContractService} from '../contract.service';
import {CustomerService} from '../../customer/customer.service';
import {FacilityService} from '../../facility/facility.service';
import {Facility} from '../../facility/facility';
import {Customer} from '../../customer/customer';
import {Router} from '@angular/router';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  facilities: Facility[] = [];
  customers: Customer[] = [];
  contractCreate: FormGroup;
  constructor( private contractService: ContractService,
               private customerService: CustomerService,
               private facilityService: FacilityService,
               private route: Router) {

  }
  ngOnInit(): void {
    this.facilityService.getAll().subscribe(
      next => {
        this.facilities = next;
        console.log(next);
      }
    );
    this.customerService.getAll().subscribe(
      next => {
        // @ts-ignore
        this.customers = next.content;
        console.log(next);
      }
    );
    this.contractCreate = new FormGroup({
      id: new FormControl(''),
      startDate: new FormControl(''),
      endDate: new FormControl(''),
      deposit: new FormControl('', [Validators.pattern('[+]?\\d*')]),
      customer: new FormControl(''),
      service: new FormControl('')
    });
  }

  submitContract() {
    if (this.contractCreate.valid) {
      const contract = this.contractCreate.value;
      this.contractService.addContract(contract).subscribe(
        next => {
          this.contractCreate.reset();
          this.route.navigateByUrl('/contract/list').then();
        }
      );
    }
  }
}
