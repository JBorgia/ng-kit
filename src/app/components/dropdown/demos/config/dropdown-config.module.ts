import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkButtonModule, NgkDropdownModule } from 'ng-kit';

import { DropdownConfigComponent } from './dropdown-config';

@NgModule({
  imports: [
    BrowserModule,
    NgkDropdownModule,
    NgkButtonModule
  ],
  declarations: [DropdownConfigComponent],
  exports: [DropdownConfigComponent],
  bootstrap: [DropdownConfigComponent]
})
export class DropdownConfigModule { }
