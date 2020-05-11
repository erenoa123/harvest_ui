import { Component } from '@angular/core';
import {Router, NavigationStart} from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular-app';
  message = '';
  visible:boolean;

  constructor(private router:Router){
    router.events.subscribe(event => {
      if(event instanceof NavigationStart){
        this.navigate(event);
      }
    });
  }

  ngOnInit(){
    this.visible = true;
  }

  navigate(event){
    this.message = event.url;
  }

  doClick(){
    this.router.navigate(['']);
  }

  showList(){
    this.visible = !this.visible;
  }

}
