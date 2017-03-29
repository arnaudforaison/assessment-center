import { Inbox } from './mailbox.model';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Rx';

@Injectable()
export class MailboxService {

  constructor() { }

  retrieveInbox() {
    const inbox: Inbox = {
      folders: [
        {
          label: 'Boîte de réception',
          emails: [
            { read: false, from: 'arnaud.foraison@gmail', to: ['benjamin.joubert@gmail.com'], object: 'Test', content: 'Ceci est test' },
            { read: false, from: 'arnaud.foraison@gmail', to: ['benjamin.joubert@gmail.com'], object: 'Test 2', content: 'Ceci est test' }
          ]
        },
        {
          label: 'Brouillon',
          emails: []
        },
        {
          label: 'Corbeille',
          emails: [
            { read: true, from: 'arnaud.foraison@gmail', to: ['benjamin.joubert@gmail.com'], object: 'Test', content: 'Ceci est test' },
            { read: true, from: 'arnaud.foraison@gmail', to: ['benjamin.joubert@gmail.com'], object: 'Test 2', content: 'Ceci est test' }
          ]
        },
      ]
    };
    return Observable.of(inbox);
  }

}
