import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {SucessComponent} from "./pages/sucess/sucess.component";
import {ReportComponent} from "./modules/report/report.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";


const routes: Routes = [
  {
    path: '',
    component: ReportComponent,
    pathMatch: 'full'
  },
  {
    path: 'sucesso',
    component: SucessComponent
  },
  { path: "**", component: NotFoundComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
