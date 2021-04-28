import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import {SharedService} from 'src/app/shared.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private SharedService : SharedService,private router : Router) { }

  ngOnInit(): void {
  }
  Logout() {
    localStorage.removeItem('userToken');
    this.router.navigate(['/login']);
  }
}
