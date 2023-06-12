import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ButtonCComponent } from './button-c/button-c.component';
import { SideBarCComponent } from './side-bar-c/side-bar-c.component';
import { TextFldCComponent } from './text-fld-c/text-fld-c.component';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { SentMsgCComponent } from './sent-msg-c/sent-msg-c.component';
import { RecvdMsgCComponent } from './recvd-msg-c/recvd-msg-c.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule } from '@angular/forms';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatToolbarModule } from '@angular/material/toolbar';
import {MatDividerModule} from '@angular/material/divider';
import { NgIf } from '@angular/common';
import { MegaContComponent } from './mega-cont/mega-cont.component';



@NgModule({
  declarations: [
    AppComponent,
    ButtonCComponent,
    SideBarCComponent,
    TextFldCComponent,
    SentMsgCComponent,
    RecvdMsgCComponent,
    MegaContComponent,
   
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
    MatButtonModule,
    MatSidenavModule,
    MatToolbarModule,
    MatDividerModule,
    
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
