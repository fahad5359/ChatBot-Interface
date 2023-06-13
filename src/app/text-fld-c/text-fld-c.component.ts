import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { MegaContComponent } from '../mega-cont/mega-cont.component';

@Component({
  selector: 'app-text-fld-c',
  templateUrl: './text-fld-c.component.html',
  styleUrls: ['./text-fld-c.component.css']
})
export class TextFldCComponent implements OnInit {
  text: string;

  constructor() { }


  @ViewChild('megaContComponent') megaContComponent: MegaContComponent

  ngOnInit() {
   
  }


}
