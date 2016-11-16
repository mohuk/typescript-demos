import 'reflect-metadata';
import 'zone.js';
import 'rxjs';
import { NgModule } from '@angular/core';
import { MdlModule } from 'angular2-mdl';
import { BrowserModule } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    MdlModule
  ],
  declarations: [
    AppComponent,
  ],
  bootstrap: [
    AppComponent
  ]
})
class AppModule{}

platformBrowserDynamic().bootstrapModule(AppModule);
