import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule, XmDropdownModule } from 'ng-kit';

import { DropdownConfigComponent } from './dropdown-config';

@NgModule({
  imports: [
    BrowserModule,
    XmDropdownModule,
    XmButtonModule
  ],
  declarations: [DropdownConfigComponent],
  exports: [DropdownConfigComponent],
  bootstrap: [DropdownConfigComponent]
})
export class DropdownConfigModule { }
