import { Component, computed, Input, signal, input } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { required } from '@angular/forms/signals';

// const randomIndex = Math.floor(Math.random()* DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [],
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {

  @Input({required:true}) avatar!: string;
  @Input({required:true}) name!: string;

  get imagePath(){
    return 'assets/users/' + this.avatar;
  }

  onSelectUser(){

  }
}
