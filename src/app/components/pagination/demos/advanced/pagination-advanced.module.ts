import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkPaginationModule } from 'ng-kit';

import { PaginationAdvancedComponent } from './pagination-advanced';

@NgModule({
  imports: [BrowserModule, NgkPaginationModule],
  declarations: [PaginationAdvancedComponent],
  exports: [PaginationAdvancedComponent],
  bootstrap: [PaginationAdvancedComponent]
})
export class PaginationAdvancedModule { }
