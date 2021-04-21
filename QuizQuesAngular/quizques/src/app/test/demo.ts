import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
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

  // testForm = new FormGroup({
  //   id: new FormControl('Select a value'),
  //   testName: new FormControl(''),
  //   marks: new FormControl(0),
  //   noOfQues: new FormControl(0)
  // });

  
  //Let's Use A FORM BUILDER INSTEAD OF FORM GROUP AS THEY ARE MORE ECONOMICAL. WE WILL BE INJECTING THE FORM BUILDER IN THE CONSTRUCTOR SO AS TO LOAD IT WHENEVER WE WANT.
  testForm = this.formBuilder.group({
    id: 0,
    // testName: ['', Validators.compose([Validators.required, this.skuValidator])],
    testName: ['', Validators.required],
    marks: 0,
    noOfQues: 0
  });

  // subjectForm = new FormGroup({
  //   subjectName:  new FormControl(''),
  //   subjectMarks:  new FormControl(0),
  //   noOfQuesForSubject:  new FormControl(0)
  // });

  // subjectForm = this.formBuilder.group({
  //   subjectName: '',
  //   subjectMarks: 0,
  //   noOfQuesForSubject: 0

  // });

    //USING A FORM BUILDER FOR SUBJECT FORM AS WELL.
  
  constructor(testService: TestService, private formBuilder: FormBuilder) {
    this.testService = testService; 

    this.addNotificationCount = new EventEmitter<number>(); //Step 2
  }

  ngOnInit(): void {
    this.getAllTests();
  }

  addNotification(){
    this.addNotificationCount.emit(1);
  }

  getAllTests(){
    this.testArr = this.testService.getTests();
    console.log(this.testArr);
  }
  //Custom Methods !!!

  onSubmit(){
    let valSubmitted = this.testForm.value;
    console.warn('Test details have been submitted', valSubmitted);
    console.log('Test Name Required Check ' + this.testForm.hasError('required', 'testName'));

    let arrLastId = this.testArr.reverse()[0].id + 1;
    this.testArr.reverse();
    // console.log(`arrLastId = ${arrLastId}`, 'Test Array = ', this.testArr);
    let t = new Test(arrLastId, valSubmitted.testName, valSubmitted.marks, valSubmitted.noOfQues);
    this.testArr.push(t);
    console.log('New testArr = ', this.testArr)

    this.testForm.reset();
  }

  onChangeType(event, id){
    //id=$event.target.value
    //console.log(event);
    console.log(id);
  }

  // onSubjectSubmit(){
  //   console.warn('Subject details have been submitted', this.subjectForm.value);
  //   this.subjectForm.reset();
  // }
}