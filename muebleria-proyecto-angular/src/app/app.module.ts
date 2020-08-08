import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { GeneralManageComponent } from './views/general-manage/general-manage.component';
import { NationalManageComponent } from './views/national-manage/national-manage.component';
import { CeoComponent } from './views/ceo/ceo.component';
import { ClientViewComponent } from './views/client-view/client-view.component';
// import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';
import { FooterComponent } from './views/footer/footer.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './views/register/register.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GeneralManageComponent,
    NationalManageComponent,
    CeoComponent,
    ClientViewComponent,
    FooterComponent,
    RegisterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    // MultiSelectAllModule,
    BrowserAnimationsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
