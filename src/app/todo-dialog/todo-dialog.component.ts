import { Component, Inject, OnInit} from '@angular/core';
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { TodoService } from '../todo.service';
import { Title } from '@angular/platform-browser';


export interface DialogTodoData{
  nam:any;
  todoContent:string;
  tantouPerson:string;
  kihyouPerson:string;
  draftDate:Date;
  flg:any;
  title:string;
  todoTitle:string;
  responseDate:Date;
  responsePlanDate:Date;
  category:string;
}
@Component({
  selector: 'app-todo-dialog',
  templateUrl: './todo-dialog.component.html',
  styleUrls: ['./todo-dialog.component.css']
})
export class TodoDialogComponent {
message:string;
formChanger:boolean = false;
resDateFlg:boolean = false;
  constructor(public dialogRef: MatDialogRef<TodoDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogTodoData,private todoService:TodoService ) { }

  ngOnInit(){
    if(this.data.title == '削除フォーム'){
      this.formChanger = true;
    }else if(this.data.title == '更新フォーム'){
      this.resDateFlg = true;
    }

    //intをString化,`${}`は文字列に変数を格納する記法
    this.data.flg = `${this.data.flg}`;
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onSubmitUpdate(){
    let result = this.data;
    delete result.title;    
    this.message = JSON.stringify(result);
    console.log(this.message);
    
    this.todoService.UpdateTodo(this.message);
  }

  onSubmitDelete(){
    let result = this.data;
    this.message = JSON.stringify(result);
    this.todoService.DeleteTodo(this.message);
  }


}
