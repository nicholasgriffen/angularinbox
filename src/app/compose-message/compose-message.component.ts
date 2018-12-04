import { Component, OnInit, Input } from '@angular/core'
import { MessageService } from '../message.service'
import { Message } from '../message'


@Component({
  selector: 'app-compose-message',
  templateUrl: './compose-message.component.html',
  styleUrls: ['./compose-message.component.css']
})
export class ComposeMessageComponent implements OnInit {
  @Input() messages

  constructor(private messageService: MessageService) { }

  ngOnInit() {
  }

  add(message: {subject: string, body: string}) {
    this.messageService.addMessage({
      subject: message.subject, 
      body: message.body } as Message
    )
    .subscribe(message => this.messages.push(message))
  }
}
