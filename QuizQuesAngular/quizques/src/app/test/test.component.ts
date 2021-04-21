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

    onChangeType(event, passedId){
        console.log(passedId);

        let RefTestArr = this.testArr;
        RefTestArr.forEach(testElement => {

            console.log('in for loop', testElement.id == Number(passedId.split(':')[0]), `testelementid = ${testElement.id}, passedid = ${Number(passedId.split(':')[0])}`);
            if(testElement.id == Number(passedId.split(':')[0])){

                this.testForm.get('testName').setValue(testElement.testName);
                this.testForm.get('marks').setValue(testElement.marks);
                this.testForm.get('noOfQues').setValue(testElement.noOfQues);
            }
        });
        console.log(this.testArr);
        
    }

    updateValues(idSelector,testNameInp,marksInp,noOfQuesInp){

        let passedID = idSelector.options[idSelector.selectedIndex].value;
        let passedtestNameInp = testNameInp.value;
        let passedmarksInp = parseInt(marksInp.value);
        let passednoOfQuesInp = parseInt(noOfQuesInp.value);

        console.log(`New values = ${passedID}, ${passedtestNameInp}, ${passedmarksInp}, ${passednoOfQuesInp}`)
        let RefTestArr = this.testArr;
        RefTestArr.forEach(singleTest => {

            if(singleTest.id == Number(passedID.split(':')[0])){

                singleTest.testName = passedtestNameInp;
                singleTest.marks = passedmarksInp;
                singleTest.noOfQues = passednoOfQuesInp;
            }
        });

        console.log('Updated Values = ', this.testArr);
    }

    checkMarks(mrks){
        return mrks > 10;
    }

}