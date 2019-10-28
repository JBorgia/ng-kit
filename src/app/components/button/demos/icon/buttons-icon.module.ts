import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgkButtonModule } from 'ng-kit';

import { ButtonsIconComponent } from './buttons-icon.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgkButtonModule
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
