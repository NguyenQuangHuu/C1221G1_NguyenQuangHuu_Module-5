import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  contractCreate: FormGroup;
  constructor() {
    this.contractCreate = new FormGroup({
      startDate: new FormControl(''),
      endDate: new FormControl(''),
      deposit: new FormControl('', [Validators.pattern('[+]?\\d+')]),
      customer: new FormControl(''),
      facility: new FormControl('')
    });
  }

  ngOnInit(): void {

  }

  submitContract() {
    console.log(this.contractCreate.value);
  }
}
