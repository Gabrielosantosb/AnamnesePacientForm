import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {SucessComponent} from "./pages/sucess/sucess.component";


const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'sucesso',
    component: SucessComponent
  },
  { path: "**", component: SucessComponent },
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
