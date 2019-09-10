import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'; 
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TrendingTopicsComponent } from './trending-topics.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule, HttpClientModule  ],
  declarations: [ AppComponent, TrendingTopicsComponent ],
  bootstrap:    [ AppComponent ],
  providers: []
})
export class AppModule { }
