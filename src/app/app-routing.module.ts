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
import { AuthGuard } from './auth/auth.guard';
import { DefaultHomeComponent } from './default-home/default-home.component';
import { ShowPrintermakeComponent } from './printermake/show-printermake/show-printermake.component';



const routes: Routes = [
  { path: 'homescreen', component: DefaultHomeComponent,canActivate:[AuthGuard] },
  { path: 'home', component: HomeComponent,canActivate:[AuthGuard] },

  {
    path: 'login',
    component: UserComponent,
    children: [{ path: '', component: SignInComponent}],
  },
  {
    path: 'printer',
    component: PrinterComponent,canActivate:[AuthGuard],
    children: [{ path: '', component: ShowPrinterComponent }],
  },
  {
    path: 'printermake',
    component: PrintermakeComponent,canActivate:[AuthGuard],
    children: [{ path: '', component: ShowPrintermakeComponent }],
  },
  {
    path: 'user',
    component: ShowUserComponent,canActivate:[AuthGuard],
    children: [{ path: '', component: ShowUserComponent }],
  },
  {
    path: 'designation',canActivate:[AuthGuard],
    component: DesignationComponent,
    children: [{ path: '', component: ShowDesComponent }],
  },
  {
    path: 'document',canActivate:[AuthGuard],
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
