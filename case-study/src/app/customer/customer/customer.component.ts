import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = [
    {
      id: 1,
      code: 'KH-0001',
      name: 'Khách hàng A',
      birthday: '2000-01-01',
      phone: '0123456789',
      identify: '123456789',
      address: 'Đà Nẵng',
      email: 'khachhanga@gmail.com',
      gender: 0,
      type: 'Diamond'
    },
    {
      id: 2,
      code: 'KH-0002',
      name: 'Khách hàng B',
      birthday: '2000-01-01',
      phone: '0123456789',
      identify: '123456789',
      address: 'Đà Nẵng',
      email: 'khachhanga@gmail.com',
      gender: 1,
      type: 'Diamond'
    },
    {
      id: 3,
      code: 'KH-0003',
      name: 'Khách hàng C',
      birthday: '2000-01-01',
      identify: '123456789',
      phone: '0123456789',
      address: 'Đà Nẵng',
      email: 'khachhanga@gmail.com',
      gender: 1,
      type: 'Vip'
    },
    {
      id: 4,
      code: 'KH-0004',
      name: 'Khách hàng D',
      birthday: '2000-01-01',
      phone: '0123456789',
      identify: '123456789',
      address: 'Đà Nẵng',
      email: 'khachhanga@gmail.com',
      gender: 0,
      type: 'Diamond'
    }
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
