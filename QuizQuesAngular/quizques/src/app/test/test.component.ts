import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Test } from 'src/models/test';
import { TestService } from '../services/testservice';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  testArr: Test[] = [];
  testService: TestService; //testService is the variable we use.
  @Output() addNotificationCount: EventEmitter<number>; //Step 1

  testForm = new FormGroup({
    id: new FormControl('Select a value'),
    testName: new FormControl(''),
    marks: new FormControl(0),
    noOfQues: new FormControl(0)
  });

  subjectForm = new FormGroup({
    subjectName:  new FormControl(''),
    subjectMarks:  new FormControl(0),
    noOfQuesForSubject:  new FormControl(0)
  });
  
  constructor(testServiceParam: TestService) {
    this.testService = testServiceParam; 

    this.addNotificationCount = new EventEmitter<number>(); //Step 2
  }

  ngOnInit(): void {
    this.getAllTests();
  }

  addNotification(){                                   //Step 3 // Method to call and generate these notifications. //Step 4 in test.component.html
    this.addNotificationCount.emit(1);
  }

  getAllTests(){
    this.testArr = this.testService.getTests();
    console.log(this.testArr);
  }
  //Custom Methods !!!

  onSubmit(){
    console.warn('Test details have been submitted', this.testForm.value);
    this.testForm.reset();
  }

  onChangeType(event, id){
    //id=$event.target.value
    //console.log(event);
    console.log(id);
  }

  onSubjectSubmit(){
    console.warn('Subject details have been submitted', this.subjectForm.value);
    this.subjectForm.reset();
  }

}
