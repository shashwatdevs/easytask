import { Component, EventEmitter, Input, Output } from '@angular/core';
import { TaskType } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';

@Component({
  selector: 'app-task',
  imports: [CardComponent, DatePipe],
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
