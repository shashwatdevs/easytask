import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewAddTask } from '../task/task.model';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {

  @Output() cancle = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewAddTask>();

  enteredTitle = '';
  enteredDate = '';
  enteredSummary = '';

  onCancleOrBack() {
    this.cancle.emit();
  }

  onSubmit() {
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    });
  }

}
