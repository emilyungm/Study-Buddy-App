import { Component } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrls: ['./add-task.component.css']
})
export class AddTaskComponent {

  name: string = "";
  unit: string = "";
  dueDate: Date = new Date();
  type: String = "";
  progress: number = 0;
  weighting: number = 0;

  constructor(private dbService: DatabaseService, private router: Router) {}

  saveTask() {
    let taskObj = {
      name: this.name,
      unit: this.unit,
      dueDate: this.dueDate,
      type: this.type,
      progress: this.progress,
      weighting: this.weighting
    };
    this.dbService.addTask(taskObj).subscribe({
      next:(result)=> {this.router.navigate(["/to-do-list"])},
      error:(error)=>{this.router.navigate(["/invalid-data"])}
    })
  }
}
