import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";


@Component({
  selector: 'app-add-edit-user',
  templateUrl: './add-edit-user.component.html',
  styleUrls: ['./add-edit-user.component.css']
})
export class AddEditUserComponent implements OnInit {

  constructor(private service:SharedService, public formBuilder: FormBuilder) { }

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

  designtionList:any=[];
  userForm: any;

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
    this.LastModificationDate= this.dep.LastModificationDate;
    

    this.service.getDesignationList().subscribe(data=>{
      this.designtionList=data;
    });

    this.userForm = this.formBuilder.group({
      LastName: ['', [Validators.required, Validators.minLength(250)]],
      FirstName: ['', [Validators.required, Validators.minLength(250)]],
      DesignationID: ['', [Validators.required, Validators.minLength(10)]],
      Email: ['', [Validators.required, Validators.minLength(250)]],
      UserName: ['', [Validators.required, Validators.minLength(250)]],
      Password: ['', [Validators.required, Validators.minLength(20)]],
      Address: ['', [Validators.required, Validators.minLength(250)]],
      DOB: ['', [Validators.required, Validators.minLength(20)]],

    });
  }
 //get validation form
    get getControl(){
      return this.userForm.controls;
    }
  addUser(){
    var val = {
      UserID:this.UserID,
      LastName:this.LastName,
      FirstName:this.FirstName,
      DesignationID:this.DesignationID,
      Email:this.Email,
      UserName:this.UserName,
      Password:this.Password,
      Address:this.Address,
      DOB:this.DOB
    };
    this.service.addUser(val
      ).subscribe(res=>{
      alert(res.toString());
    });
  }


  updateUser(){
    var val = {
      UserID:this.UserID,
      LastName:this.LastName,
      FirstName:this.FirstName,
      DesignationID:this.DesignationID,
      Email:this.Email,
      UserName:this.UserName,
      Password:this.Password,
      Address:this.Address,
      DOB:this.DOB,
      CreatedDate:this.CreatedDate,
      LastModificationDate:this.LastModificationDate
    };
    this.service.updateUser(val).subscribe(res=>{
    alert(res.toString());
    });
  }

  // deleteUser(){
  //   var val={UserID:this.UserID,}
  //   this.service.deleteUser(val).subscribe(res=>{
  //     alert(res.toString());
  //   });
  // }
     
  // refreshUserList(){
  //   this.service.getUserList().subscribe(data=>{
  //     this.UserList=data;
  //   });
  // }

}
