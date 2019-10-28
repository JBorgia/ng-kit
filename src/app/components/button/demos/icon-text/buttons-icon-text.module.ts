import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgkButtonModule } from 'ng-kit';

import { IconTextComponent } from './buttons-icon-text.component';


@NgModule({
  imports: [
    CommonModule,
    NgkButtonModule,
  ],
  declarations: [
    IconTextComponent
  ],
  exports: [
    IconTextComponent
  ],
  bootstrap: [
    IconTextComponent
  ]
})
export class IconTextModule { }
