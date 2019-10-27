import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule, XmCardModule } from 'ng-kit';

import { CardDefaultComponent } from './card-default.component';

@NgModule({
  imports: [
    BrowserModule,
    XmButtonModule,
    XmCardModule,
  ],
  declarations: [
    CardDefaultComponent
  ],
  exports: [
    CardDefaultComponent
  ],
  bootstrap: [
    CardDefaultComponent
  ]
})
export class CardDefaultModule { }
