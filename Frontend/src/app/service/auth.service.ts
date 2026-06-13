import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }
  apiurl = 'http://localhost:3000/user';
  Proceedregister(inputdata: any) {
    return this.http.post(this.apiurl, inputdata);
  }
  GetbyCode(email: any) {
    return this.http.get(this.apiurl);
  }
  //create by post
  postuser(data: any) {
    return this.http.post(this.apiurl, data).pipe(map((res: any) => {
      return res;
    }))
  }
  //get
  getuser() {
    return this.http.get(this.apiurl).pipe(map((res: any) => {
      return res;
    }))
  }
  //update
  updateuser(data: any, id: number) {
    return this.http.put(this.apiurl + "/" + id, data).pipe(map((res: any) => {
      return res;
    }))
  }
  //delete
  deleteuser(id: number) {
    return this.http.delete(this.apiurl + "/" + id).pipe(map((res) => {
      return res;
    }))
  }
  // GetAll(){
  //   return this.http.get(this.apiurl);
  // }
  // Updateuser(id:any,inputdata:any){
  //   return this.http.put(this.apiurl+'/'+id,inputdata);
  // }
  //************************profile********************************//
  apiPro = "http://localhost:3000/profile";

  postprofile(data: any) {
    return this.http.post(this.apiPro, data).pipe(map((res: any) => {
      return res;
    }));
  }
  getprofile() {
    return this.http.get(this.apiPro).pipe(map((res: any) => {
      return res;
    }))
  }
  updateprofile(data: any, id: number) {
    return this.http.put(this.apiPro + "/" + id, data).pipe(map((res: any) => {
      return res;
    }))
  }
  deleteprofile(id: number) {
    return this.http.delete(this.apiPro + "/" + id).pipe(map((res) => {
      return res;
    }))
  }
}