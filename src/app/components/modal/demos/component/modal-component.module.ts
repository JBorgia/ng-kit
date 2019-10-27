import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule, XmModalModule } from 'ng-kit';

import { ModalComponent, ModalContentComponent } from './modal-component';

@NgModule({
  imports: [
    BrowserModule,
    XmModalModule,
    XmButtonModule,
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
