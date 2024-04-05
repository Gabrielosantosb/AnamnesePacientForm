import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PacientComponent } from './modules/pacient/pacient.component';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {FileUploadModule} from "primeng/fileupload";
import {ProgressBarModule} from "primeng/progressbar";
import {RippleModule} from "primeng/ripple";
import {ButtonModule} from "primeng/button";
import { SucessComponent } from './pages/sucess/sucess.component';
import {CheckboxModule} from "primeng/checkbox";
import {ReportComponent} from "./modules/report/report.component";
import { NotFoundComponent } from './pages/not-found/not-found.component';
// import { ReportComponent } from './modules/report/report.component';

@NgModule({
  declarations: [
    AppComponent,
    PacientComponent,
    SucessComponent,
    ReportComponent,
    NotFoundComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule,
    ProgressBarModule,
    RippleModule,
    ButtonModule,
    CheckboxModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
