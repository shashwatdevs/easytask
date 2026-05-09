import { Component, computed, Input, signal, input, Output, EventEmitter, output } from '@angular/core';
import { DUMMY_USERS } from '../dummy-users';
import { required } from '@angular/forms/signals';
import { User } from './user.model';

// const randomIndex = Math.floor(Math.random()* DUMMY_USERS.length);
@Component({
  selector: 'app-user',
  imports: [],
  standalone: true,
  templateUrl: './user.component.html',
  styleUrl: './user.component.css',
})
export class UserComponent {

  // @Input({required:true}) id!: string;
  // @Input({required:true}) avatar!: string;
  // @Input({required:true}) name!: string;

   @Input({required:true}) user!: User;
   @Input({required:true}) selected!: boolean;

  @Output() select = new EventEmitter<string>();

  // select = output<string>(); 

  get imagePath(){
    return 'assets/users/' + this.user.avatar;
  }

  onSelectUser(){
    this.select.emit(this.user.id);
  }
}
