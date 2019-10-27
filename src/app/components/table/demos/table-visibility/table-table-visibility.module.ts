import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { XmButtonModule, XmTableModule } from 'ng-kit';

import { TableTableVisibilityComponent } from './table-table-visibility.component';

@NgModule({
  imports: [
    BrowserModule,
    XmButtonModule,
    XmTableModule,
  ],
  declarations: [
    TableTableVisibilityComponent
  ],
  exports: [
    TableTableVisibilityComponent
  ],
  bootstrap: [
    TableTableVisibilityComponent
  ]
})
export class TableTableVisibilityModule { }
