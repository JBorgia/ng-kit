import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitButtonModule, NgKitTableModule } from 'ng-kit';

import { TableBandedComponent } from './table-banded.component';

@NgModule({
  imports: [
    BrowserModule,
    NgKitButtonModule,
    NgKitTableModule
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
