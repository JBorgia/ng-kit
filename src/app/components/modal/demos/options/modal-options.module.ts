import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitButtonModule, NgKitModalModule } from 'ng-kit';

import { ModalOptionsComponent } from './modal-options';

@NgModule({
  imports: [
    BrowserModule,
    NgKitModalModule,
    NgKitButtonModule
  ],
  declarations: [ModalOptionsComponent],
  exports: [ModalOptionsComponent],
  bootstrap: [ModalOptionsComponent]
})
export class ModalOptionsModule { }
