import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkPaginationModule } from 'ng-kit';

import { PaginationBasicComponent } from './pagination-basic';

@NgModule({
  imports: [BrowserModule, NgkPaginationModule],
  declarations: [PaginationBasicComponent],
  exports: [PaginationBasicComponent],
  bootstrap: [PaginationBasicComponent]
})
export class PaginationBasicModule { }
