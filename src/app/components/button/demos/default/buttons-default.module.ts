import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitButtonModule } from 'ng-kit';

import { ButtonsDefaultComponent } from './buttons-default.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgKitButtonModule
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
