import { Component, EventEmitter, inject, Input, Output } from '@angular/core';
import { TaskType } from './task.model';
// import { CardComponent } from "../../shared/card/card.component";
// import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone:false,
  // imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {

  private tasksService = inject(TasksService);

  @Input({ required: true }) task!: TaskType;
  // @Output() complete = new EventEmitter<string>();

  onCompletetTask() {
    // this.complete.emit(this.task.id);
    this.tasksService.removeTask(this.task.id);
  }

}
