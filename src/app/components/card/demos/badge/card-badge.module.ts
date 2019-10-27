import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule, XmCardModule } from 'ng-kit';

import { CardBadgeComponent } from './card-badge.component';

@NgModule({
  imports: [
    BrowserModule,
    XmButtonModule,
    XmCardModule,
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
