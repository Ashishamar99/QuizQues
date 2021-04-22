import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TestComponent } from './test/test.component';
import { StudentComponent } from './student/student.component';
import { FacultyComponent } from './faculty/faculty.component';
import { UserComponent } from './user/user.component';
import { QuestionComponent } from './question/question.component';
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { ContentComponent } from './content/content.component';
import { DefaulthomeComponent } from './defaulthome/defaulthome.component';
import { AdminComponent } from './admin/admin.component';
import { QuizGuard } from './common/quizguard';
import { StudentGuard } from './common/studentguard';
import { FacultyGuard } from './common/facultyguard';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TestService } from './services/testservice';
import { ViewtestComponent } from './viewtest/viewtest.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatTableModule } from '@angular/material/table';

@NgModule({
  declarations: [
    AppComponent,
    TestComponent,
    StudentComponent,
    FacultyComponent,
    UserComponent,
    QuestionComponent,
    HomeComponent,
    BannerComponent,
    SidebarComponent,
    ContentComponent,
    DefaulthomeComponent,
    AdminComponent,
    ViewtestComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    MatSliderModule,
    MatTableModule
  ],
  providers: [QuizGuard, StudentGuard, FacultyGuard, TestService],
  bootstrap: [AppComponent]
})
export class AppModule { }
