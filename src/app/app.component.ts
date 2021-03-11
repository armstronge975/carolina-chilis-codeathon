import { Component, OnInit } from '@angular/core';
import { APIService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'codeathon-app';

  constructor(private api : APIService) {}

  ngOnInit() {
    this.api.getTestData().subscribe(res => {
      // Populate button text using API response
      let buttons = document.querySelectorAll('.teammate')
      buttons.forEach((btn, index) => {
        btn.textContent = res.data[index].employee_name
      })
    })
  }
}
