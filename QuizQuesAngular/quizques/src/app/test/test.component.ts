import { Component, OnInit, Output } from '@angular/core';
import { EventEmitter } from '@angular/core';
import { FormControl, FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Test } from 'src/models/test';
import { TestService } from '../services/testservice';

export interface TestElement {
    id: number;
    name: string;
    noOfQues: number;
    marks: number;
}

const ELEMENT_DATA: TestElement[] = [
    {id: 1, name: 'Python', marks: 20, noOfQues: 10},
    {id: 2, name: 'JS', marks: 10, noOfQues: 5},
    {id: 3, name: 'C++', marks: 25, noOfQues: 25}
];


@Component({
    selector: 'app-test',
    templateUrl: './test.component.html',
    styleUrls: ['./test.component.scss']
})


export class TestComponent implements OnInit {

    testArr: Test[] = [];
    testService: TestService;
    @Output() addNotificationCount: EventEmitter<number>;
    disArr: Test[] =[];

    displayedColumns: string[] = ['id', 'name', 'marks', 'noOfQues'];
    dataSource = ELEMENT_DATA;

    testForm = this.formBuilder.group({
        id: 0,
        testName: ['', Validators.required],
        marks: 0,
        noOfQues: 0
        });

    subjectForm = this.formBuilder.group({
        subid: 0,
        subjectName: '',
    });

    constructor(testService: TestService, private formBuilder: FormBuilder) {
        this.testService = testService; 
        
        this.addNotificationCount = new EventEmitter<number>();
        
    }
        
    ngOnInit(): void {
        this.getAllTests();
    }

    onSubjectSubmit()
    {
        let subjectValSubmitted = this.subjectForm.value.subjectName;
        console.warn('Subject details have been submitted', subjectValSubmitted);

        let arrLastId = this.testArr.reverse()[0].id + 1;
        this.testArr.reverse();

        let t = new Test(arrLastId, subjectValSubmitted, 0, 0);
        
        this.testService.addTest(t); // Adding new test in the testService.
    
        this.subjectForm.reset();
    }

    //adduser,updateuser,getuser,inactivateuser.
    
    confirmAction(updatebtn, addbtn, updateAction, addAction){

        let isUpdateChecked = updatebtn.checked;
        let isAddChecked = addbtn.checked;

        if(isAddChecked){
            updateAction.disabled = true;
            addAction.disabled = false;
        }
        else if(isUpdateChecked){
            addAction.disabled = true;
            updateAction.disabled = false;
        }
        else{
            console.log('Will never fall here');
        }
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
        //console.log('Test Name Required Check ' + this.testForm.hasError('required', 'testName'));
    
        let arrLastId = this.testArr.reverse()[0].id + 1;
        this.testArr.reverse();
        let t = new Test(arrLastId, valSubmitted.testName, valSubmitted.marks, valSubmitted.noOfQues);
        // this.testArr.push(t);
        // console.log('New testArr = ', this.testArr) //Adding new test in temporary array.
        
        this.testService.addTest(t); // Adding new test in the testService.
    
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

    updateTest(idSelector,testNameInp,marksInp,noOfQuesInp,statusSelector){

        let passedID = idSelector.options[idSelector.selectedIndex].value;
        let passedtestNameInp = testNameInp.value;
        let passedmarksInp = parseInt(marksInp.value);
        let passednoOfQuesInp = parseInt(noOfQuesInp.value);
        let passedStatusSelector = statusSelector.options[statusSelector.selectedIndex].value;

        //Values from the status selector are in the form of strings. We will assign boolean values.

        if(passedStatusSelector == "true"){
            passedStatusSelector = true;
        }
        else{
            passedStatusSelector = false;
        }
        

        console.log(`New values = ${passedID}, ${passedtestNameInp}, ${passedmarksInp}, ${passednoOfQuesInp}, ${passedStatusSelector}`)
        let RefTestArr = this.testArr;
        RefTestArr.forEach(singleTest => {

            if(singleTest.id == Number(passedID.split(':')[0])){

                singleTest.testName = passedtestNameInp;
                singleTest.marks = passedmarksInp;
                singleTest.noOfQues = passednoOfQuesInp;
                singleTest.activeStatus = passedStatusSelector;
            }
        });

        console.log('Updated Values = ', this.testArr);

        let t = new Test(passedID, passedtestNameInp, passedmarksInp, passednoOfQuesInp);
        t.activeStatus = passedStatusSelector;
        this.testService.updateTest(t);

        this.updateArr();
    }

    updateArr(){

        this.testArr.forEach(element => {
            if(element.activeStatus == false){
                this.disArr.push(element);
                
                this.testArr = this.testArr.filter(function(value, index, arr){ 
                    return value != element;
                });
            }
        });

        console.log(this.disArr);
    }

    checkMarks(mrks){
        return mrks > 10;
    }

}