import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitButtonModule, NgKitModalModule } from 'ng-kit';

import { ModalConfigComponent } from './modal-config';

@NgModule({
  imports: [
    BrowserModule,
    NgKitModalModule,
    NgKitButtonModule,
  ],
  declarations: [ModalConfigComponent],
  exports: [ModalConfigComponent],
  bootstrap: [ModalConfigComponent]
})
export class ModalConfigModule { }
