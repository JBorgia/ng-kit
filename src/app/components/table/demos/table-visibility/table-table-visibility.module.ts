import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgkButtonModule, NgkTableModule } from 'ng-kit';

import { TableTableVisibilityComponent } from './table-table-visibility.component';

@NgModule({
  imports: [
    BrowserModule,
    NgkButtonModule,
    NgkTableModule,
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
