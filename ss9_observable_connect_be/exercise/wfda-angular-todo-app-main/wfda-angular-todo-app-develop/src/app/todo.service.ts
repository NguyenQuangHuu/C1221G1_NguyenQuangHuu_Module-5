import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Todo} from './todo';


@Injectable({
  providedIn: 'root'
})
export class TodoService {
  apiUrl = 'http://localhost:3000/todos'
  constructor(private http:HttpClient) { }

  getAll(): Observable<Todo[]>{
    return this.http.get<Todo[]>(this.apiUrl);
  }

  addTodo(todo):Observable<Todo>{
    console.log(todo);
    return this.http.post<Todo>(this.apiUrl,todo);
  }


  delete(todo): Observable<Todo>{
    return this.http.delete<Todo>(this.apiUrl+'/'+todo.id);
  }
}
