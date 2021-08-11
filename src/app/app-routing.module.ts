import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AddStudentComponent } from './components/add-student/add-student.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { StatisticsComponent } from './components/statistics/statistics.component';
import { StudentComponent } from './components/student/student.component';
import { SubjectComponent } from './components/subject/subject.component';
import { TeacherComponent } from './components/teacher/teacher.component';

const routes: Routes = [
  { path: '', component: StudentComponent },
  { path: 'student', component: StudentComponent },
  { path: 'statistics', component: StatisticsComponent },
  { path: 'subjects', component: SubjectComponent },
  { path: 'add-new-student', component: AddStudentComponent },
  { path: 'teacher', component: TeacherComponent },
  { path: '**', component: PageNotFoundComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
export const components = [StudentComponent,
  TeacherComponent, SubjectComponent, StatisticsComponent,
  AddStudentComponent, PageNotFoundComponent,]
