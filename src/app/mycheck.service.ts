import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

class MyData{
  data:string = '';
  list:Person[] = [];
}

class Person {
  name:string;
  mail:string;
  tel:string;
}

@Injectable({
  providedIn: 'root'
})
export class MycheckService {
  private _name:string;
  private data:string[];
  private mydata:MyData = new MyData();

  constructor(private client:HttpClient) {
    this.name='(no-name)';
    this.data = [];
    this.client.get('/assets/data.json').subscribe((result:MyData) =>{
      this.mydata = result;
    })
   }

   push(item:string){
     this.data.push(item);
   }

   pop(){
     this.data.pop();
   }

   get(n:number){
     this.data.pop();
     return this.mydata.list[n];
   }

   get size(){
     return this.list.length;
   }

   get json(){
     return JSON.stringify(this.data);
   }

   get list(){
     return this.mydata.list;
   }

   get data1(){
     return this.mydata.data;
   }

   get name(){
     return this._name;
   }

   set name(name:string){
     this._name=name;
   }

  hello(){
    return "Hello,"+this.name+"!!";
  }
}
