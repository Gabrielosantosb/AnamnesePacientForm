import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PacientComponent} from "./modules/pacient/pacient.component";
import {ReportComponent} from "./modules/report/report.component";

const routes: Routes = [ {
  path: '',
  redirectTo: 'ReportForm',
  pathMatch: 'full'
},
  {
    path: 'PacientForm',
    component: PacientComponent
  },
  {
    path: 'ReportForm',
    component: ReportComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
