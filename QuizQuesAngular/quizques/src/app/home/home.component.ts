import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  // Declare Variables Here! and initialize them in the constructor. If you want to initialize them here, use normal variable declaration.

  constructor() { }

  ngOnInit(): void {

    localStorage.setItem('usertype', 'user');
    console.log('This will be run each time home component is loaded.');
  }

}
