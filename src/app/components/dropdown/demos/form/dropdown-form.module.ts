import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkButtonModule, NgkDropdownModule } from 'ng-kit';

import { DropdownFormComponent } from './dropdown-form';

@NgModule({
  imports: [
    BrowserModule,
    NgkDropdownModule,
    NgkButtonModule
  ],
  declarations: [DropdownFormComponent],
  exports: [DropdownFormComponent],
  bootstrap: [DropdownFormComponent]
})
export class DropdownFormModule { }
