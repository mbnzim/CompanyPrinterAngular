import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-doc',
  templateUrl: './show-doc.component.html',
  styleUrls: ['./show-doc.component.css']
})
export class ShowDocComponent implements OnInit {

  constructor(private service:SharedService) { }

  ModalTitle:string="";
  ActivateAddEditDepComp:boolean=false;
  doc:any; 
  DocList:any=[];
  totalRecords:number=0;
  page:any=1;

  DocumentNameFilter: string = "";
  DocumentListWithoutFilter: any=[];


  ngOnInit(): void {
    this.refreshDocList();
  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshDocList();
  }
   
  refreshDocList(){
    this.service.getDocumentList().subscribe(data=>{
      this.DocList=data;
      this.totalRecords = data.length;
      this.DocumentListWithoutFilter=data;
    });
    this.DocumentNameFilter="";
  }

  Filterfn() {
    var DocumentNameFilter = this.DocumentNameFilter;
 
    this.DocList = this.DocumentListWithoutFilter.filter(function (el:any) {
      return el.UserName.toString().toLowerCase().includes(DocumentNameFilter.toString().trim().toLowerCase())
    });
  }
 
  sortResult(prop: any, asc: any) {
    this.DocList = this.DocumentListWithoutFilter.sort(function (a:any, b:any) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : (a[prop] < b[prop] ? -1 : 0)
      }
      else {
        return (b[prop] > a[prop]) ? 1 : (b[prop] < a[prop] ? -1 : 0)
      }
    });
  }
}
