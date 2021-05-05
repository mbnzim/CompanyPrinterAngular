import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-show-printermake',
  templateUrl: './show-printermake.component.html',
  styleUrls: ['./show-printermake.component.css']
})
export class ShowPrintermakeComponent implements OnInit {

  constructor(private service:SharedService) { }

  ModalTitle:string="";
  ActivateAddEditDepComp:boolean=false;
  printermake:any; 
  PrinterMakeList:any=[];
  totalRecords:number=0;
  page:any=1;

  
  PrinterMakeFilter: string = "";
  PrinterMakeListWithoutFilter: any=[];
  ngOnInit(): void {
    this.refreshPrinterMakeList();
  }

  addClick(){
    this.printermake={
      PrinterMakeID:0,
      PrinterMakeName:"",
      Status:""
    }
    this.ModalTitle="Add PrinterMake";
    this.ActivateAddEditDepComp=true;
  }
  
  editClick(item: any){
    this.printermake=item;
    this.ModalTitle="Update PrinterMake";
    this.ActivateAddEditDepComp=true;
  }

  deleteClick(item:any){
    if(confirm('Are you sure??')){
      this.service.deletePrinterMake(item.PrinterMakeID).subscribe(data=>{
        alert(data.toString());
        this.refreshPrinterMakeList();
      })
    }
  }
  
  closeClick(){
    this.ActivateAddEditDepComp=false;
    this.refreshPrinterMakeList();
  }
   
  refreshPrinterMakeList(){
    this.service.getPrinterMakeList().subscribe(data=>{
      this.PrinterMakeList=data;
      this.totalRecords = data.length;
      this.PrinterMakeListWithoutFilter =data;
    });
    this.PrinterMakeFilter="";
  }

  Filterfn() {
    var PrinterMakeFilter = this.PrinterMakeFilter;
 
    this.PrinterMakeList = this.PrinterMakeListWithoutFilter.filter(function (el:any) {
      return el.PrinterMakeName.toString().toLowerCase().includes(PrinterMakeFilter.toString().trim().toLowerCase())
    });
  }
 
  sortResult(prop: any, asc: any) {
    this.PrinterMakeList = this.PrinterMakeListWithoutFilter.sort(function (a:any, b:any) {
      if (asc) {
        return (a[prop] > b[prop]) ? 1 : (a[prop] < b[prop] ? -1 : 0)
      }
      else {
        return (b[prop] > a[prop]) ? 1 : (b[prop] < a[prop] ? -1 : 0)
      }
    });
  }
}
