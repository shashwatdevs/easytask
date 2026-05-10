import { Component, EventEmitter, inject, Input, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewAddTask } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone:true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {

  // constructor(private tasksService: TasksService) { }
  private tasksService = inject(TasksService);

  @Input({required:true}) userId!:string;

  @Output() cancle = new EventEmitter<void>();
  // @Output() add = new EventEmitter<NewAddTask>();

  enteredTitle = '';
  enteredDate = '';
  enteredSummary = '';

  onCancleOrBack() {
    this.cancle.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    }, this.userId);
        this.cancle.emit();
  }
  
}
