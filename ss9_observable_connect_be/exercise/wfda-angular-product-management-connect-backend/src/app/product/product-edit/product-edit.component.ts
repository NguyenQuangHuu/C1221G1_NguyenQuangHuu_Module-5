import {Component, OnInit} from '@angular/core';
import {ProductService} from '../../service/product.service';
import {ActivatedRoute, ParamMap, Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';
import {Product} from "../../model/product";
import {CategoryService} from "../../service/category.service";
import {Category} from "../../model/category";

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productForm: FormGroup;
  categories: Category[];
  id: number;
  product: Product;
  constructor(private productService: ProductService,
              private categoryService: CategoryService,
              private activatedRoute: ActivatedRoute,
              private route: Router) {
    this.activatedRoute.paramMap.subscribe((paramMap: ParamMap) => {
      this.id = +paramMap.get('id');
      this.productService.findById(this.id).subscribe(
        next => {
          return this.productForm = new FormGroup({
            id: new FormControl(next.id),
            name: new FormControl(next.name),
            price: new FormControl(next.price),
            description: new FormControl(next.description),
            category: new FormControl(next.category)
          });
        }
      );

    });
  }

  ngOnInit() {
    this.categoryService.getAll().subscribe(
      next => this.categories = next,
    );
  }

  getProduct(id: number) {
    return this.productService.findById(id);
  }

  updateProduct(id: number) {
    const product = this.productForm.value;
    this.productService.updateProduct(id, product).subscribe(
      next => {
        this.productForm.reset()
        this.route.navigateByUrl('product/list').then();
        alert('Cập nhật thành công');
      }
    );

  }
}
