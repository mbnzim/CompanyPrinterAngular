import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';



import { DesignationComponent } from './designation/designation.component';


const routes: Routes = [
  {path:'designation',component:DesignationComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
