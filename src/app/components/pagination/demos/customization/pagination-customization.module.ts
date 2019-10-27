import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmPaginationModule } from 'ng-kit';

import { PaginationCustomizationComponent } from './pagination-customization';

@NgModule({
  imports: [BrowserModule, XmPaginationModule],
  declarations: [PaginationCustomizationComponent],
  exports: [PaginationCustomizationComponent],
  bootstrap: [PaginationCustomizationComponent]
})
export class PaginationCustomizationModule { }
