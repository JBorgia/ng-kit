import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule, XmTableModule } from 'ng-kit';

import { TableDefaultComponent } from './table-default.component';

@NgModule({
  imports: [
    BrowserModule,
    XmButtonModule,
    XmTableModule
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
