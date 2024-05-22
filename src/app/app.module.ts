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
import {AnnotationComponent} from "./modules/annotation/annotation.component";
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {MessageService} from "primeng/api";
import {ToastModule} from "primeng/toast";
// import { AnnotationComponent } from './modules/anotation/anotation.component';

@NgModule({
  declarations: [
    AppComponent,
    PacientComponent,
    SucessComponent,
    AnnotationComponent,
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
    ToastModule,

  ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
