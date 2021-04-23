import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-printer',
  templateUrl: './show-printer.component.html',
  styleUrls: ['./show-printer.component.css']
})
export class ShowPrinterComponent implements OnInit {

  constructor(private service:SharedService) { }

  ModalTitle:string="";
  ActivateAddEditDepComp:boolean=false;
  printer:any; 
  PrinterList:any=[];

  ngOnInit(): void {
    this.refreshPrinterList();
  }

  addClick(){
    this.printer={
      EngenPrintersID: 0,
      PrinterName: "",
      FolderToMonitor: "",
      OutputType: "",
      FileOutput: "",
      PrinterMakeID:"",
      Active: "",
      CreatedDate:"",
      LastModificationDate:""
    }
    this.ModalTitle="Add Printer";
    this.ActivateAddEditDepComp=true;
  }

  editClick(item: any){
    this.printer=item;
    this.ModalTitle="Update Printer";
    this.ActivateAddEditDepComp=true;
  }

  
  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshPrinterList();
  }
   
  refreshPrinterList(){
    this.service.getPrinterList().subscribe(data=>{
      this.PrinterList=data;
    });
  }

}
