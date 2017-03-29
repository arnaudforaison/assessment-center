import { TestBed, async, inject } from '@angular/core/testing';

import { MailboxGuard } from './mailbox.guard';

describe('MailboxGuard', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MailboxGuard]
    });
  });

  it('should ...', inject([MailboxGuard], (guard: MailboxGuard) => {
    expect(guard).toBeTruthy();
  }));
});
