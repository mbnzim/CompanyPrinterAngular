import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';


@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() dep:any;
  UserID:string="";
  LastName:string="" ;
  FirstName:string= "";
  DesignationID:string= "";
  Email:string= "";
  UserName:string= "";
  Password:string= "";
  Address:string = "";
  DOB:string= "";
  CreatedDate:string= "";
  LastModificationDate:string="";

  ngOnInit(): void {
    this.UserID = this.dep.UserID;
    this.LastName = this.dep.LastName;
    this.FirstName = this.dep.FirstName;
    this.DesignationID = this.dep.DesignationID;
    this.Email = this.dep.Email;
    this.UserName = this.dep.UserName;
    this.Password = this.dep.Password;
    this.Address = this.dep.Address;
    this.DOB = this.dep.DOB;
    this.CreatedDate = this.dep.CreatedDate;
    this.LastModificationDate = this.dep.LastModificationDate;
  }
  addUser(){
    var val = {
      UserID:this.UserID,
      LastName:this.LastName,
      FirstName:this.FirstName,
      // DesignationID:this.DesignationID,
      // Email:this.Email,
      // UserName:this.UserName,
      // Password:this.Password,
      // Address:this.Address,
      //DOB:this.DOB,
      // CreatedDate:this.CreatedDate,
      // LastModificationDate:this.LastModificationDate,
      // LastName: this.dep.LastName,
      // FirstName: this.dep.FirstName,
      DesignationID: 1,
      Email: "testing@printers.com",
      UserName: "tesing2",
      Password: "123",
      Address: "147 Ohlange Inanda",
      DOB: "2020-10-11T00:00:00",
      CreatedDate: "2021-04-09T09:39:12",
      LastModificationDate: "2021-04-09T12:02:00.353"
    };
    this.service.addUser(val
      ).subscribe(res=>{
      alert(res.toString());
    });
  }
}
