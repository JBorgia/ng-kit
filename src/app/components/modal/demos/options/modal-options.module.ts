import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule, XmModalModule } from 'ng-kit';

import { ModalOptionsComponent } from './modal-options';

@NgModule({
  imports: [
    BrowserModule,
    XmModalModule,
    XmButtonModule
  ],
  declarations: [ModalOptionsComponent],
  exports: [ModalOptionsComponent],
  bootstrap: [ModalOptionsComponent]
})
export class ModalOptionsModule { }
