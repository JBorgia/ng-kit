import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkButtonModule, NgkTableModule } from 'ng-kit';

import { TableBandedComponent } from './table-banded.component';

@NgModule({
  imports: [
    BrowserModule,
    NgkButtonModule,
    NgkTableModule
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
