import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Todos';
  todoList: any[] = [];
  todoTitle: string;

  // tslint:disable-next-line: use-lifecycle-interface
  ngOnInit() {
    this.todoTitle = '';
    this.todoList = [{ title: 'Install Angular CLI', isDone: false, todoDate: new Date()}];
  }

   // adds a todo to our list
   addTodo(): void {
    this.todoList.push({
      title: this.todoTitle,
      isDone: false,
      todoDate: Date.now()
    });
    // resets our todoTitle variable to an empty string
    this.todoTitle = '';
  }

  // a method to delete an item
  deleteTodo(todo: any) {
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList.splice(index, 1);
  }

  // a method to cross out an item
  completed(todo: any) {
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList[index].isDone = !this.todoList[index].isDone;
    console.log(this.todoList[index].isDone);
  }


}
