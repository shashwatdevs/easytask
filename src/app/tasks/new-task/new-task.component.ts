import { Component, EventEmitter, Output, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-new-task',
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css',
})
export class NewTaskComponent {

  @Output() cancle = new EventEmitter<void>();

  // enteredTitle = '';
  // enteredDate = '';
  // enteredSummary = '';
  enteredTitle = signal('');
  enteredDate = signal('');
  enteredSummary = signal('');


  onCancleOrBack(){
    this.cancle.emit();
  }

}
