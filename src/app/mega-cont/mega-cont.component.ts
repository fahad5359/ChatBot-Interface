import { Component, Input, OnInit } from '@angular/core';
import { Messagess } from '../messagess';

@Component({
  selector: 'app-mega-cont',
  templateUrl: './mega-cont.component.html',
  styleUrls: ['./mega-cont.component.css']
})
export class MegaContComponent implements OnInit {

  messagess: Messagess = new Messagess("hla!?");

  constructor() { }

  ngOnInit() { }
  // Bind array To HTML, Add string values to array each time a button is pressed.
  displayingTextAsChat: string[] = [];

  writtenTxet: string;

  addText() {
    console.log(this.messagess)

    if (this.writtenTxet) {
      this.displayingTextAsChat.push(this.writtenTxet)
    }
  }
}
