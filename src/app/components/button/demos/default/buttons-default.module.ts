import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgkButtonModule } from 'ng-kit';

import { ButtonsDefaultComponent } from './buttons-default.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgkButtonModule
  ],
  declarations: [
    ButtonsDefaultComponent
  ],
  exports: [
    ButtonsDefaultComponent
  ],
  bootstrap: [
    ButtonsDefaultComponent
  ]
})
export class ButtonsDefaultModule { }
