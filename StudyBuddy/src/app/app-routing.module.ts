import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { HomeComponent } from './home/home.component';
import { ToDoListComponent } from './to-do-list/to-do-list.component';
import { InvalidDataComponent } from './invalid-data/invalid-data.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { CalendarComponent } from './calendar/calendar.component';
import { GradesComponent } from './grades/grades.component';
import { CoursePlannerComponent } from './course-planner/course-planner.component';
import { SettingsComponent } from './settings/settings.component';
import { AddTaskComponent } from './add-task/add-task.component';

const routes: Routes = [

  { path: '', redirectTo: '/', pathMatch: 'full' },
  { path: '', component: HomeComponent },
  { path: 'add-task', component: AddTaskComponent},
  { path: 'to-do-list', component: ToDoListComponent},
  { path: 'calendar', component: CalendarComponent},
  { path: 'grades', component: GradesComponent},
  { path: 'course-planner', component: CoursePlannerComponent},
  { path: 'settings', component: SettingsComponent},

  //Routes for error page
  { path: 'invalid-data', component: InvalidDataComponent },
  { path: '**', component: PageNotFoundComponent },  // Wildcard route for a 404 page

];

@NgModule({
  imports: [RouterModule.forRoot(routes, {useHash: true}), FormsModule],
  exports: [RouterModule]  
})
export class AppRoutingModule { }
