import { TestBed, inject } from '@angular/core/testing';

import { MailboxService } from './mailbox.service';

describe('MailboxService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MailboxService]
    });
  });

  it('should ...', inject([MailboxService], (service: MailboxService) => {
    expect(service).toBeTruthy();
  }));
});
