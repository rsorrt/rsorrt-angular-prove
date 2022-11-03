import { Component, OnInit } from '@angular/core';

import { MyConstants } from './constants/constants'


@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})


export class AppComponent implements OnInit {

  baseUrlImg: string;

  constructor () {

    this.baseUrlImg = MyConstants.BASE_URL_IMG
    
  }

  ngOnInit(): void {
   
  }
  
}
