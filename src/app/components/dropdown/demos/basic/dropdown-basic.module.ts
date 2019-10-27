import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule, XmDropdownModule } from 'ng-kit';

import { DropdownBasicComponent } from './dropdown-basic';

@NgModule({
  imports: [
    BrowserModule,
    XmDropdownModule,
    XmButtonModule
  ],
  declarations: [DropdownBasicComponent],
  exports: [DropdownBasicComponent],
  bootstrap: [DropdownBasicComponent]
})
export class DropdownBasicModule { }
