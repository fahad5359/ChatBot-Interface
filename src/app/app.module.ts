import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonCComponent } from './button-c/button-c.component';
import { SideBarCComponent } from './side-bar-c/side-bar-c.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';

import { NgIf } from '@angular/common';
import { MegaContComponent } from './mega-cont/mega-cont.component';

import { HttpClientModule } from '@angular/common/http';
import { AllChatComponent } from './all-chat/all-chat.component';




@NgModule({
  declarations: [
    AppComponent,
    ButtonCComponent,
    SideBarCComponent,
    MegaContComponent,
    AllChatComponent,


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
