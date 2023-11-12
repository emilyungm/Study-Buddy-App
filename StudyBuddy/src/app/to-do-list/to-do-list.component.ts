import { Component } from '@angular/core';
import { DatabaseService } from '../database.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-to-do-list',
  templateUrl: './to-do-list.component.html',
  styleUrls: ['./to-do-list.component.css']
})
export class ToDoListComponent {

  tasks: any[] = [];

  constructor(private dbService: DatabaseService) {
    this.getRecords();
  }

  // need algorithm to order the tasks in importance
  getRecords() {
    this.dbService.getAllTasks().subscribe({
      next: (data: any) => {
        this.tasks = data;
      },
      error: (err) => { }
    })
  }
}
