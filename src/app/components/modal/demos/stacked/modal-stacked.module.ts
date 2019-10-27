import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule, XmModalModule } from 'ng-kit';

import { Modal1ContentComponent, Modal2ContentComponent, ModalStackedComponent } from './modal-stacked';

@NgModule({
  imports: [
    BrowserModule,
    XmModalModule,
    XmButtonModule,
  ],
  declarations: [
    ModalStackedComponent,
    Modal1ContentComponent,
    Modal2ContentComponent
  ],
  exports: [ModalStackedComponent],
  bootstrap: [ModalStackedComponent],
  entryComponents: [
    Modal1ContentComponent,
    Modal2ContentComponent
  ]
})
export class ModalStackedModule { }
