import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkButtonModule, NgkDropdownModule } from 'ng-kit';

import { DropdownBasicComponent } from './dropdown-basic';

@NgModule({
  imports: [
    BrowserModule,
    NgkDropdownModule,
    NgkButtonModule
  ],
  declarations: [DropdownBasicComponent],
  exports: [DropdownBasicComponent],
  bootstrap: [DropdownBasicComponent]
})
export class DropdownBasicModule { }
