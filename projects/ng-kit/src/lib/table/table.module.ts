import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgKitDirectivesModule } from '../directives/directives.module';
import { NgKitTableComponent, NgKitTableHeaderCellDirective } from './table';

@NgModule({
  declarations: [
    NgKitTableComponent,
    NgKitTableHeaderCellDirective
  ],
  exports: [
    NgKitTableComponent,
    NgKitTableHeaderCellDirective
  ],
  imports: [
    CommonModule,
    NgKitDirectivesModule
  ]
})
export class NgKitTableModule { }
