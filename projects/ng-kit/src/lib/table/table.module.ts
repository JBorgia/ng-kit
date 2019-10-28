import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgkDirectivesModule } from '../directives/directives.module';
import { NgkTableComponent, NgkTableHeaderCellDirective } from './table';

@NgModule({
  declarations: [
    NgkTableComponent,
    NgkTableHeaderCellDirective
  ],
  exports: [
    NgkTableComponent,
    NgkTableHeaderCellDirective
  ],
  imports: [
    CommonModule,
    NgkDirectivesModule
  ]
})
export class NgkTableModule { }
