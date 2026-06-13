import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {
  studentname: string = "";
  parentname: string = "";
  email: string = "";
  constructor(private http: HttpClient) {
  }
  save() {

    let bodyData = {
      "studentname": this.studentname,
      "parentname": this.parentname,

      "email": this.email,
    };
    this.http.post("http://localhost:8085/api/v1/employee/save", bodyData, { responseType: 'text' }).subscribe((resultData: any) => {
      console.log(resultData);
      alert(" Registered Successfully");
    });
  }
}

