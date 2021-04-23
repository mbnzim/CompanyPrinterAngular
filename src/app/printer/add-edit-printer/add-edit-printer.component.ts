import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-add-edit-printer',
  templateUrl: './add-edit-printer.component.html',
  styleUrls: ['./add-edit-printer.component.css']
})
export class AddEditPrinterComponent implements OnInit {

  constructor(private service:SharedService) { }

  @Input() printer:any;
  EngenPrintersID:string="";
  PrinterName:string= "";
  FolderToMonitor:string= "";
  OutputType:string= "";
  FileOutput:string= "";
  PrinterMakeID:string="";
  Active:number= 0;
  CreatedDate:string= "";
  LastModificationDate:string="";

  ngOnInit(): void {
    this.EngenPrintersID=this.printer.EngenPrintersID;
    this.PrinterName=this.printer.PrinterName;
    this.FolderToMonitor=this.printer.FolderToMonitor;
    this.OutputType=this.printer.OutputType;
    this.FileOutput=this.printer.FileOutput;
    this.PrinterMakeID=this.printer.PrinterMakeID;
    this.Active=this.printer.Active;
    this.CreatedDate=this.printer.CreatedDate;
    this.LastModificationDate=this.printer.LastModificationDate;
  }

  addPrinter(){
    var val = {
      EngenPrintersID:this.EngenPrintersID,
      PrinterName:this.PrinterName,
      FolderToMonitor:this.FolderToMonitor,
      OutputType:this.OutputType,
      FileOutput:this.FileOutput,
      PrinterMakeID:this.PrinterMakeID,
      Active:this.Active,
    
    };
    this.service.addPrinter(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updatePrinter(){
    var val = {
      EngenPrintersID:this.EngenPrintersID,
      PrinterName:this.PrinterName,
      FolderToMonitor:this.FolderToMonitor,
      OutputType:this.OutputType,
      FileOutput:this.FileOutput,
      PrinterMakeID:this.PrinterMakeID,
      Active:this.Active,
      CreatedDate:this.CreatedDate,
      LastModificationDate:this.LastModificationDate
    };
    this.service.updatePrinter(val).subscribe(res=>{
    alert(res.toString());
    });
  }
}
