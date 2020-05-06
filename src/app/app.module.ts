import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import{RouterModule,Routes} from '@angular/router';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MessageComponent } from './message/message.component';
import { MystyleDirective } from './mystyle.directive';
import { MycheckService } from './mycheck.service';
import { from } from 'rxjs';
import {HttpClientModule} from '@angular/common/http';
import { TodoComponent } from './todo/todo.component'

const routes:Routes = [
  {path: 'hello', component: HelloComponent},
  {path: 'msg/:id', component: MessageComponent},
  {path: 'todo', component: TodoComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    SidebarComponent,
    NavbarComponent,
    MessageComponent,
    MystyleDirective,
    TodoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      routes,
      {enableTracing: true}
    ),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent,SidebarComponent,NavbarComponent]
})
export class AppModule { 

  constructor(private service:MycheckService){
    service.name = 'hanako';
    service.push("taro");
    service.push("hanako");
    service.push("sachiko");
  }

}
