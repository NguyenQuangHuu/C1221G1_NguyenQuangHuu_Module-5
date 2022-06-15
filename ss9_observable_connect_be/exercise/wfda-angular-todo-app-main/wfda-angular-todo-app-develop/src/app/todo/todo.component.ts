import {Component, OnInit} from '@angular/core';
import {Todo} from '../todo';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {HttpClient} from '@angular/common/http';
import {TodoService} from '../todo.service';

let _id = 1;

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todo[] = [];
  content = new FormControl();

  constructor(private todoService: TodoService) {
  }

  ngOnInit() {
    this.todoService.getAll().subscribe(
      (next) => {
        this.todos = next
      });
  }

  toggleTodo(i: number) {
    this.todos[i].complete = !this.todos[i].complete;
  }

  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        id: this.todos.length+1,
        content: value,
        complete: false
      };
      this.todoService.addTodo(todo).subscribe(
        () => {
          this.content.reset();
          this.ngOnInit();
        }
      )
    }
  }

  delete(todo: Todo) {
    console.log(todo);
    this.todoService.delete(todo).subscribe(
      ()=>{
        this.ngOnInit();
      }
    );

  }
}
