import {Component, DoCheck, OnInit} from '@angular/core';
import {Customer} from '../customer';
import {CustomerService} from '../customer.service';
import {Router} from '@angular/router';
import {filter, map} from 'rxjs/operators';

@Component({
  selector: 'app-customer',
  templateUrl: './customer-list.component.html',
  styleUrls: ['./customer-list.component.css']
})
export class CustomerListComponent implements OnInit {
  customers: Customer[];
  idModal: number;
  nameModal: string;
  constructor(private customerService: CustomerService, private route: Router) { }

  ngOnInit(): void {
    this.customerService.getAll().subscribe(
      customer => {
        // @ts-ignore
        this.customers = customer.content;
      }
    );
  }
  // getAll() {
  //
  // }

  deleteModal(id: number) {
    this.customerService.findById(id).subscribe(
      next => {
        this.customerService.delete(next.id).subscribe(
          success => {
            this.ngOnInit();
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
