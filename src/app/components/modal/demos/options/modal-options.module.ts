import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkButtonModule, NgkModalModule } from 'ng-kit';

import { ModalOptionsComponent } from './modal-options';

@NgModule({
  imports: [
    BrowserModule,
    NgkModalModule,
    NgkButtonModule
  ],
  declarations: [ModalOptionsComponent],
  exports: [ModalOptionsComponent],
  bootstrap: [ModalOptionsComponent]
})
export class ModalOptionsModule { }
