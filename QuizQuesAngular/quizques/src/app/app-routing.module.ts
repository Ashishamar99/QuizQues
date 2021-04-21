import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { FacultyGuard } from './common/facultyguard';
import { QuizGuard } from './common/quizguard';
import { StudentGuard } from './common/studentguard';
import { DefaulthomeComponent } from './defaulthome/defaulthome.component';
import { FacultyComponent } from './faculty/faculty.component';
import { QuestionComponent } from './question/question.component';
import { StudentComponent } from './student/student.component';
import { TestComponent } from './test/test.component';
import { UserComponent } from './user/user.component';
import { ViewtestComponent } from './viewtest/viewtest.component';

const routes: Routes = [
  {path: '', component: DefaulthomeComponent},
  {path: 'tests', component: TestComponent},
  {path: 'user', component: UserComponent},
  {path: 'faculty', component: FacultyComponent, canActivate: [FacultyGuard]},
  {path: 'question', component: QuestionComponent},
  {path: 'admin', component: AdminComponent, canActivate: [QuizGuard, FacultyGuard, StudentGuard]},
  {path: 'student', component: StudentComponent, canActivate: [StudentGuard]},
  {path: 'viewtest/:id', component: ViewtestComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
