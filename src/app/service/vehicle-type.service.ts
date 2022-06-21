import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Vehicle} from '../model/vehicle';
import {environment} from '../../environments/environment';
import {VehicleType} from '../model/vehicleType';

const API_URL = `${environment.API_URL}`;
@Injectable({
  providedIn: 'root'
})
export class VehicleTypeService {

  constructor(private http: HttpClient) {

  }

  getAll(): Observable<VehicleType[]> {
    return this.http.get<VehicleType[]>(`${API_URL}/api/vehicle-type`);
  }
}
