import { Component, OnInit, Input,Output,EventEmitter} from '@angular/core';
import { MycheckService } from '../mycheck.service';
import { ActivatedRoute } from '@angular/router';
import { JsonPipe } from '@angular/common';
import { FormControl, Form } from '@angular/forms';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
@Input() _content:string[];
@Input() content:string[];
@Output() action = new EventEmitter<MouseEvent>();
  constructor(private service:MycheckService, private route: ActivatedRoute) {
    this.content = [];
    service.push('message data');
   }
input:FormControl;
message:string;

  ngOnInit() {
   
    this.content.push(this.service.hello());
    this.service.push('params:'+
    JSON.stringify(this.route.snapshot.paramMap));
    //this.content = this.service.list;
    this.input = new FormControl('');
    this.message = 'mydata list.'

  }

  getData(){
    return this.service.data1;
  }

  getList(){
    return this.service.list;
  }

  @Input()
  // set content(msgs:string){
  //   this._content = msgs.split(',');
  // }

  // get content(){
  //   return this._content.join(',');
  // }

  doClick(){
    this._content.pop();
  }
  doAction(event){
  }

  doAction1(){
    let n = parseInt(this.input.value);
    let p = this.service.get(n);
    this.message = JSON.stringify(p);
  }
  push(item:string){
    this.content.push(item);

  }
  pop(){
    this.content.pop();
  }

}
