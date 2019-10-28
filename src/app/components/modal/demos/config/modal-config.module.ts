import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkButtonModule, NgkModalModule } from 'ng-kit';

import { ModalConfigComponent } from './modal-config';

@NgModule({
  imports: [
    BrowserModule,
    NgkModalModule,
    NgkButtonModule,
  ],
  declarations: [ModalConfigComponent],
  exports: [ModalConfigComponent],
  bootstrap: [ModalConfigComponent]
})
export class ModalConfigModule { }
