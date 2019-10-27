import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule, XmModalModule } from 'ng-kit';

import { ModalConfigComponent } from './modal-config';

@NgModule({
  imports: [
    BrowserModule,
    XmModalModule,
    XmButtonModule,
  ],
  declarations: [ModalConfigComponent],
  exports: [ModalConfigComponent],
  bootstrap: [ModalConfigComponent]
})
export class ModalConfigModule { }
