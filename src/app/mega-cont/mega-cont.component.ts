import { Component, Input, OnInit } from '@angular/core';

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

  writtenTxet: string;

  addText() {

    if (this.writtenTxet) {
      this.displayingTextAsChat.push(this.writtenTxet)
    }
  }
}
