import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkButtonModule, NgkCardModule } from 'ng-kit';

import { CardBodyComponent } from './card-body.component';

@NgModule({
  imports: [
    BrowserModule,
    NgkButtonModule,
    NgkCardModule,
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
