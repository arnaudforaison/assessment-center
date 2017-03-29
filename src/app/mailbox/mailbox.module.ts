import { MailboxComponent } from './mailbox.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { MailboxGuard } from 'app/mailbox/mailbox.guard';
import { MailboxService } from 'app/mailbox/mailbox.service';

const routes = [
  { path: 'assessment', component: MailboxComponent, resolve: { inbox: MailboxGuard } }
];

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  declarations: [MailboxComponent, SidebarComponent],
  exports: [MailboxComponent],
  providers: [MailboxService, MailboxGuard]
})
export class MailboxModule { }
