import { Component } from '@angular/core';
import { ChatService } from './chat.service';
interface uData {
  userName: string,
  url: string,
}
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  message: string;
  enterUname: boolean;
  uname: string;
  urlh: string;
  status: string;
  clasms: string;
  messages: string[] = [];
  statuslisr: string[] = [];
  data: uData

  constructor(private chatService: ChatService) {
  }

  sendMessage() {
    this.chatService.sendMessage(this.message);
    this.message = '';
    this.sendStatus('online..');
  }

  sendStatus(stat) {
    this.chatService.sendStatus(stat);
  }
  choseUser() {
    if (this.uname&&this.urlh) {
      this.enterUname = true;
      this.data = { userName: this.uname, url: this.urlh }
      this.chatService.addUser(this.data)
    } else {
      alert("Please check the information")
    }
  }
  ngOnInit() {
    this.enterUname = false;
    this.chatService
      .getMessages()
      .subscribe((message: string) => {
        if (this.uname == message['userName']) {
          message['color'] = 'other'
        } else {
          message['color'] = 'self'
        }
        this.messages.push(message);
      });

    this.chatService
      .getStatus()
      .subscribe((status: string) => {
        this.clasms = status
      });
  }
  onKeydown() {
    this.sendStatus('typing..');
  }
}
