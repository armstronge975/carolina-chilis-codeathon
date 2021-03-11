import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class APIService {

  constructor(private http: HttpClient) { }

  public getTestData() {
    this.http.get('http://dummy.restapiexample.com/api/v1/employees').subscribe(res => {
      console.log(res)
    })
  }
  
}
