import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgkNotificationComponent } from './notification.component';
import { NotificationService } from './notification.service';
import { KeysPipe } from './pipes/keys.pipe';
import { TruncatePipe } from './pipes/truncate.pipe';
import { ButtonsComponent } from './toast/button/buttons.component';
import { PromptComponent } from './toast/prompt/prompt.component';
import { ToastComponent } from './toast/toast.component';

export * from './notification.component';
export * from './notification.service';
export * from './interfaces/Notification.interface';
export * from './interfaces/NotificationButton.interface';
export * from './interfaces/NotificationToastConfig.interface';
export * from './interfaces/Notifications.interface';
export * from './enums/NotificationPosition.enum';
export * from './toast/notification-toast.model';
export * from './toast/toast.component';
export * from './pipes/truncate.pipe';
export * from './pipes/keys.pipe';

export * from './toast/button/buttons.component';
export * from './toast/prompt/prompt.component';
export * from './toastDefaults';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [
    NgkNotificationComponent, ToastComponent, TruncatePipe,
    ButtonsComponent, PromptComponent, KeysPipe
  ],
  providers: [
    NotificationService,
  ],
  exports: [
    NgkNotificationComponent, TruncatePipe, KeysPipe
  ]
})
export class NotificationModule { }
