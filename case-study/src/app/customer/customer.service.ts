import {Injectable} from '@angular/core';
import {Customer} from './customer';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
const API_URL = 'http://localhost:8080';


@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  customerList: Customer[] = [
    // {
    //   id: 1,
    //   code: 'KH-0001',
    //   name: 'Khách hàng A',
    //   birthday: '2000-01-01',
    //   phone: '0123456789',
    //   identify: '123456789',
    //   address: 'Đà Nẵng',
    //   email: 'khachhanga@gmail.com',
    //   gender: 0,
    //   type: 'Diamond'
    // },
    // {
    //   id: 2,
    //   code: 'KH-0002',
    //   name: 'Khách hàng B',
    //   birthday: '2000-01-01',
    //   phone: '0123456789',
    //   identify: '123456789',
    //   address: 'Đà Nẵng',
    //   email: 'khachhanga@gmail.com',
    //   gender: 1,
    //   type: 'Diamond'
    // },
    // {
    //   id: 3,
    //   code: 'KH-0003',
    //   name: 'Khách hàng C',
    //   birthday: '2000-01-01',
    //   identify: '123456789',
    //   phone: '0123456789',
    //   address: 'Đà Nẵng',
    //   email: 'khachhanga@gmail.com',
    //   gender: 1,
    //   type: 'Vip'
    // },
    // {
    //   id: 4,
    //   code: 'KH-0004',
    //   name: 'Khách hàng D',
    //   birthday: '2000-01-01',
    //   phone: '0123456789',
    //   identify: '123456789',
    //   address: 'Đà Nẵng',
    //   email: 'khachhanga@gmail.com',
    //   gender: 0,
    //   type: 'Diamond'
    // }
  ];
  constructor(private http: HttpClient) {
  }

  getAll(): Observable<Customer[]> {
    return this.http.get<Customer[]>(`${API_URL}/api/customers/`);
  }

  addCustomer(customer: Customer): Observable<Customer> {
    return this.http.post<Customer>(`${API_URL}/api/customers/add`, customer);
  }

  findById(id: number): Observable<Customer> {
    return this.http.get<Customer>(`${API_URL}/api/customers/${id}`);
  }

  edit(id: number , customer: Customer): Observable<Customer> {
    return this.http.patch(`${API_URL}/api/customers/edit/${id}`, customer);
  }


  delete(id: number): Observable<Customer> {
    return this.http.delete(`${API_URL}/api/customers/delete/${id}`);
  }
}
