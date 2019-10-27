import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule, XmModalModule } from 'ng-kit';

import { ModalBasicComponent } from './modal-basic';

@NgModule({
  imports: [
    BrowserModule,
    XmModalModule,
    XmButtonModule,
  ],
  declarations: [ModalBasicComponent],
  exports: [ModalBasicComponent],
  bootstrap: [ModalBasicComponent]
})
export class ModalBasicModule { }
