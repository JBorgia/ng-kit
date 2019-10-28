import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitButtonModule, NgKitCardModule } from 'ng-kit';

import { CardControlsComponent } from './card-controls.component';

@NgModule({
  imports: [
    BrowserModule,
    NgKitButtonModule,
    NgKitCardModule,
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
