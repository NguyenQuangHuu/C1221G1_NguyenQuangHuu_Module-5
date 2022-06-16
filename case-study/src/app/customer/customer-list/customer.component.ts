import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer';
import {CustomerService} from '../customer.service';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  customers: Customer[] = [];
  idModal: number;
  nameModal: string;
  constructor(private customerService: CustomerService) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.customerService.getAll().subscribe(
      next => this.customers = next
    );
  }

  deleteModal(id: number) {
    const customer = this.customerService.findById(id);
    console.log(customer);
    if (customer !== null) {
      this.customerService.delete(customer);
    }
    this.ngOnInit();
  }

  modal(id: number, name: string) {
    this.idModal = id;
    this.nameModal = name;
  }
}
