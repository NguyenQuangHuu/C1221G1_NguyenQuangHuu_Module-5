import {Injectable} from '@angular/core';
import {Customer} from './customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerList: Customer[] = [
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

  constructor() {
  }

  getAll(): Customer[] {
    return this.customerList;
  }

  addCustomer(customer: Customer): void {
    let count = 1;
    for (const k in this.customerList) {
      if (count === this.customerList[k].id) {
        count++;
      }
    }
    customer.id = count;
    this.customerList.push(customer);
  }

  findById(id: number): Customer {
    let cus: Customer;
    // tslint:disable-next-line:prefer-for-of
    for (let i = 0; i < this.customerList.length; i++) {
      if (this.customerList[i].id === id) {
        cus = this.customerList[i];
      }
    }
    return cus;
  }

  edit(customer: Customer) {
    console.log(customer);
    for (let i = 0; i < this.customerList.length; i++) {
      if (customer.id === this.customerList[i].id) {
        this.customerList[i] = customer;
      }
    }
  }


  delete(customer: Customer) {
    this.customerList = this.customerList.filter( cus => cus.id !== customer.id);
  }
}
