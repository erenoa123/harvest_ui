import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello',
  templateUrl: './hello.component.html',
  styleUrls: ['./hello.component.css']
})
export class HelloComponent implements OnInit {
  title:string;
  message:string;
  now:Date;
  styleClass:string;
  count:number;
  input:string;

  constructor() { 
    setInterval(
      ()=>{
        this.now = new Date();
        this.styleClass = this.styleClass == 'red' ? '' : 'red';
        console.log(this.styleClass);
      }, 1000);

      this.input='';
    
  }

  ngOnInit(): void {
    this.title='Hello-app';
    this.message="this is My First Component!!";
    this.styleClass = 'red';
    this.count = 0;
  }

  today(){
    return new Date().toLocaleString();
  }

  doClick(){
    this.message = ++this.count + "回クリックしました。";
  }

  doType(val:string){
    this.input = val;
    this.message = 'you type: '+this.input;
  }

}
