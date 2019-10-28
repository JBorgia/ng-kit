import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkPaginationModule } from 'ng-kit';

import { PaginationJustifyComponent } from './pagination-justify';

@NgModule({
  imports: [BrowserModule, NgkPaginationModule],
  declarations: [PaginationJustifyComponent],
  exports: [PaginationJustifyComponent],
  bootstrap: [PaginationJustifyComponent]
})
export class PaginationJustifyModule { }
