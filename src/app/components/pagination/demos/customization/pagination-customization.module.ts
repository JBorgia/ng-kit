import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkPaginationModule } from 'ng-kit';

import { PaginationCustomizationComponent } from './pagination-customization';

@NgModule({
  imports: [BrowserModule, NgkPaginationModule],
  declarations: [PaginationCustomizationComponent],
  exports: [PaginationCustomizationComponent],
  bootstrap: [PaginationCustomizationComponent]
})
export class PaginationCustomizationModule { }
