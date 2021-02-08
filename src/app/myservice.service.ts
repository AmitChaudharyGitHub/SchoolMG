
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { analyzeAndValidateNgModules } from '@angular/compiler';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MyserviceService {

  //baseUrl = 'https://localhost:44373/api/Employee/';
  baseUrl = 'https://localhost:44373/api/';

  constructor(private http: HttpClient) { }

  SaveRegistration(regdata) {
    return this.http.post(this.baseUrl + 'AddUser', regdata);
  }

  Login(regdata) {
    return this.http.post(this.baseUrl + 'Employee/Login', regdata);
  }
  //Cont: any='University/';
  // Get
  GetUniversity(search) {
    return this.http.get(this.baseUrl + 'University'+search)
  }
  GetUniversitywithu() {
    return this.http.get(this.baseUrl + 'University')
  }
  // GetUniversityBySearch(search) {
  //   return this.http.get(this.baseUrl + 'University'+ search)
  // }
  // GetById
  GetUniversityById(id) {
    return this.http.get(this.baseUrl + 'University/' + id)
  }
  // Add
  AddUniverSity(formData) {
    return this.http.post(this.baseUrl + 'University/', formData)
  }
  // Update
  UpdateUniversity(id, formData) {
    return this.http.put(this.baseUrl + 'University/' + id, formData)
  }

  DeleteUniversity(id) {
    return this.http.delete(this.baseUrl + 'University/' + id)
  }




}


