import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitButtonModule, NgKitCardModule } from 'ng-kit';

import { CardBodyComponent } from './card-body.component';

@NgModule({
  imports: [
    BrowserModule,
    NgKitButtonModule,
    NgKitCardModule,
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
