import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkButtonModule, NgkTableModule } from 'ng-kit';

import { TableDefaultComponent } from './table-default.component';

@NgModule({
  imports: [
    BrowserModule,
    NgkButtonModule,
    NgkTableModule
  ],
  declarations: [
    TableDefaultComponent
  ],
  exports: [
    TableDefaultComponent
  ],
  bootstrap: [
    TableDefaultComponent
  ]
})
export class TableDefaultModule { }
