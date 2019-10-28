import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkPaginationModule } from 'ng-kit';

import { PaginationConfigComponent } from './pagination-config';

@NgModule({
  imports: [BrowserModule, NgkPaginationModule],
  declarations: [PaginationConfigComponent],
  exports: [PaginationConfigComponent],
  bootstrap: [PaginationConfigComponent]
})
export class PaginationConfigModule { }
