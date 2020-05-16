import { Component, OnInit, Inject } from '@angular/core';
import { TodoService } from '../todo.service';
import { FormGroup, FormControl } from '@angular/forms';
import {ShareTodo} from '../model/sharetodo.model'
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {TodoDialogComponent} from '../todo-dialog/todo-dialog.component';
import { from } from 'rxjs';

export interface DialogTodoData{
  nam:any;
  todoContent:string;
  tantouPerson:string;
  kihyouPerson:string;
  draftDate:Date;
  flg:any;
}

export interface DialogData{
  animal: string;
  name: string;
}

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
message:string;
inputTodo:FormGroup;
panelColor:string;

flgRegist:boolean = true;
flgProgress:boolean = true;
flgDone:boolean = true;

cntRegist:any;
cntProgress:any;
cntDone:any;

nam:any;
todoContent:string;
tantouPerson:string;
kihyouPerson:string;
draftDate:Date;
flg:any;

  constructor(private todoService:TodoService,public dialog: MatDialog) { }

  ngOnInit(){
    this.message = this.todoService.test();
    this.inputTodo = new FormGroup({
      nam:new FormControl(),
      todoContent: new FormControl(''),
      tantouPerson: new FormControl(''),
      kihyouPerson: new FormControl(''),
      draftDate: new FormControl(''),
      flg: new FormControl(0)
    });
    // this.tempTodoService = this.todoService.contentTodo;
 }

 cntPanel(){
   this.cntRegist = 0;
   this.cntProgress = 0;
   this.cntDone = 0;

    for(let i = 0; i<this.todoService.contentTodo.length ;i++){
      if(this.todoService.contentTodo[i].flg == 1){
        this.cntRegist++;
      }else if(this.todoService.contentTodo[i].flg == 2){
        this.cntProgress++;
      }else if(this.todoService.contentTodo[i].flg == 3){
        this.cntDone++;
      }
    }

 }

 sortTogleChange(tg:string){
   switch(tg){
    case "all":
      this.flgRegist = true;
      this.flgProgress = true;
      this.flgDone = true;
      break;
    case "regist":
      this.flgRegist = true;
      this.flgProgress = false;
      this.flgDone = false;
      break;
    case "progress":
      this.flgRegist = false;
      this.flgProgress = true;
      this.flgDone = false;
      break;
    case "done":
      this.flgRegist = false;
      this.flgProgress = false;
      this.flgDone = true;
      break;
    default:
      break;
  }
 }

 getContent(){
    this.cntPanel();
    return this.todoService.contentTodo;
  }

  sortChangeIf(swList:any){

    switch(swList){

     case 1:
       return this.flgRegist;
       break;
     case 2:
       return this.flgProgress;
       break;
     case 3:
       return this.flgDone;
       break;
     default:
       break;
   }
 }

  getpanelColor(flg:any){

    switch(flg){
      case 1:
        this.panelColor = "regist";
      break;    
      case 2:
        this.panelColor = "progress";
      break;
      case 3:
        this.panelColor = "done";
      break;
      default:
        this.panelColor = "";  
      break;
    }

    return this.panelColor;
  }

  openEditDialog(nam:any,todoContent:string,tantouPerson:string,kihyouPerson:string,draftDate:Date,flg:any): void {
    const dialogRef = this.dialog.open(TodoDialogComponent, {  
      width:'80%',
      data: {
        nam: nam,
        todoContent: todoContent,
        tantouPerson: tantouPerson, 
        kihyouPerson: kihyouPerson, 
        draftDate: draftDate, 
        flg: flg,
        title:'更新フォーム'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
  
    });
  }

  openDeleteDialog(nam:any,todoContent:string,tantouPerson:string,kihyouPerson:string,draftDate:Date,flg:any): void {
    const dialogRef = this.dialog.open(TodoDialogComponent, {  
      width:'80%',
      data: {
        nam: nam,
        todoContent: todoContent,
        tantouPerson: tantouPerson, 
        kihyouPerson: kihyouPerson, 
        draftDate: draftDate, 
        flg: flg,
        title:'削除フォーム'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
  
    });
  }

  onSubmitDialog():void{
    const dialogRef = this.dialog.open(TodoDialogComponent, { 
      width:'80%',
      data:{
        nam: this.nam, 
        todoContent: this.todoContent, 
        tantouPerson: this.tantouPerson, 
        kihyouPerson: this.kihyouPerson, 
        draftDate: this.draftDate, 
        flg: this.flg,
        title:'登録フォーム'
      }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
   
    });

  }


}

