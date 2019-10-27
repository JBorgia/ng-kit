import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule, XmTableModule } from 'ng-kit';

import { TableThWidthsComponent } from './table-th-widths.component';

@NgModule({
  imports: [
    BrowserModule,
    XmButtonModule,
    XmTableModule
  ],
  declarations: [
    TableThWidthsComponent
  ],
  exports: [
    TableThWidthsComponent
  ],
  bootstrap: [
    TableThWidthsComponent
  ]
})
export class TableThWidthsModule { }
