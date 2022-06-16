import {Injectable} from '@angular/core';
import {Product} from '../model/product';
import {CategoryService} from "./category.service";
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {environment} from "../../environments/environment";

const API_URL = `${environment.apiUrl}`
@Injectable({
  providedIn: 'root'
})
export class ProductService {

  constructor(private productService: ProductService,private http:HttpClient) {
  }

  getAll(): Observable<Product[]> {
    return this.http.get<Product[]>(`${API_URL}/product`);
  }

  saveProduct(product): Observable<Product> {
    console.log(product)
    return this.http.post<Product>(`${API_URL}/product`,product)
  }

  findById(id: number): Observable<Product>{
    return this.http.get<Product>(`${API_URL}/product/${id}`);
  }

  updateProduct(id: number, product: Product): Observable<Product> {
    return this.http.patch<Product>(`${API_URL}/product/${id}`,product);
  }

  deleteProduct(id: number): Observable<Product> {
   return this.http.delete<Product>(`${API_URL}/product/${id}`);
  }
}
