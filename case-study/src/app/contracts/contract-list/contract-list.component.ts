import {Component, OnInit} from '@angular/core';
import {Contract} from '../contract';
import {ContractService} from '../contract.service';

@Component({
  selector: 'app-contract',
  templateUrl: './contract-list.component.html',
  styleUrls: ['./contract-list.component.css']
})
export class ContractListComponent implements OnInit {
  contracts: Contract[] = [];
  p = 1;

  constructor(private contractService: ContractService) {
  }

  ngOnInit(): void {
    this.getAll();
  }

  getAll() {
    this.contractService.getAll().subscribe(
      next => this.contracts = next
    );
  }
}
