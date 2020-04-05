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


   addTodo(): void {
    this.todoList.push({
      title: this.todoTitle,
      isDone: false,
      todoDate: Date.now()
    });

    this.todoTitle = '';
  }

  deleteTodo(todo: any) {
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList.splice(index, 1);
  }

  completed(todo: any) {
    const index = this.todoList.findIndex(todoItem => todoItem === todo);
    this.todoList[index].isDone = !this.todoList[index].isDone;
    console.log(this.todoList[index].isDone);
  }


}
