import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkButtonModule, NgkModalModule } from 'ng-kit';

import { ModalComponent, ModalContentComponent } from './modal-component';

@NgModule({
  imports: [
    BrowserModule,
    NgkModalModule,
    NgkButtonModule,
  ],
  declarations: [
    ModalComponent,
    ModalContentComponent,
  ],
  exports: [ModalComponent],
  bootstrap: [
    ModalComponent,
    ModalContentComponent
  ],
  entryComponents: [ModalComponent]
})
export class ModalComponentModule { }
