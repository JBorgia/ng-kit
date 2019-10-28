import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkButtonModule, NgkTableModule } from 'ng-kit';

import { TableThWidthsComponent } from './table-th-widths.component';

@NgModule({
  imports: [
    BrowserModule,
    NgkButtonModule,
    NgkTableModule
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
