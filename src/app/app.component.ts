import { Component, OnInit } from '@angular/core';

import { MessagingService } from "./shared/messaging.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'push-notification';
  message;
  constructor(private messagingService: MessagingService) {

  }
  ngOnInit() {
    const userId = 'user002';
    this.messagingService.requestPermission(userId);
    this.messagingService.receiveMessage();
    this.message = this.messagingService.currentMessage;
  }
}
