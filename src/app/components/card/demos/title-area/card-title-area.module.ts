import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule, XmCardModule } from 'ng-kit';

import { CardTitleAreaComponent } from './card-title-area.component';

@NgModule({
  imports: [
    BrowserModule,
    XmButtonModule,
    XmCardModule,
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
