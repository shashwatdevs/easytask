import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskType } from './task.model';

@Component({
  selector: 'app-task',
  imports: [],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css',
})
export class TaskComponent {

  @Input({ required: true }) task!: TaskType;
  @Output() complete = new EventEmitter<string>();

  onCompletetTask() {
    this.complete.emit(this.task.id);
  }
}
