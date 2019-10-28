import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkPaginationModule } from 'ng-kit';

import { PaginationSizeComponent } from './pagination-size';

@NgModule({
  imports: [BrowserModule, NgkPaginationModule],
  declarations: [PaginationSizeComponent],
  exports: [PaginationSizeComponent],
  bootstrap: [PaginationSizeComponent]
})
export class PaginationSizeModule { }
