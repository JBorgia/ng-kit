import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitButtonModule, NgKitPaginationModule } from 'ng-kit';

import { PaginationDisabledComponent } from './pagination-disabled';

@NgModule({
  imports: [
    BrowserModule,
    NgKitPaginationModule,
    NgKitButtonModule
  ],
  declarations: [PaginationDisabledComponent],
  exports: [PaginationDisabledComponent],
  bootstrap: [PaginationDisabledComponent]
})
export class PaginationDisabledModule { }
