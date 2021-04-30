import {SharedService} from 'src/app/shared.service';
import { Component, OnInit,Input } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from "@angular/forms";

@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  constructor(private service:SharedService,public formBuilder: FormBuilder) { }
  userForm: any;


  @Input() dep:any;
  DesignationID:string="";
  DesignationName:string="";

  ngOnInit(): void {
    this.DesignationID=this.dep.DesignationID;
    this.DesignationName=this.dep.DesignationName;

    this.userForm = this.formBuilder.group({
      DesignationName: ['', [Validators.required, Validators.minLength(50)]],

    });
  }

 //get validation form
 get getControl(){
  return this.userForm.controls;
}
  addDesignation(){
    //validate if the dasignation name has been added
    if(this.DesignationName=== null || this.DesignationName.match(/^ *$/) !== null){
      alert('Invalid name');
    }else{
      var val = {
        DesignationID:this.DesignationID,
        DesignationName:this.DesignationName
      };
      this.service.addDesignation(val).subscribe(res=>{
        alert(res.toString());
      });
    }
  }

  updateDesignation(){
    var val = {DesignationID:this.DesignationID,
      DesignationName:this.DesignationName};
    this.service.updateDesignation(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
