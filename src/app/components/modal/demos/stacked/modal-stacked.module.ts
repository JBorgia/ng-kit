import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitButtonModule, NgKitModalModule } from 'ng-kit';

import { Modal1ContentComponent, Modal2ContentComponent, ModalStackedComponent } from './modal-stacked';

@NgModule({
  imports: [
    BrowserModule,
    NgKitModalModule,
    NgKitButtonModule,
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
