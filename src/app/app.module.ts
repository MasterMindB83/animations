import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SimpsonsModule } from './simpsons/simpsons.module';
import { PhotoModule } from './photo/photo.module';
import { PopupModule } from './popup/popup.module';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {ButtonModule} from 'primeng/button';
import {ToolbarModule} from 'primeng/toolbar';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    PopupModule,
    PhotoModule,
    SimpsonsModule,
    BrowserAnimationsModule,
    ButtonModule,
    ToolbarModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
