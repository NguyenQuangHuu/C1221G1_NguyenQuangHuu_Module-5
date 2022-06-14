import { Component, OnInit } from '@angular/core';
import {Todo} from './todo';
import {FormControl} from '@angular/forms';
let _id = 1;
@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {
  todoList: Todo[] = [];
  content = new FormControl();
  constructor() { }

  ngOnInit(): void {
  }

  toggleTodo(i: number) {
    this.todoList[i].complete = !this.todoList[i].complete;
  }
  change() {
    const value = this.content.value;
    if (value) {
      const todo: Todo = {
        id: _id++,
        content: value,
        complete: false
      };
      this.todoList.push(todo);
      this.content.reset();
    }
  }

}
