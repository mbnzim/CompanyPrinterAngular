import { Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { Observable } from 'rxjs';
import { Observable, of, Subject } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class SharedService {
  readonly APIUrl = 'https://localhost:44329/api';
  readonly rootUrl = 'https://localhost:44329';

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
    return this.http.put(this.APIUrl + '/Designation/Delete?id='+val,"");
  }

  //User End points
  getUserList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Users');
  }

  addUser(val: any):Observable<any[]> {
    return this.http.post<any>(this.APIUrl + '/Users', val);
  }

  updateUser(val: any):Observable<any[]> {
    return this.http.put<any>(this.APIUrl + '/Users', val);
  }

  deleteUser(val: any) {
    return this.http.put(this.APIUrl + '/Users/Delete?id='+val,"");
  }

    //Printer End points
    getPrinterList(): Observable<any[]> {
      return this.http.get<any>(this.APIUrl + '/Printer');
    }
  
    
    addPrinter(val: any) {
    return this.http.post(this.APIUrl + '/Printer', val);
  }

  
  updatePrinter(val: any):Observable<any[]> {
    return this.http.put<any>(this.APIUrl + '/Printer', val);
  }

    //PrinterMake End points
    getPrinterMakeList(): Observable<any[]> {
      return this.http.get<any>(this.APIUrl + '/PrinterMake');
    }
  
    
    addPrinterMake(val: any) {
    return this.http.post(this.APIUrl + '/PrinterMake', val);
  }

  
  updatePrinterMake(val: any):Observable<any[]> {
    return this.http.put<any>(this.APIUrl + '/PrinterMake', val);
  }

  deletePrinterMake(val: any) {
    return this.http.put(this.APIUrl + '/PrinterMake/Delete?id='+val,"");
  }

  //Document End points
  getDocumentList(): Observable<any[]> {
    return this.http.get<any>(this.APIUrl + '/Document');
  }

  
  addDocumentMake(val: any) {
  return this.http.post(this.APIUrl + '/Document', val);
}


updateDocumentMake(val: any):Observable<any[]> {
  return this.http.put<any>(this.APIUrl + '/Document', val);
}

userAuthentication(userName:any, password:any) {
  var data = "username=" + userName + "&password=" + password + "&grant_type=password";
  var reqHeader = new HttpHeaders({ 'Content-Type': 'application/x-www-urlencoded','No-Auth':'True' });
  return this.http.post(this.rootUrl + '/token', data, { headers: reqHeader });
}

}
