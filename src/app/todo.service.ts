import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

class ShareTodo{
  nam:number;
  todoContent:string;
  tantouPerson:string;
  kihyouPerson:string;
  draftDate:Date;
  flg:number;
}

@Injectable({
  providedIn: 'root'
})
export class TodoService {
private shareTodo:ShareTodo[] =[];
  constructor(private client:HttpClient) {
    this.client.get('https://harvestsharet0d0.herokuapp.com/Rest/sharetodo/all')
    .subscribe((result:ShareTodo[])=>{
      this.shareTodo = result;
    });
   }

  get contentTodo(){
    //console.log(JSON.stringify(this.shareTodo))
    return this.shareTodo;
  } 
  test(){
    return 'ready complitely';
  }
}
