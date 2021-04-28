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
    });
  }
}
