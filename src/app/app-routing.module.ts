import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DesignationComponent } from './designation/designation.component';
import { UserComponent } from './user/user.component';
import { PrinterComponent } from './printer/printer.component';
import { PrintermakeComponent } from './printermake/printermake.component';


const routes: Routes = [
  {path:'designation',component:DesignationComponent},
  {path:'user',component:UserComponent},
  {path:'printer',component:PrinterComponent},
  {path:'printermake',component:PrintermakeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
