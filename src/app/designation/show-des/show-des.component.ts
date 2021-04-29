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
  totalRecords:number=0;
  page:any=1;

  DesignationNameFilter: string = "";
  DesignationListWithoutFilter: any=[];

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
    this.ModalTitle="Update Designation";
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
      this.DesignationListWithoutFilter=data;
      this.totalRecords = data.length;
    });
    this.DesignationNameFilter="";
  }

  Filterfn() {
    var DesignationNameFilter = this.DesignationNameFilter;
 
    this.DesigntionList = this.DesignationListWithoutFilter.filter(function (el:any) {
      return el.DesignationName.toString().toLowerCase().includes(DesignationNameFilter.toString().trim().toLowerCase())
    });
  }
 
  sortResult(prop: any, asc: any) {
    this.DesigntionList = this.DesignationListWithoutFilter.sort(function (a:any, b:any) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : (a[prop] < b[prop] ? -1 : 0)
      }
      else {
        return (b[prop] > a[prop]) ? 1 : (b[prop] < a[prop] ? -1 : 0)
      }
    });
  }

}
