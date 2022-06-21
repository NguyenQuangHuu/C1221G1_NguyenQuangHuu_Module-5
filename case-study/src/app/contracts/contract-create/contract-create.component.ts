import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormControl, FormGroup, Validators} from '@angular/forms';
import {ContractService} from '../contract.service';
import {CustomerService} from '../../customer/customer.service';
import {FacilityService} from '../../facility/facility.service';
import {Facility} from '../../facility/facility';
import {Customer} from '../../customer/customer';
import {Router} from '@angular/router';
import DateTimeFormat = Intl.DateTimeFormat;

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
      startDate: new FormControl('', [Validators.required] ),
      endDate: new FormControl('',[Validators.required]),
      deposit: new FormControl('', [Validators.pattern('[+]?\\d*')]),
      customer: new FormControl(''),
      service: new FormControl('')
    }, [this.customStartDate , this.customValidate] );
  }
  customStartDate(abstractControl: AbstractControl) {
    const startDate = Date.parse(abstractControl.get('startDate').value);
    const endDate = Date.parse(abstractControl.get('endDate').value);
    const now = Date.now();
    const past = (startDate - now);
    const validDay = (endDate - startDate);
    if ( past < 0){
      return{
        pastEnđ: true
      };
    } else if( validDay < 0 ){
      return {
        pastTime: true
      };
    }
    console.log(abstractControl.get('startDate').errors);
    return null;
  }

  customValidate(fg: AbstractControl) {
    const startDate = Date.parse(fg.get('startDate').value);
    const endDate = Date.parse(fg.get('endDate').value);
    const now = Date.now();
    if(endDate - now < 0){
      return {
        pastEndDate: true
      };
    }
    if(isNaN(startDate) && endDate){
      return {
        noStartDate: true
      };
    }
    console.log('startDate' + startDate);
    console.log('endDate' + endDate);
    const times = (startDate - endDate);
    console.log(times);
    if (startDate - endDate > 0) {
      return {
        validDate: true
      };
    }
    return null;
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
