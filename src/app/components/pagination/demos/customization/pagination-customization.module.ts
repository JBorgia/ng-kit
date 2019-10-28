import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitPaginationModule } from 'ng-kit';

import { PaginationCustomizationComponent } from './pagination-customization';

@NgModule({
  imports: [BrowserModule, NgKitPaginationModule],
  declarations: [PaginationCustomizationComponent],
  exports: [PaginationCustomizationComponent],
  bootstrap: [PaginationCustomizationComponent]
})
export class PaginationCustomizationModule { }
