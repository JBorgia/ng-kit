import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmPaginationModule } from 'ng-kit';

import { PaginationSizeComponent } from './pagination-size';

@NgModule({
  imports: [BrowserModule, XmPaginationModule],
  declarations: [PaginationSizeComponent],
  exports: [PaginationSizeComponent],
  bootstrap: [PaginationSizeComponent]
})
export class PaginationSizeModule { }
