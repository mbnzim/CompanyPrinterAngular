import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DesignationComponent } from './designation/designation.component';
import { ShowDesComponent } from './designation/show-des/show-des.component';
import { AddEditComponent } from './designation/add-edit/add-edit.component';
import { UserComponent } from './user/user.component';
import { AddEditUserComponent } from './user/add-edit-user/add-edit-user.component';
import { ShowUserComponent } from './user/show-user/show-user.component';

import{SharedService} from './shared.service';
import{HttpClientModule} from '@angular/common/http';
import{FormsModule,ReactiveFormsModule} from '@angular/forms';
import { PrinterComponent } from './printer/printer.component';
import { ShowPrinterComponent } from './printer/show-printer/show-printer.component';
import { AddEditPrinterComponent } from './printer/add-edit-printer/add-edit-printer.component';
import { PrintermakeComponent } from './printermake/printermake.component';
import { ShowPrintermakeComponent } from './printermake/show-printermake/show-printermake.component';
import { AddEddPrintermakeComponent } from './printermake/add-edd-printermake/add-edd-printermake.component';
import { SignUpComponent } from './user/sign-up/sign-up.component';
import { SignInComponent } from './user/sign-in/sign-in.component';
import { DocumentComponent } from './document/document.component';
import { ShowDocComponent } from './document/show-doc/show-doc.component';
import { AddEditDocComponent } from './document/add-edit-doc/add-edit-doc.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    DesignationComponent,
    ShowDesComponent,
    AddEditComponent,
    UserComponent,
    AddEditUserComponent,
    ShowUserComponent,
    PrinterComponent,
    ShowPrinterComponent,
    AddEditPrinterComponent,
    PrintermakeComponent,
    ShowPrintermakeComponent,
    AddEddPrintermakeComponent,
    SignUpComponent,
    SignInComponent,
    DocumentComponent,
    ShowDocComponent,
    AddEditDocComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [SharedService],
  bootstrap: [AppComponent]
})
export class AppModule { }
