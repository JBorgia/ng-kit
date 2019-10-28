import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitButtonModule, NgKitCardModule } from 'ng-kit';

import { CardBadgeComponent } from './card-badge.component';

@NgModule({
  imports: [
    BrowserModule,
    NgKitButtonModule,
    NgKitCardModule,
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
