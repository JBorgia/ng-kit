import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { NgKitButtonModule, NgKitTableModule } from 'ng-kit';

import { TableHorizontalComponent } from './table-horizontal.component';


@NgModule({
  imports: [
    BrowserModule,
    NgKitButtonModule,
    NgKitTableModule
  ],
  declarations: [
    TableHorizontalComponent
  ],
  exports: [
    TableHorizontalComponent
  ],
  bootstrap: [
    TableHorizontalComponent
  ]
})
export class TableHorizontalModule { }
