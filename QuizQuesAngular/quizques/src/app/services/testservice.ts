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
}