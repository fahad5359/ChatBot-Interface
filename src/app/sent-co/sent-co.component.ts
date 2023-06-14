import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sent-co',
  templateUrl: './sent-co.component.html',
  styleUrls: ['./sent-co.component.css']
})
export class SentCoComponent {
  @Input() mesage: string;
  @Input() displayingTextAsChat:string[]=[]
}
