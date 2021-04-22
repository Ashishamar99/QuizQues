import { Injectable } from "@angular/core";
import { Test } from "src/models/test";

@Injectable()

export class TestService{
    
    static arrTests: Test[] = [];
    
    constructor() { 
        TestService.arrTests = [
        new Test(1, 'Python', 20, 10),
        new Test(2, 'JS', 10, 5),
        new Test(3, 'C++', 25, 25)
        ];
    }

    getTests(){
        return TestService.arrTests;
    }

    getLatestTest(){
        return TestService.arrTests[TestService.arrTests.length-1];
    }

    addTest(data: Test){
        TestService.arrTests.push(data);
        console.log('Resulting Test List = ', TestService.arrTests);
    }

    updateTest(data: Test){
        TestService.arrTests.forEach(t => {
            let vid = data.id;
            if(t.id == vid){
                t.testName = data.testName;
                t.marks = data.marks;
                t.noOfQues = data.noOfQues;
            }

        });
    }
}