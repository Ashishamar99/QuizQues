import { Component, OnInit } from '@angular/core';
import { Test } from 'src/models/test';

@Component({
  selector: 'app-defaulthome',
  templateUrl: './defaulthome.component.html',
  styleUrls: ['./defaulthome.component.scss']
})
export class DefaulthomeComponent implements OnInit {

  testNames: string[] = ['Python', 'JS', 'C++']; //Another way of initialising vars.
  testNamesList = ['Python', 'JS', 'C++'];
  greeting: string;
  arrTest: Test[] = [];
  
  constructor() { 
    this.greeting = 'Hello from the other side';
    this.arrTest = [
      new Test(1, 'Python', 20, 10),
      new Test(2, 'JS', 10, 5),
      new Test(3, 'C++', 25, 25)
    ];
  }

  ngOnInit(): void {
  }

}
