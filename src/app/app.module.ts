import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ChatService } from 'src/app/chat.service';
import { FormsModule } from '@angular/forms';
import {MatCardModule, MatSidenavModule, MatButtonModule, MatRadioModule} from '@angular/material';
import { BrowserAnimationsModule, } from '@angular/platform-browser/animations';
@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatCardModule,
    BrowserAnimationsModule,
    MatSidenavModule,
    MatButtonModule,
    MatRadioModule
  ],
  providers: [ChatService],
  bootstrap: [AppComponent]
})
export class AppModule { }
