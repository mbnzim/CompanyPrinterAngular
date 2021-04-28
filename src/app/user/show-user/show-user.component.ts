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
  PrinterNameFilter: string = "";
  PrinterListWithoutFilter: any=[];

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
      this.PrinterListWithoutFilter=data;
    });
    this.PrinterNameFilter="";
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


  deleteClick(item:any){
    if(confirm('Are you sure??')){
      this.service.deleteUser(item.UserID).subscribe(data=>{
        alert(data.toString());
        this.refreshUserList();
      })
    }
  }


  Filterfn() {
    var PrinterNameFilter = this.PrinterNameFilter;
 
    this.UserList = this.PrinterListWithoutFilter.filter(function (el:any) {
      return el.LastName.toString().toLowerCase().includes(PrinterNameFilter.toString().trim().toLowerCase())
    });
  }
 
  sortResult(prop: any, asc: any) {
    this.UserList = this.PrinterListWithoutFilter.sort(function (a:any, b:any) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : (a[prop] < b[prop] ? -1 : 0)
      }
      else {
        return (b[prop] > a[prop]) ? 1 : (b[prop] < a[prop] ? -1 : 0)
      }
    });
  }


  // deleteClick(item: any){
  //   this.dep=item;
  //   this.ModalTitle="Update User";
  //   this.ActivateAddEditDepComp=true;
  // }

  // deleteClick(item:any){
  //   if(confirm('Are you sure??')){
  //     this.service.deleteDesignation(item.DesignationID).subscribe(data=>{
  //       alert(data.toString());
  //       this.refreshDepList();
  //     })
  //   }
  // }
  
  }

