import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitPaginationModule } from 'ng-kit';

import { PaginationJustifyComponent } from './pagination-justify';

@NgModule({
  imports: [BrowserModule, NgKitPaginationModule],
  declarations: [PaginationJustifyComponent],
  exports: [PaginationJustifyComponent],
  bootstrap: [PaginationJustifyComponent]
})
export class PaginationJustifyModule { }
