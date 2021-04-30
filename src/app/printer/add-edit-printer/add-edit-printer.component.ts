import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-add-edit-printer',
  templateUrl: './add-edit-printer.component.html',
  styleUrls: ['./add-edit-printer.component.css']
})
export class AddEditPrinterComponent implements OnInit {

  constructor(private service:SharedService,public formBuilder: FormBuilder) { }

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
  printermakeList:any=[];
  userForm:any;

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

    this.service.getPrinterMakeList().subscribe(data=>{
      this.printermakeList=data;

      this.userForm = this.formBuilder.group({
        PrinterName: ['', [Validators.required, Validators.minLength(50)]],
        FolderToMonitor: ['', [Validators.required, Validators.minLength(250)]],
        OutputType: ['', [Validators.required, Validators.minLength(50)]],
        PrinterMakeID: ['', [Validators.required, Validators.minLength(50)]],
        FileOutput: ['', [Validators.required, Validators.minLength(250)]],
        Active: ['', [Validators.required, Validators.minLength(5)]],
  
      });
    });
  }
   //get validation form
 get getControl(){
  return this.userForm.controls;
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
