import { Component } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { EventEmitter, Output } from '@angular/core';


@Component({
  selector: 'app-add-to-do',
  templateUrl: './add-to-do.component.html',
  styleUrls: ['./add-to-do.component.css']
})
export class AddToDoComponent {
  todoTitle: string = '';
  todoDescription: string = '';
  currentDateTime: string = new Date().toLocaleString(); 

  constructor(public dialogRef: MatDialogRef<AddToDoComponent>) {
    const now = new Date();
    this.currentDateTime = now.toLocaleString();
  }

  // Close the dialog and pass the data back
  // onAddTodo(): void {
  //   this.dialogRef.close(this.todoTitle);
  // }
  

  // Emit the data to the parent component
  @Output() addTodo = new EventEmitter<{ title: string, description: string, date: string }>();


  onAddTodo() {
    if (this.todoTitle && this.todoDescription) {
      const newTodo = {
        title: this.todoTitle,
        description: this.todoDescription,
        date: this.currentDateTime
      };
      console.log('To-Do Added:', newTodo);  // For debugging, ensure data is correct
      this.dialogRef.close(newTodo);  // Pass the data back and close the dialog
    }
  }

  
  onCancel(): void {
    this.dialogRef.close();
  }
}
