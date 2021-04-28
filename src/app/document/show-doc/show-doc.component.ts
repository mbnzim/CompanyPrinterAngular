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
    });
  }
}
