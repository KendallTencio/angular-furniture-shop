import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './views/home/home.component';
import { NationalManageComponent } from './views/national-manage/national-manage.component';
import { GeneralManageComponent } from './views/general-manage/general-manage.component';
import { CeoComponent } from './views/ceo/ceo.component';
import { ClientViewComponent } from './views/client-view/client-view.component';
import { RegisterComponent } from './views/register/register.component';
import { ReportViewComponent } from './views/report-view/report-view.component';
import { GeneralManageToolsComponent } from './views/general-manage-tools/general-manage-tools.component';


const routes: Routes = [
  {
    path: 'nationalManage',
    component : NationalManageComponent
  },
  {
    path: 'report',
    component : ReportViewComponent
  },
  {
    path: 'generalManageTools',
    component : GeneralManageToolsComponent
  },
  {
    path: 'generalManage',
    component : GeneralManageComponent
  },
  {
    path: 'client',
    component : ClientViewComponent
  },
  {
    path: 'ceo',
    component : CeoComponent
  },
  {
    path: 'register',
    component : RegisterComponent
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
