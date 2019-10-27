import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { XmDirectivesModule } from '../directives/directives.module';
import { XmTableComponent, XmTableHeaderCellDirective } from './table';

@NgModule({
  declarations: [
    XmTableComponent,
    XmTableHeaderCellDirective
  ],
  exports: [
    XmTableComponent,
    XmTableHeaderCellDirective
  ],
  imports: [
    CommonModule,
    XmDirectivesModule
  ]
})
export class XmTableModule { }
