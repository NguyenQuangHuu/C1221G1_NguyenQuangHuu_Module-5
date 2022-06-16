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
  facilityList: Facility[] = [
    {
      id: 1,
      code: 'VL-1234',
      name: 'Villa 4 Season',
      usable: 30.0,
      price: 3000000,
      convenience: 'Cám chim',
      floor: 4,
      capacity: 10,
      pool_usable: 20.0,
      standard_room: 'VIP',
      rent_type: 'DAY',
      img: 'room1.jpg'
    },
    {
      id: 2,
      code: 'VL-1234',
      name: 'Villa Ocean',
      usable: 30.0,
      price: 4500000,
      convenience: 'Cám chim',
      floor: 4,
      capacity: 10,
      pool_usable: 20.0,
      standard_room: 'VIP',
      rent_type: 'DAY',
      img: 'room2.jpg'
    },
    {
      id: 3,
      code: 'VL-1234',
      name: 'Villa Front Ocean View',
      usable: 30.0,
      price: 6000000,
      convenience: 'Cám chim',
      floor: 4,
      capacity: 10,
      pool_usable: 20.0,
      standard_room: 'VIP',
      rent_type: 'DAY',
      img: 'room3.jpg'
    },
    {
      id: 4,
      code: 'VL-1234',
      name: 'House 4 Season',
      usable: 30.0,
      price: 1000000,
      convenience: 'Cám chim',
      floor: 4,
      capacity: 10,
      pool_usable: 20.0,
      standard_room: 'VIP',
      rent_type: 'DAY',
      img: 'room4.jpg'
    },
    {
      id: 5,
      code: 'VL-1234',
      name: 'House 4 U',
      usable: 30.0,
      price: 45000,
      convenience: 'Cám chim',
      floor: 4,
      capacity: 10,
      pool_usable: 20.0,
      standard_room: 'VIP',
      rent_type: 'DAY',
      img: 'room5.jpg'
    },
    {
      id: 6,
      code: 'VL-1234',
      name: 'Villa 4 Season',
      usable: 30.0,
      price: 45000,
      convenience: 'Cám chim',
      floor: 4,
      capacity: 10,
      pool_usable: 20.0,
      standard_room: 'VIP',
      rent_type: 'DAY',
      img: 'room6.jpg'
    },
  ];
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

  remove(facility: Facility) {
    this.facilityList = this.facilityList.filter( facilities => facilities.id !== facility.id);
  }
}
