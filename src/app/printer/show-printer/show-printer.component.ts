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
  PrinterNameFilter: string = "";
  PrinterListWithoutFilter: any=[];

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
      this.PrinterListWithoutFilter=data;
    });
    this.PrinterNameFilter="";
  }

  Filterfn() {
    var PrinterNameFilter = this.PrinterNameFilter;
 
    this.PrinterList = this.PrinterListWithoutFilter.filter(function (el:any) {
      return el.PrinterName.toString().toLowerCase().includes(PrinterNameFilter.toString().trim().toLowerCase())
    });
  }
 
  sortResult(prop: any, asc: any) {
    this.PrinterList = this.PrinterListWithoutFilter.sort(function (a:any, b:any) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : (a[prop] < b[prop] ? -1 : 0)
      }
      else {
        return (b[prop] > a[prop]) ? 1 : (b[prop] < a[prop] ? -1 : 0)
      }
    });
  }

}
