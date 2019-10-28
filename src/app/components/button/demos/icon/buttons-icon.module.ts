import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitButtonModule } from 'ng-kit';

import { ButtonsIconComponent } from './buttons-icon.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    NgKitButtonModule
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
