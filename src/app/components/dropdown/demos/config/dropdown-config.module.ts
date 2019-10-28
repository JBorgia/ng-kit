import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitButtonModule, NgKitDropdownModule } from 'ng-kit';

import { DropdownConfigComponent } from './dropdown-config';

@NgModule({
  imports: [
    BrowserModule,
    NgKitDropdownModule,
    NgKitButtonModule
  ],
  declarations: [DropdownConfigComponent],
  exports: [DropdownConfigComponent],
  bootstrap: [DropdownConfigComponent]
})
export class DropdownConfigModule { }
