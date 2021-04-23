import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-user',
  templateUrl: './show-user.component.html',
  styleUrls: ['./show-user.component.css']
})
export class ShowUserComponent implements OnInit {

  constructor(private service:SharedService) { }

  ModalTitle:string="";
  ActivateAddEditDepComp:boolean=false;
  dep:any; 
  UserList:any=[];
  designtionList:any=[];

  // this.DesigntionList=data;
  ngOnInit(): void {
    this.refreshUserList();
  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshUserList();
  }
   
  refreshUserList(){
    this.service.getUserList().subscribe(data=>{
      this.UserList=data;
    });
  }

  addClick(){
    this.dep={
      UserID:0,
      LastName: "",
      FirstName: "",
      DesignationID:"",
      Email: "",
      UserName: "",
      Password: "",
      Address: "",
      DOB: new Date(),
      CreatedDate: "",
      LastModificationDate: ""
    }
    this.ModalTitle="Add User";
    this.ActivateAddEditDepComp=true;
  }

  editClick(item: any){
    this.dep=item;
    this.ModalTitle="Update User";
    this.ActivateAddEditDepComp=true;
  }

  }

