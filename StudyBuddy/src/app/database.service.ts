import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
const httpOptions = {
  headers: new HttpHeaders({ "Content-Type": "application/json" }),
};

@Injectable({
  providedIn: 'root'
})
export class DatabaseService {

  constructor(private http: HttpClient) {}

  addTask(t: any) {
    return this.http.post("/add-task", t, httpOptions);
  }

  getAllTasks() {
    return this.http.get("/to-do-list");
  }

}
