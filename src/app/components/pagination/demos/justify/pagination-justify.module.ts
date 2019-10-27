import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmPaginationModule } from 'ng-kit';

import { PaginationJustifyComponent } from './pagination-justify';

@NgModule({
  imports: [BrowserModule, XmPaginationModule],
  declarations: [PaginationJustifyComponent],
  exports: [PaginationJustifyComponent],
  bootstrap: [PaginationJustifyComponent]
})
export class PaginationJustifyModule { }
