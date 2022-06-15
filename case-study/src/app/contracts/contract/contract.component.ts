import { Component, OnInit } from '@angular/core';
import {Contract} from '../contract';
import {ContractService} from '../contract.service';
import {CustomerService} from '../../customer/customer.service';
import {FacilityService} from '../../facility/facility.service';
import {Facility} from '../../facility/facility-list/facility';
import {Customer} from '../../customer/customer';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  contracts: Contract[] = [];

  constructor(private contractService: ContractService) { }

  ngOnInit(): void {
    this.contracts = this.contractService.getAll();
  }

}
