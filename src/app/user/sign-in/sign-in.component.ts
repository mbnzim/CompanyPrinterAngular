import { Component, OnInit } from '@angular/core';
import {SharedService} from 'src/app/shared.service';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent implements OnInit {

  isLoginError : boolean = false;
  constructor(private userService : SharedService,private router : Router) { }

  ngOnInit() {
  }

  OnSubmit(userName:any,password:any){
     this.userService.userAuthentication(userName,password).subscribe((data : any)=>{
      localStorage.setItem('userToken',data.access_token);
      this.router.navigate(['/homescreen']);
    },
    (err : HttpErrorResponse)=>{
      this.isLoginError = true;
    });
  }
}
