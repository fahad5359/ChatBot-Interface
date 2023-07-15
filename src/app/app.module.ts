import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonCComponent } from './button-c/button-c.component';
import { SideBarCComponent } from './side-bar-c/side-bar-c.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { RecvdMsgCComponent } from './recvd-msg-c/recvd-msg-c.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { NgIf } from '@angular/common';
import { MegaContComponent } from './mega-cont/mega-cont.component';
import { SentCoComponent } from './sent-co/sent-co.component';
import { HttpClientModule } from '@angular/common/http';




@NgModule({
  declarations: [
    AppComponent,
    ButtonCComponent,
    SideBarCComponent,
    RecvdMsgCComponent,
    MegaContComponent,
    SentCoComponent,


  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatSlideToggleModule,
    MatInputModule,
    MatIconModule,
    FormsModule,
    MatButtonModule,
    NgIf,
    HttpClientModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
