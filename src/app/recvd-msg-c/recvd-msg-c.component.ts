import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-recvd-msg-c',
  templateUrl: './recvd-msg-c.component.html',
  styleUrls: ['./recvd-msg-c.component.css']
})
export class RecvdMsgCComponent {

  mesage_receved: string = "tst"
  
  @Input() displayingResponseAsChat:string[]=[]
  @Input() responsee:string;

}
