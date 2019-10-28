import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitButtonModule, NgKitTableModule } from 'ng-kit';

import { TableTableWidthsComponent } from './table-table-widths.component';

@NgModule({
  imports: [
    BrowserModule,
    NgKitButtonModule,
    NgKitTableModule,
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
