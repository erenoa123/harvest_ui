import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import{RouterModule,Routes} from '@angular/router';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatExpansionModule} from '@angular/material/expansion';
import {MatCardModule} from '@angular/material/card';
import {MatDialogModule} from '@angular/material/dialog';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello/hello.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { NavbarComponent } from './navbar/navbar.component';
import { MessageComponent } from './message/message.component';
import { MystyleDirective } from './mystyle.directive';
import { MycheckService } from './mycheck.service';
import { from } from 'rxjs';
import {HttpClientModule} from '@angular/common/http';
import { TodoComponent } from './todo/todo.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialComponent } from './material/material.component';
import { TodoDialogComponent } from './todo-dialog/todo-dialog.component'



const routes:Routes = [
  {path: '', component: TodoComponent},
  {path: 'hello', component: HelloComponent},
  {path: 'msg/:id', component: MessageComponent},
  {path: 'todo', component: TodoComponent},
  {path: 'material', component: MaterialComponent}
]

@NgModule({
  declarations: [
    AppComponent,
    HelloComponent,
    SidebarComponent,
    NavbarComponent,
    MessageComponent,
    MystyleDirective,
    TodoComponent,
    MaterialComponent,
    TodoDialogComponent
  ],
  entryComponents:[
    TodoDialogComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      routes,
      {enableTracing: true}
    ),
    HttpClientModule,
    BrowserAnimationsModule,
    MatButtonModule,
    MatIconModule,
    MatToolbarModule,
    MatDividerModule,
    MatSidenavModule,
    MatExpansionModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatGridListModule
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
