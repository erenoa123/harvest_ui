import { Component, OnInit } from '@angular/core';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
message:string;
  constructor(private todoService:TodoService) { }

  ngOnInit(){
    this.message = this.todoService.test();
  }

  getContent(){
    return this.todoService.contentTodo;
  }

}
