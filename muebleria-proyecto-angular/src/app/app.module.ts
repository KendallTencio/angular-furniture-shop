import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './views/navbar/navbar.component';
import { HomeComponent } from './views/home/home.component';
import { ClientComponent } from './views/client/client.component';
import { GeneralManageComponent } from './views/general-manage/general-manage.component';
import { NationalManageComponent } from './views/national-manage/national-manage.component';
import { CeoComponent } from './views/ceo/ceo.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    HomeComponent,
    ClientComponent,
    GeneralManageComponent,
    NationalManageComponent,
    CeoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
