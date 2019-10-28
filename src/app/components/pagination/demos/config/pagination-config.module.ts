import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitPaginationModule } from 'ng-kit';

import { PaginationConfigComponent } from './pagination-config';

@NgModule({
  imports: [BrowserModule, NgKitPaginationModule],
  declarations: [PaginationConfigComponent],
  exports: [PaginationConfigComponent],
  bootstrap: [PaginationConfigComponent]
})
export class PaginationConfigModule { }
