import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { NgKitButtonModule } from 'ng-kit';

import { IconTextComponent } from './buttons-icon-text.component';


@NgModule({
  imports: [
    CommonModule,
    NgKitButtonModule,
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
