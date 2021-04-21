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
      DOB: "",
      CreatedDate: "",
      LastModificationDate: ""
    }
    this.ModalTitle="Add User";
    this.ActivateAddEditDepComp=true;
  }


}

