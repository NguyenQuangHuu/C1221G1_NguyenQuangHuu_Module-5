import { Component, OnInit } from '@angular/core';
import {Contract} from '../contract';

@Component({
  selector: 'app-contract',
  templateUrl: './contract.component.html',
  styleUrls: ['./contract.component.css']
})
export class ContractComponent implements OnInit {
  contracts: Contract[] = [
    {
      id: 1,
      code: 'CT-00001',
      customer: {
        id : 1,
        name : 'Khách hàng A'
      },
      service: {
        id : 2,
        name: 'Villa Ocean',
        price: 4500000
      },
      startDate: '2020-01-01',
      endDate: '2020-02-01',
      deposit: 300000
    },
    {
      id: 2,
      code: 'CT-00001',
      customer: {
        id : 2,
        name: 'Khách hàng B'
      },
      service: {
        id : 1,
        name: 'Villa 4 Season',
        price: 3000000
      },
      startDate: '2020-01-01',
      endDate: '2020-02-01',
      deposit: 300000
    },
    {
      id: 3,
      code: 'CT-00001',
      customer: {
        id : 3,
        name: 'Khách hàng C'
      },
      service: {
        id : 3,
        name: 'Villa Front Ocean View',
        price: 6000000
      },
      startDate: '2020-01-01',
      endDate: '2020-02-01',
      deposit: 300000
    },
    {
      id: 4,
      code: 'CT-00001',
      customer: {
        id : 4,
        name: 'Khách hàng D'
      },
      service: {
        id : 4,
        name: 'House 4 Season',
        price: 1000000
      },
      startDate: '2020-01-01',
      endDate: '2020-02-01',
      deposit: 300000
    },
    {
      id: 5,
      code: 'CT-00001',
      customer: {
        id : 2,
        name: 'Khách hàng B'
      },
      service: {
        id : 1,
        name: 'Villa 4 Season',
        price: 3000000
      },
      startDate: '2020-01-01',
      endDate: '2020-02-01',
      deposit: 300000
    },
    {
      id: 6,
      code: 'CT-00001',
      customer: {
        id : 2,
        name: 'Khách hàng B'
      },
      service: {
        id : 1,
        name: 'Villa 4 Season',
        price: 3000000
      },
      startDate: '2020-01-01',
      endDate: '2020-02-01',
      deposit: 300000
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
