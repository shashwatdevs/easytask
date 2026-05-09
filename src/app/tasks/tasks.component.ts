import { Component, Input } from '@angular/core';
import { TaskComponent } from "./task/task.component";
import { DUMMY_TASKS } from '../dummy-tasks';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {

  // @Input() name?:string;

  // Alternative syntax
  @Input({required:true}) name!: string;
  @Input({required:true}) userId! : string;

  //  @Input({required:true}) user!:string;

  tasks = DUMMY_TASKS;

  get selectedUserTask(){
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id:string){
      this.tasks = this.tasks.filter((task)=> task.id!=id);
  }
}
