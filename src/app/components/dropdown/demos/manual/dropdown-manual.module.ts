import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitButtonModule, NgKitDropdownModule } from 'ng-kit';

import { DropdownManualComponent } from './dropdown-manual';

@NgModule({
  imports: [
    BrowserModule,
    NgKitDropdownModule,
    NgKitButtonModule
  ],
  declarations: [DropdownManualComponent],
  exports: [DropdownManualComponent],
  bootstrap: [DropdownManualComponent]
})
export class DropdownManualModule { }
