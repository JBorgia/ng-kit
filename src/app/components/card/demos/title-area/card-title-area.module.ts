import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitButtonModule, NgKitCardModule } from 'ng-kit';

import { CardTitleAreaComponent } from './card-title-area.component';

@NgModule({
  imports: [
    BrowserModule,
    NgKitButtonModule,
    NgKitCardModule,
  ],
  declarations: [
    CardTitleAreaComponent
  ],
  exports: [
    CardTitleAreaComponent
  ],
  bootstrap: [
    CardTitleAreaComponent
  ]
})
export class CardTitleAreaModule { }
