import {Component, Input, OnInit, ViewChild} from '@angular/core';
import {MessageService} from "../../_services/message.service";
import {Message} from "../../_models/message";
import {MembersService} from "../../_services/members.service";
import {Member} from "../../_models/member";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-member-messages',
  templateUrl: './member-messages.component.html',
  styleUrls: ['./member-messages.component.css']
})
export class MemberMessagesComponent implements OnInit {
  @ViewChild('messageForm') messageForm: NgForm
  @Input() messages: Message[] = [];
  @Input() username: string
  messageContent: string

  constructor(private messageService: MessageService) { }

  ngOnInit(): void {
  }

  sendMessage() {
    this.messageService.sendMessages(this.username,this.messageContent).subscribe(message => {
      this.messages.push(message);
      this.messageForm.reset();
    })
  }
}
