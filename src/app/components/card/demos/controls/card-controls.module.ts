import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkButtonModule, NgkCardModule } from 'ng-kit';

import { CardControlsComponent } from './card-controls.component';

@NgModule({
  imports: [
    BrowserModule,
    NgkButtonModule,
    NgkCardModule,
  ],
  declarations: [
    CardControlsComponent
  ],
  exports: [
    CardControlsComponent
  ],
  bootstrap: [
    CardControlsComponent
  ]
})
export class CardControlsModule { }
