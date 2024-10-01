import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import {platformBrowserDynamic} from '@angular/platform-browser-dynamic';
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {AppearDirective} from './app/appear';

@NgModule({
  exports: [
  ]
})
export class PlunkerMaterialModule {}

@NgModule({

  imports: [
    BrowserModule,
    BrowserAnimationsModule
  ],

  declarations: [AppearDirective],
  bootstrap: [],
  providers: []
})
export class PlunkerAppModule {}
// platformBrowserDynamic().bootstrapModule(PlunkerAppModule);

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
