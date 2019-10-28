import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitPaginationModule } from 'ng-kit';

import { PaginationAdvancedComponent } from './pagination-advanced';

@NgModule({
  imports: [BrowserModule, NgKitPaginationModule],
  declarations: [PaginationAdvancedComponent],
  exports: [PaginationAdvancedComponent],
  bootstrap: [PaginationAdvancedComponent]
})
export class PaginationAdvancedModule { }
