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
    testService: TestService;
    @Output() addNotificationCount: EventEmitter<number>;

    testForm = this.formBuilder.group({
        id: 0,
        testName: ['', Validators.required],
        marks: 0,
        noOfQues: 0
        });

    constructor(testService: TestService, private formBuilder: FormBuilder) {
        this.testService = testService; 
        
        this.addNotificationCount = new EventEmitter<number>();
        
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

    onSubmit(){
        let valSubmitted = this.testForm.value;
        console.warn('Test details have been submitted', valSubmitted);
        console.log('Test Name Required Check ' + this.testForm.hasError('required', 'testName'));
    
        let arrLastId = this.testArr.reverse()[0].id + 1;
        this.testArr.reverse();
        let t = new Test(arrLastId, valSubmitted.testName, valSubmitted.marks, valSubmitted.noOfQues);
        this.testArr.push(t);
        console.log('New testArr = ', this.testArr)
    
        this.testForm.reset();
    }

    onChangeType(event, id){
        console.log(id);
    }
}