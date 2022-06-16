import { Injectable } from '@angular/core';
import {Contract} from './contract';
import {FormGroup} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class ContractService {
  contractList: Contract[] = [
    ];
  constructor( private http: HttpClient) {
  }
  getAll(): Observable<Contract[]> {
    return this.http.get<Contract[]>(`${API_URL}/contracts`);
  }

  addContract(contract: Contract): Observable<Contract> {
    return this.http.post(`${API_URL}/contracts`, contract);
  }
}
