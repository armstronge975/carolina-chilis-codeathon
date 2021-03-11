import { Component, OnInit } from '@angular/core';
import { APIService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'CLT Hot Pepper';
  apiData = [];

  constructor(private api : APIService) {}

  ngOnInit() {
    this.api.getTestData().subscribe(res => {
      // To be used for dynamically populating button text
      this.apiData = res.data;
    })
  }
}
