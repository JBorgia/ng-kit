import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitButtonModule, NgKitDropdownModule } from 'ng-kit';

import { DropdownBasicComponent } from './dropdown-basic';

@NgModule({
  imports: [
    BrowserModule,
    NgKitDropdownModule,
    NgKitButtonModule
  ],
  declarations: [DropdownBasicComponent],
  exports: [DropdownBasicComponent],
  bootstrap: [DropdownBasicComponent]
})
export class DropdownBasicModule { }
