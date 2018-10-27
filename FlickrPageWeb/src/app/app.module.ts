import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home.component';
import { FlickrService } from './services/flickr.service';
import {HttpClientModule, } from '@angular/common/http';
import {HttpModule, JsonpModule } from '@angular/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    JsonpModule
  ],
  providers: [FlickrService],
  bootstrap: [AppComponent]
})

export class AppModule { }
