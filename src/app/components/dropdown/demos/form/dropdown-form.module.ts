import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitButtonModule, NgKitDropdownModule } from 'ng-kit';

import { DropdownFormComponent } from './dropdown-form';

@NgModule({
  imports: [
    BrowserModule,
    NgKitDropdownModule,
    NgKitButtonModule
  ],
  declarations: [DropdownFormComponent],
  exports: [DropdownFormComponent],
  bootstrap: [DropdownFormComponent]
})
export class DropdownFormModule { }
