import { Component, signal } from '@angular/core';
import { NgFor, NgIf } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { UserComponent } from './user/user.component';
import { DUMMY_USERS } from './dummy-users';
import { TasksComponent } from './tasks/tasks.component';
import { NgForOf } from "../../node_modules/@angular/common/types/_common_module-chunk";

@Component({
  selector: 'app-root',
  standalone:true,
  imports: [HeaderComponent, UserComponent, TasksComponent, NgFor, NgIf],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  
  protected readonly title = signal('easytask');

  users = DUMMY_USERS;

  selectedUserID?:string;

  get selectedUser(){
    return this.users.find((user)=>user.id === this.selectedUserID);
  }

  onSelectUser(id:string){
    this.selectedUserID = id;
  }
}
