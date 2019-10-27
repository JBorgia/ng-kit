import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule } from 'ng-kit';

import { ButtonsIconComponent } from './buttons-icon.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    XmButtonModule
  ],
  declarations: [
    ButtonsIconComponent
  ],
  exports: [
    ButtonsIconComponent
  ],
  bootstrap: [
    ButtonsIconComponent
  ]
})
export class ButtonsIconModule { }
