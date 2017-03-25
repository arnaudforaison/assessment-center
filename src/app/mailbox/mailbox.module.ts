import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MailboxComponent } from './mailbox.component';
import { SidebarComponent } from './sidebar/sidebar.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [MailboxComponent, SidebarComponent],
  exports: [MailboxComponent]
})
export class MailboxModule { }
