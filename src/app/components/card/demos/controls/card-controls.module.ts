import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule, XmCardModule } from 'ng-kit';

import { CardControlsComponent } from './card-controls.component';

@NgModule({
  imports: [
    BrowserModule,
    XmButtonModule,
    XmCardModule,
  ],
  declarations: [
    CardControlsComponent
  ],
  exports: [
    CardControlsComponent
  ],
  bootstrap: [
    CardControlsComponent
  ]
})
export class CardControlsModule { }
