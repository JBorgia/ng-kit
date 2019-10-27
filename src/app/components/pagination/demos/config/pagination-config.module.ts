import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmPaginationModule } from 'ng-kit';

import { PaginationConfigComponent } from './pagination-config';

@NgModule({
  imports: [BrowserModule, XmPaginationModule],
  declarations: [PaginationConfigComponent],
  exports: [PaginationConfigComponent],
  bootstrap: [PaginationConfigComponent]
})
export class PaginationConfigModule { }
