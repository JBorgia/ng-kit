import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule, XmTableModule } from 'ng-kit';

import { TableBandedComponent } from './table-banded.component';

@NgModule({
  imports: [
    BrowserModule,
    XmButtonModule,
    XmTableModule
  ],
  declarations: [
    TableBandedComponent
  ],
  exports: [
    TableBandedComponent
  ],
  bootstrap: [
    TableBandedComponent
  ]
})
export class TableBandedModule { }
