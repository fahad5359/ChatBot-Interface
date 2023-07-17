import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-all-chat',
  templateUrl: './all-chat.component.html',
  styleUrls: ['./all-chat.component.css']
})
export class AllChatComponent {
  chatMessages: { message: string, response: string }[] = [];

  @Input() displayingResponseAsChat: string[] = [];
  @Input() responsee: string = "hala";
  @Input() mesage: string;
  @Input() displayingTextAsChat: string[] = [];

  ngOnChanges() {
    this.combineMessages();
  }

  combineMessages() {
    this.chatMessages = this.displayingTextAsChat.map((message, index) => ({
      message,
      response: this.displayingResponseAsChat[index] || ''
    }));
  }
}
