import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Vehicle} from '../model/vehicle';
import {environment} from '../../environments/environment';

const API_URL = `${environment.API_URL}`;
@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${API_URL}/api/vehicles`);
  }
  findById(id: number): Observable<Vehicle> {
    return this.http.get<Vehicle>(`${API_URL}/api/vehicles/${id}`);
  }

  add(vehicle: Vehicle): Observable<Vehicle> {
    return this.http.post<Vehicle>(`${API_URL}/api/vehicles/add`, vehicle);
  }

  deleteById(id: number): Observable<Vehicle> {
    return this.http.delete<Vehicle>(`${API_URL}/api/vehicles/${id}`);
  }
  updateById(id: number, vehicle: Vehicle): Observable<Vehicle> {
    return this.http.patch<Vehicle>(`${API_URL}/api/vehicles/${id}`, vehicle);
  }
  searchByTimeStartAndSpotStop(time?: string, spot?: string): Observable<Vehicle[]> {
    return this.http.get<Vehicle[]>(`${API_URL}/api/vehicles?startTime=${time}&spotSearch=${spot}`);
  }
}
