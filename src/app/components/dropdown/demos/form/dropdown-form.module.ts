import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule, XmDropdownModule } from 'ng-kit';

import { DropdownFormComponent } from './dropdown-form';

@NgModule({
  imports: [
    BrowserModule,
    XmDropdownModule,
    XmButtonModule
  ],
  declarations: [DropdownFormComponent],
  exports: [DropdownFormComponent],
  bootstrap: [DropdownFormComponent]
})
export class DropdownFormModule { }
