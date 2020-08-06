import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { GeneralManageComponent } from './views/general-manage/general-manage.component';
import { NationalManageComponent } from './views/national-manage/national-manage.component';
import { CeoComponent } from './views/ceo/ceo.component';
import { ClientViewComponent } from './views/client-view/client-view.component';
import { MultiSelectAllModule } from '@syncfusion/ej2-angular-dropdowns';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    GeneralManageComponent,
    NationalManageComponent,
    CeoComponent,
    ClientViewComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MultiSelectAllModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
