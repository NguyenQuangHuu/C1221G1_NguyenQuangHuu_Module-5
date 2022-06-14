import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, ParamMap} from "@angular/router";
import {ProductService} from "../../service/product.service";
import {Product} from "../../model/product";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  editProductFG : FormGroup;
  product:Product;
  constructor(private activatedRoute: ActivatedRoute, private productService: ProductService) {
    activatedRoute.paramMap.subscribe((param:ParamMap) => {
      const id = param.get('id');
      this.product = this.productService.findById(parseInt(id));
    });

  }

  ngOnInit(): void {
    this.editProductFG = new FormGroup({
      id: new FormControl(this.product.id),
      name: new FormControl(this.product.name),
      price: new FormControl(this.product.price),
      description: new FormControl(this.product.description),
    })
  }

  submitEdit() {
    this.productService.edit(this.editProductFG.value);
  }
}
