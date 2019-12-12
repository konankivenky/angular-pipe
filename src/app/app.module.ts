import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { CommonModule } from '@angular/common';
import {  HttpClientModule } from '@angular/common/http';
import { userPipe } from './pipe/user.pipe';


@NgModule({
  declarations: [
    AppComponent,
    userPipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
