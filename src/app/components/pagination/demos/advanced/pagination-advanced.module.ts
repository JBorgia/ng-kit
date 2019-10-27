import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmPaginationModule } from 'ng-kit';

import { PaginationAdvancedComponent } from './pagination-advanced';

@NgModule({
  imports: [BrowserModule, XmPaginationModule],
  declarations: [PaginationAdvancedComponent],
  exports: [PaginationAdvancedComponent],
  bootstrap: [PaginationAdvancedComponent]
})
export class PaginationAdvancedModule { }
