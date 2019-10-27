import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule } from 'ng-kit';

import { ButtonsDefaultComponent } from './buttons-default.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    XmButtonModule
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
