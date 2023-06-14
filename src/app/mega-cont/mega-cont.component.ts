import { Component, Input, OnInit } from '@angular/core';
import { Messagess } from '../messagess';

@Component({
  selector: 'app-mega-cont',
  templateUrl: './mega-cont.component.html',
  styleUrls: ['./mega-cont.component.css']
})
export class MegaContComponent implements OnInit {



  constructor() { }

  ngOnInit() { }
  // Bind array To HTML, Add string values to array each time a button is pressed.
  displayingTextAsChat: string[] = [];
  mesage: string;


  addText() {
    console.log(this.mesage)

    if (this.mesage) {
      this.displayingTextAsChat.push(this.mesage)
    }
  }
}
