import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule, XmPaginationModule } from 'ng-kit';

import { PaginationDisabledComponent } from './pagination-disabled';

@NgModule({
  imports: [
    BrowserModule,
    XmPaginationModule,
    XmButtonModule
  ],
  declarations: [PaginationDisabledComponent],
  exports: [PaginationDisabledComponent],
  bootstrap: [PaginationDisabledComponent]
})
export class PaginationDisabledModule { }
