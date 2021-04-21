import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  readonly APIUrl = 'https://localhost:44329/api';
  constructor(private http: HttpClient) {}

  //Designation End points
  getDesignationList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Designation');
  }

  addDesignation(val: any) {
    return this.http.post(this.APIUrl + '/Designation', val);
  }

  updateDesignation(val: any) {
    return this.http.put(this.APIUrl + '/Designation', val);
  }
  deleteDesignation(val: any) {
    return this.http.delete(this.APIUrl + '/Designation/' + val);
  }

  //User End points
  getUserList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Users');
  }

  addUser(val: any) {
    return this.http.post(this.APIUrl + '/Users', val);
  }

  updateUser(val: any) {
    return this.http.put(this.APIUrl + '/Users', val);
  }
}
