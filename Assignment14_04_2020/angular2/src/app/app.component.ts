import { Component } from '@angular/core';
import {HttpClient} from '@angular/common/http'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'restintegration';
//object to save the response
  myresponse:any;

  //url to fetch data from spring
APP_URL="http://localhost:1140";

constructor(private _http:HttpClient){}
getAllStudents() {
    
  this._http.get(this.APP_URL + '/student').subscribe(
    data => {
      this.myresponse = data;
    },
    error => {
      console.log('Error occured', error);
    }
  );
}

  
}