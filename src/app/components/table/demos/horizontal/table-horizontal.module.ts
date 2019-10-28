import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkButtonModule, NgkTableModule } from 'ng-kit';

import { TableHorizontalComponent } from './table-horizontal.component';


@NgModule({
  imports: [
    BrowserModule,
    NgkButtonModule,
    NgkTableModule
  ],
  declarations: [
    TableHorizontalComponent
  ],
  exports: [
    TableHorizontalComponent
  ],
  bootstrap: [
    TableHorizontalComponent
  ]
})
export class TableHorizontalModule { }
