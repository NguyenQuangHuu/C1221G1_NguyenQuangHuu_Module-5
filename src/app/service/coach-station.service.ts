import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {CoachStation} from '../model/coach-station';
import {environment} from '../../environments/environment';
const API_URL = `${environment.API_URL}`;
@Injectable({
  providedIn: 'root'
})
export class CoachStationService {

  constructor(private http: HttpClient) { }
  getAll(): Observable<CoachStation[]> {
    return  this.http.get<CoachStation[]>(`${API_URL}/api/coach-station`);
  }
}
