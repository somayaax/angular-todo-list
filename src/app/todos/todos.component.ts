import { Component, OnInit } from '@angular/core';
interface Todo {
  title: string,
  done: boolean
}
@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})

export class TodosComponent implements OnInit {

  todos: Todo[] = [{ title: "sample todo 1", done: false },{ title: "sample todo 2", done: false }];
  todoInput: string = "";

  constructor() {
  }
  ngOnInit(): void {
  }

  addToDo(todo: string) {
    if (todo && todo.trim()) {
      this.todos.push({ title: todo, done: false });
      this.todoInput = "";
    }
  }
  deleteToDo(i: number) {
    this.todos.splice(i, 1);
  }
  checkToDo(i: number) {
    this.todos[i].done = true;
  }
}
