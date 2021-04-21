import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-des',
  templateUrl: './show-des.component.html',
  styleUrls: ['./show-des.component.css']
})
export class ShowDesComponent implements OnInit {

  constructor(private service:SharedService) { }

  ModalTitle:string="";
  ActivateAddEditDepComp:boolean=false;
  dep:any; 
  DesigntionList:any=[];

  ngOnInit(): void {
    this.refreshDepList();
  }

  addClick(){
    this.dep={
      DesignationID:0,
      DesignationName:""
    }
    this.ModalTitle="Add Designation";
    this.ActivateAddEditDepComp=true;
  }
  
  editClick(item: any){
    this.dep=item;
    this.ModalTitle="Edit Designation";
    this.ActivateAddEditDepComp=true;
  }

  deleteClick(item:any){
    if(confirm('Are you sure??')){
      this.service.deleteDesignation(item.DesignationID).subscribe(data=>{
        alert(data.toString());
        this.refreshDepList();
      })
    }
  }
  
  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshDepList();
  }
   
  refreshDepList(){
    this.service.getDesignationList().subscribe(data=>{
      this.DesigntionList=data;
    });
  }

}
