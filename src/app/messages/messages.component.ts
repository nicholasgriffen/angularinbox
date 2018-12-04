import { Component, OnInit } from '@angular/core'

import { MessageService } from '../message.service'
import { Message } from '../message'

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  constructor(private messageService: MessageService) { }

  messages: Message[] = [{
    subject: 'wow',
    body: 'indeed',
    read: false,
    starred: false,
    id: 1,
    labels: ['dev']
  }]

  ngOnInit() {
    this.getMessages()
  }

  getMessages(): void {
    this.messageService.getMessages()
      .subscribe(messages => this.messages = messages)
  }

}
