import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DesignationComponent } from './designation/designation.component';
import { UserComponent } from './user/user.component';
import { PrinterComponent } from './printer/printer.component';
import { PrintermakeComponent } from './printermake/printermake.component';
import { DocumentComponent } from './document/document.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { ShowPrinterComponent } from './printer/show-printer/show-printer.component';
import { HomeComponent } from './home/home.component';
import { ShowUserComponent } from './user/show-user/show-user.component';
import { ShowDesComponent } from './designation/show-des/show-des.component';



const routes: Routes = [
  //{path:'home',component:HomeComponent},
  // {path:'designation',component:DesignationComponent},
  // {path:'user',component:UserComponent},
  // {path:'printer',component:PrinterComponent},
  // {path:'printermake',component:PrintermakeComponent},
  // {path:'document',component:DocumentComponent},

  //{path:'login',component:SignInComponent},

  { path: 'home', component: HomeComponent },

  {
    path: 'login',
    component: UserComponent,
    children: [{ path: '', component: SignInComponent }],
  },
  {
    path: 'printer',
    component: PrinterComponent,
    children: [{ path: '', component: ShowPrinterComponent }],
  },
  {
    path: 'user',
    component: UserComponent,
    children: [{ path: '', component: ShowUserComponent }],
  },
  {
    path: 'designation',
    component: DesignationComponent,
    children: [{ path: '', component: ShowDesComponent }],
  },
  {
    path: 'document',
    component: DocumentComponent,
    children: [{ path: '', component: ShowPrinterComponent }],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
