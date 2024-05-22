import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AppComponent} from "./app.component";
import {SucessComponent} from "./pages/sucess/sucess.component";
import {AnnotationComponent} from "./modules/annotation/annotation.component";
import {NotFoundComponent} from "./pages/not-found/not-found.component";


const routes: Routes = [
  {
    path: '',
    component: AnnotationComponent,
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
