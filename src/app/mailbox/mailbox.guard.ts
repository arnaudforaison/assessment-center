import { Inbox } from './mailbox.model';
import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { MailboxService } from 'app/mailbox/mailbox.service';

@Injectable()
export class MailboxGuard implements Resolve<Inbox> {

  constructor(private mailboxService: MailboxService) { }

  resolve() {
    return this.mailboxService.retrieveInbox();
  }
}
