import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmPaginationModule } from 'ng-kit';

import { PaginationBasicComponent } from './pagination-basic';

@NgModule({
  imports: [BrowserModule, XmPaginationModule],
  declarations: [PaginationBasicComponent],
  exports: [PaginationBasicComponent],
  bootstrap: [PaginationBasicComponent]
})
export class PaginationBasicModule { }
