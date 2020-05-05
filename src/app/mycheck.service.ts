import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MycheckService {
  private _name:string;
  private data:string[];

  constructor() {
    this.name='(no-name)';
    this.data = [];
   }

   push(item:string){
     this.data.push(item);
   }

   pop(){
     this.data.pop();
   }

   get(n:number){
     this.data.pop();
   }

   get size(){
     return this.data.length;
   }

   get json(){
     return JSON.stringify(this.data);
   }

   get list(){
     return JSON.parse(JSON.stringify(this.data));
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
