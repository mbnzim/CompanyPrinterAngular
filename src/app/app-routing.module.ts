import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DesignationComponent } from './designation/designation.component';
import { UserComponent } from './user/user.component';


const routes: Routes = [
  {path:'designation',component:DesignationComponent},
  {path:'user',component:UserComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
