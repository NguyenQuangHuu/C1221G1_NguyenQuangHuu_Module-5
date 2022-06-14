import { Component, OnInit } from '@angular/core';
import {FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-contract-create',
  templateUrl: './contract-create.component.html',
  styleUrls: ['./contract-create.component.css']
})
export class ContractCreateComponent implements OnInit {
  contractCreate: FormGroup;
  constructor() { }

  ngOnInit(): void {
    this.contractCreate = new FormGroup({
      startDate: new FormControl('',[Validators.pattern('')]),
      endDate: new FormControl('',[Validators.pattern('')]),
      deposit: new FormControl('',[Validators.pattern('')]),
      customer: new FormControl(''),
      facility: new FormControl('')
    });
  }

  submitContract() {
    console.log(this.contractCreate.value);
  }
}
