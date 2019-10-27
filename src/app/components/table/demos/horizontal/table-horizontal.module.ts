import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule, XmTableModule } from 'ng-kit';

import { TableHorizontalComponent } from './table-horizontal.component';


@NgModule({
  imports: [
    BrowserModule,
    XmButtonModule,
    XmTableModule
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
