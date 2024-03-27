import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {PacientComponent} from "./modules/pacient/pacient.component";

const routes: Routes = [ {
  path: '',
  redirectTo: 'PacientForm',
  pathMatch: 'full'
},
  {
    path: 'PacientForm',
    component: PacientComponent
  }];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
