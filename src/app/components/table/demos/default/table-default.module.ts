import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitButtonModule, NgKitTableModule } from 'ng-kit';

import { TableDefaultComponent } from './table-default.component';

@NgModule({
  imports: [
    BrowserModule,
    NgKitButtonModule,
    NgKitTableModule
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
