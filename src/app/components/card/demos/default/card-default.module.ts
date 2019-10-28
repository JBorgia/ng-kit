import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitButtonModule, NgKitCardModule } from 'ng-kit';

import { CardDefaultComponent } from './card-default.component';

@NgModule({
  imports: [
    BrowserModule,
    NgKitButtonModule,
    NgKitCardModule,
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
