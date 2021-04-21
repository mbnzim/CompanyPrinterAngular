import {SharedService} from 'src/app/shared.service';
import { Component, OnInit,Input } from '@angular/core';
@Component({
  selector: 'app-add-edit',
  templateUrl: './add-edit.component.html',
  styleUrls: ['./add-edit.component.css']
})
export class AddEditComponent implements OnInit {
  constructor(private service:SharedService) { }

  @Input() dep:any;
  DesignationID:string="";
  DesignationName:string="";

  ngOnInit(): void {
    this.DesignationID=this.dep.DesignationID;
    this.DesignationName=this.dep.DesignationName;
  }

  addDesignation(){
    var val = {DesignationID:this.DesignationID,
      DesignationName:this.DesignationName};
    this.service.addDesignation(val).subscribe(res=>{
      alert(res.toString());
    });
  }

  updateDesignation(){
    var val = {DesignationID:this.DesignationID,
      DesignationName:this.DesignationName};
    this.service.updateDesignation(val).subscribe(res=>{
    alert(res.toString());
    });
  }

}
