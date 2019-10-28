import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitButtonModule, NgKitTableModule } from 'ng-kit';

import { TableThWidthsComponent } from './table-th-widths.component';

@NgModule({
  imports: [
    BrowserModule,
    NgKitButtonModule,
    NgKitTableModule
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
