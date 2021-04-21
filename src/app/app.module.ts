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

@NgModule({
  declarations: [
    AppComponent,
    DesignationComponent,
    ShowDesComponent,
    AddEditComponent,
    UserComponent,
    AddEditUserComponent,
    ShowUserComponent
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
