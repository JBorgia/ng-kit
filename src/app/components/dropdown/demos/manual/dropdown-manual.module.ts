import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule, XmDropdownModule } from 'ng-kit';

import { DropdownManualComponent } from './dropdown-manual';

@NgModule({
  imports: [
    BrowserModule,
    XmDropdownModule,
    XmButtonModule
  ],
  declarations: [DropdownManualComponent],
  exports: [DropdownManualComponent],
  bootstrap: [DropdownManualComponent]
})
export class DropdownManualModule { }
