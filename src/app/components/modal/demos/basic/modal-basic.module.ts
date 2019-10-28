import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitButtonModule, NgKitModalModule } from 'ng-kit';

import { ModalBasicComponent } from './modal-basic';

@NgModule({
  imports: [
    BrowserModule,
    NgKitModalModule,
    NgKitButtonModule,
  ],
  declarations: [ModalBasicComponent],
  exports: [ModalBasicComponent],
  bootstrap: [ModalBasicComponent]
})
export class ModalBasicModule { }
