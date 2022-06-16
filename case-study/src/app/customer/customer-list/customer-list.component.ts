import { Component, OnInit } from '@angular/core';
import {Customer} from '../customer';
import {CustomerService} from '../customer.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-customer',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[] = [];
  idModal: number;
  nameModal: string;
  constructor(private customerService: CustomerService, private route: Router) { }

  ngOnInit(): void {
    this.getAll();
  }
  getAll() {
    this.customerService.getAll().subscribe(
      next => this.customers = next
    );
  }

  deleteModal(id: number) {
    this.customerService.findById(id).subscribe(
      next => {
        this.customerService.delete(next.id).subscribe(
          success => {
            this.ngOnInit();
            this.route.navigateByUrl('/customer/list').then();
            alert('Xoa thanh cong');
          },
          error => {
            console.log(error);
          }
        );
      }
    );
  }

  modal(id: number, name: string) {
    this.idModal = id;
    this.nameModal = name;
  }
}
