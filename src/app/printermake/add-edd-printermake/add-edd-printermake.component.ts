import { Component, OnInit,Input } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-add-edd-printermake',
  templateUrl: './add-edd-printermake.component.html',
  styleUrls: ['./add-edd-printermake.component.css']
})
export class AddEddPrintermakeComponent implements OnInit {

  constructor(private service:SharedService, public formBuilder: FormBuilder) { }



  @Input() printermake:any;
  ActivateAddEditDepComp:boolean=false;
  PrinterMakeID:string="";
  PrinterMakeName:string="";
  PrinterMakeList:any=[];
  Status:string="";
  userForm:any;


  ngOnInit(): void {
    //this.refreshPrinterMakeList();
    this.PrinterMakeID=this.printermake.PrinterMakeID;
    this.PrinterMakeName=this.printermake.PrinterMakeName;
    this.Status= this.printermake.Status;

    this.userForm = this.formBuilder.group({
      PrinterMakeName: ['', [Validators.required, Validators.minLength(250)]],

    });
  }

  closeClick(){
    this.ActivateAddEditDepComp=false;
    // this.refreshPrinterMakeList();
  }
   
  // refreshPrinterMakeList(){
  //   this.service.getPrinterMakeList().subscribe(data=>{
  //     this.PrinterMakeList=data;
  //    // this.totalRecords = data.length;
  //     this.PrinterMakeListWithoutFilter=data;
  //   });
  //   this.PrinterMakeFilter="";
  // }


 //get validation form
 get getControl(){
      return this.userForm.controls;
    }

  addPrinterMake(){
    var val = {
      PrinterMakeID:this.PrinterMakeID,
      PrinterMakeName:this.PrinterMakeName
    };
    this.service.addPrinterMake(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updatePrinterMake(){
    var val = {
      PrinterMakeID:this.PrinterMakeID,
      PrinterMakeName:this.PrinterMakeName
    };
    this.service.updatePrinterMake(val).subscribe(res=>{
    alert(res.toString());
    });
  }


}
