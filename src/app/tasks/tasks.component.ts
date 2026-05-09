import { Component, Input } from '@angular/core';
import { TaskComponent} from "./task/task.component";
import { NewTaskComponent } from './new-task/new-task.component';
import { DUMMY_TASKS } from '../dummy-tasks';
import { NewAddTask } from './task/task.model';

@Component({
  selector: 'app-tasks',
  imports: [TaskComponent, NewTaskComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {

  // @Input() name?:string;

  // Alternative syntax
  @Input({required:true}) name!: string;
  @Input({required:true}) userId! : string;

  isAddingTask = false;

  //  @Input({required:true}) user!:string;

  tasks = DUMMY_TASKS;

  get selectedUserTask(){
    return this.tasks.filter((task) => task.userId === this.userId);
  }

  onCompleteTask(id:string){
      this.tasks = this.tasks.filter((task)=> task.id!=id);
  }

  onStartAddTask(){
    this.isAddingTask = true;
  }

  onCancleAddTask(){
    this.isAddingTask = false;
  }

  onAddTask(taskData:NewAddTask){
    this.tasks.push({
      id: new Date().getTime().toString(),
      title:taskData.title,
      summary:taskData.summary,
      dueDate:taskData.date,
      userId:this.userId
    });
    this.isAddingTask = false;
  }
}
