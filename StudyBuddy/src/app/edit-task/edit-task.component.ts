import { Component } from '@angular/core';
import { DatabaseService } from '../database.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-edit-task',
  templateUrl: './edit-task.component.html',
  styleUrls: ['./edit-task.component.css']
})
export class EditTaskComponent {

  task: any;
  newDueDate: Date = new Date();
  newProgress: number = 0;

  constructor(private dbService: DatabaseService, private router: ActivatedRoute) {}

  ngOnInit() {
    this.router.params.subscribe(params => {
      const id = params['taskID']; // 'taskID' should match the parameter name in your route configuration
      this.getTask(id); // calling the get event function to execute logic at backend
    });
  }

  getTask(id: string) {
    //call the getTask function from db service
    this.dbService.getTask(id).subscribe({
      next: (data: any) => {
        this.task = data.task;
      },
      error: (error) => {
        console.error('Error fetching task:', error); // error handling
      }
    });
  }

  updateTask() {
    let updatedTaskObj = {date: this.newDueDate, progress: this.newProgress};
    // this.dbService.editTask(updatedTaskObj).subscribe({
    //   next:(result)=> {
    //     this.onGetCategories();
    //     this.router.navigate(["/updatecategory"]);
    //   },
    //   error:(error)=>{this.router.navigate(["/invalid-data"])}
    // });
  }


}
