import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http'
import { Observable } from 'rxjs';
import { Student } from './student';

@Injectable({
  providedIn: 'root'
})
export class StudentService {

 students:Student[]=[];
 
 constructor(private http:HttpClient) {}
 
 loaddate():Observable<any>
 {
   let url="http://localhost:1117/student";

   return this.http.get(url);
 }
 
 

 createNewStudent(student:Student):Observable<any>
 {
   let url="http://localhost:1117/student/new";

   return this.http.post(url,student,{responseType:'text'});
 }
}
//n g s student
//n g c viewstudent
//ng g class student