import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkButtonModule, NgkDropdownModule } from 'ng-kit';

import { DropdownManualComponent } from './dropdown-manual';

@NgModule({
  imports: [
    BrowserModule,
    NgkDropdownModule,
    NgkButtonModule
  ],
  declarations: [DropdownManualComponent],
  exports: [DropdownManualComponent],
  bootstrap: [DropdownManualComponent]
})
export class DropdownManualModule { }
