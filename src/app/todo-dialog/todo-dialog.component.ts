import { Component, Inject } from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TodoService } from '../todo.service';


export interface DialogTodoData{
  nam:any;
  todoContent:string;
  tantouPerson:string;
  kihyouPerson:string;
  draftDate:Date;
  flg:any;
}
@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html',
  styleUrls: ['./todo-dialog.component.css']
})
export class TodoDialogComponent {
message:string;
  constructor(public dialogRef: MatDialogRef<TodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogTodoData,private todoService:TodoService) { }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmitUpdate(){
    let result = this.data;
    this.message = JSON.stringify(result);
    this.todoService.UpdateTodo(this.message);
  }

}
