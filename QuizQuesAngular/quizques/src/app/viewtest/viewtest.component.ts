import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Test } from 'src/models/test';
import { TestService } from '../services/testservice';

@Component({
  selector: 'app-viewtest',
  templateUrl: './viewtest.component.html',
  styleUrls: ['./viewtest.component.scss']
})
export class ViewtestComponent implements OnInit {

  testId: number;
  testArr: Test [] = [];
  testSelected: Test;
  constructor(private actRoute: ActivatedRoute, private testService: TestService) {

    this.testId = this.actRoute.snapshot.params.id;
    console.log(`Test ID Passed is :: ${this.testId}`);

  }

  ngOnInit(): void {

    this.testArr = this.testService.getTests();
    this.testArr.forEach(singletest => {
      if (singletest.id == this.testId){
        this.testSelected = singletest;
      }
    })
  }

}
