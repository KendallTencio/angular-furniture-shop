import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { NationalManageComponent } from './views/national-manage/national-manage.component';
import { GeneralManageComponent } from './views/general-manage/general-manage.component';
import { ClientComponent } from './views/client/client.component';
import { CeoComponent } from './views/ceo/ceo.component';


const routes: Routes = [
  {
    path: 'nationalManage',
    component : NationalManageComponent
  },
  {
    path: 'generalManage',
    component : GeneralManageComponent
  },
  {
    path: 'client',
    component : ClientComponent
  },
  {
    path: 'ceo',
    component : CeoComponent
  },
  {
    path: '**',
    component : HomeComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
