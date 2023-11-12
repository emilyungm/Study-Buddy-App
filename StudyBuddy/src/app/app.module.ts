import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from "@angular/common/http";
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { GradesComponent } from './grades/grades.component';
import { CoursePlannerComponent } from './course-planner/course-planner.component';
import { SettingsComponent } from './settings/settings.component';
import { InvalidDataComponent } from './invalid-data/invalid-data.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CalendarComponent } from './calendar/calendar.component';
import { FormsModule } from '@angular/forms';
import { AddTaskComponent } from './add-task/add-task.component';
import { DatabaseService } from './database.service';
import { DatePipePipe } from './date-pipe.pipe';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ToDoListComponent,
    GradesComponent,
    CoursePlannerComponent,
    SettingsComponent,
    InvalidDataComponent,
    PageNotFoundComponent,
    CalendarComponent,
    AddTaskComponent,
    DatePipePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,

  ],
  providers: [DatabaseService],
  bootstrap: [AppComponent]
})
export class AppModule { }
