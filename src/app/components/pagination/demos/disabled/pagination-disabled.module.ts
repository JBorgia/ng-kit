import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkButtonModule, NgkPaginationModule } from 'ng-kit';

import { PaginationDisabledComponent } from './pagination-disabled';

@NgModule({
  imports: [
    BrowserModule,
    NgkPaginationModule,
    NgkButtonModule
  ],
  declarations: [PaginationDisabledComponent],
  exports: [PaginationDisabledComponent],
  bootstrap: [PaginationDisabledComponent]
})
export class PaginationDisabledModule { }
