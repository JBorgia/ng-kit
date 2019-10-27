import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule, XmTableModule } from 'ng-kit';

import { TableTableWidthsComponent } from './table-table-widths.component';

@NgModule({
  imports: [
    BrowserModule,
    XmButtonModule,
    XmTableModule,
  ],
  declarations: [
    TableTableWidthsComponent
  ],
  exports: [
    TableTableWidthsComponent
  ],
  bootstrap: [
    TableTableWidthsComponent
  ]
})
export class TableTableWidthsModule { }
