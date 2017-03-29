import { Folder } from '../mailbox.model';
import { Component, Input, OnInit } from '@angular/core';
import { Inbox } from 'app/mailbox/mailbox.model';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  @Input() inbox: Inbox;
  private indexSelected: number;

  constructor() {
    this.indexSelected = 0;
  }

  ngOnInit() {
  }

  private getUnredCount(folder: Folder) {
    return folder.emails.filter(email => !email.read).length;
  }

}
