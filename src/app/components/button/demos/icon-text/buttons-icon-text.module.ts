import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { XmButtonModule } from 'ng-kit';

import { IconTextComponent } from './buttons-icon-text.component';


@NgModule({
  imports: [
    CommonModule,
    XmButtonModule,
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
