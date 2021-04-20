import { Component, OnInit } from '@angular/core';
import { EventEmitter } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  ee: EventEmitter <string>;
  //Declaring EventEmitter of type string

  // Declare Variables Here! and initialize them in the constructor. If you want to initialize them here, use normal variable declaration.

  constructor() { 
    this.ee = new EventEmitter<string>();

    this.ee.subscribe((name: string) => {
      console.log(`Hello ${name}`);
    })
  }

  msg = 'Message From Home';
  msgArr = ['one', 'two', 'three'];
  
  ngOnInit(): void {

    localStorage.setItem('usertype', 'user');
    console.log('This will be run each time home component is loaded.');
  }

  respondToEvent(){
    this.ee.emit('John 1');
    this.ee.emit('John 2');
    this.ee.emit('John 3');
  }

}
