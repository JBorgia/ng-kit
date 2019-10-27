import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule, XmCardModule } from 'ng-kit';

import { CardBodyComponent } from './card-body.component';

@NgModule({
  imports: [
    BrowserModule,
    XmButtonModule,
    XmCardModule,
  ],
  declarations: [
    CardBodyComponent
  ],
  exports: [
    CardBodyComponent
  ],
  bootstrap: [
    CardBodyComponent
  ]
})
export class CardBodyModule { }
