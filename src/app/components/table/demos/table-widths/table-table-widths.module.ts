import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkButtonModule, NgkTableModule } from 'ng-kit';

import { TableTableWidthsComponent } from './table-table-widths.component';

@NgModule({
  imports: [
    BrowserModule,
    NgkButtonModule,
    NgkTableModule,
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
