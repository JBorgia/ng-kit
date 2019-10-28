import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitButtonModule, NgKitTableModule } from 'ng-kit';

import { TableTableVisibilityComponent } from './table-table-visibility.component';

@NgModule({
  imports: [
    BrowserModule,
    NgKitButtonModule,
    NgKitTableModule,
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
