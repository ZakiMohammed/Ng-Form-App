import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TemplateComponent } from './components/template/template.component';
import { BasicComponent } from './components/reactive/basic/basic.component';
import { HomeComponent } from './components/home/home.component';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { BuilderComponent } from './components/reactive/builder/builder.component';
import { ValidateComponent } from './components/reactive/validate/validate.component';

@NgModule({
  declarations: [
    AppComponent,
    TemplateComponent,
    BasicComponent,
    HomeComponent,
    NotFoundComponent,
    BuilderComponent,
    ValidateComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
