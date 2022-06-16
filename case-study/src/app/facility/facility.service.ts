import { Injectable } from '@angular/core';
import {Facility} from './facility';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
const API_URL = `${environment.apiUrl}`;
@Injectable({
  providedIn: 'root'
})
export class FacilityService {
  facilityList: Facility[] = [];
  constructor(private http: HttpClient) { }

  getAll(): Observable<Facility[]> {
    return this.http.get<Facility[]>(`${API_URL}/facilities`);
  }

  addFacility(facility: Facility): Observable<Facility> {
    return this.http.post<Facility>(`${API_URL}/facilities`, facility);
  }

  findById(id: number): Observable<Facility> {
    return this.http.get<Facility>(`${API_URL}/facilities/${id}`);
  }

  update(id: number, facility: Facility): Observable<Facility> {
    return this.http.patch<Facility>(`${API_URL}/facilities/${id}`, facility);
  }

  remove(id: number): Observable<Facility> {
    return this.http.delete<Facility>(`${API_URL}/facilities/${id}`);
  }
}
