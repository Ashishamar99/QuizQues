import { Component, OnInit } from '@angular/core';
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
  }

  ngOnInit(): void {
    this.getAllTests();
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
    console.warn('Test details have been submitted', this.subjectForm.value);
    this.subjectForm.reset();
  }

}
