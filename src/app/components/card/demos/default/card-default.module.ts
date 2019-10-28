import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkButtonModule, NgkCardModule } from 'ng-kit';

import { CardDefaultComponent } from './card-default.component';

@NgModule({
  imports: [
    BrowserModule,
    NgkButtonModule,
    NgkCardModule,
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
