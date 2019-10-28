import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkButtonModule, NgkModalModule } from 'ng-kit';

import { ModalBasicComponent } from './modal-basic';

@NgModule({
  imports: [
    BrowserModule,
    NgkModalModule,
    NgkButtonModule,
  ],
  declarations: [ModalBasicComponent],
  exports: [ModalBasicComponent],
  bootstrap: [ModalBasicComponent]
})
export class ModalBasicModule { }
