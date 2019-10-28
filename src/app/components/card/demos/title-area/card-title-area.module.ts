import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkButtonModule, NgkCardModule } from 'ng-kit';

import { CardTitleAreaComponent } from './card-title-area.component';

@NgModule({
  imports: [
    BrowserModule,
    NgkButtonModule,
    NgkCardModule,
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
