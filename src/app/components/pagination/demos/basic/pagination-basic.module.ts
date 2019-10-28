import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitPaginationModule } from 'ng-kit';

import { PaginationBasicComponent } from './pagination-basic';

@NgModule({
  imports: [BrowserModule, NgKitPaginationModule],
  declarations: [PaginationBasicComponent],
  exports: [PaginationBasicComponent],
  bootstrap: [PaginationBasicComponent]
})
export class PaginationBasicModule { }
