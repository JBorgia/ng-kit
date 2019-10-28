import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkButtonModule, NgkCardModule } from 'ng-kit';

import { CardBadgeComponent } from './card-badge.component';

@NgModule({
  imports: [
    BrowserModule,
    NgkButtonModule,
    NgkCardModule,
  ],
  declarations: [
    CardBadgeComponent
  ],
  exports: [
    CardBadgeComponent
  ],
  bootstrap: [
    CardBadgeComponent
  ]
})
export class CardBadgeModule { }
