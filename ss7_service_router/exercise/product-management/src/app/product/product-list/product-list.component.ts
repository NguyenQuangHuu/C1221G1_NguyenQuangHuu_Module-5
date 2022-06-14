import { Component, OnInit } from '@angular/core';
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  list : Product[]= [];
  constructor(private service:ProductService) {
  }

  ngOnInit(): void {
    this.list = this.getAll();
  }

  getAll():Product[]{
    return  this.service.getAll();
  }

  onDelete(id: number) {
    this.service.delete(id);
  }
}
