import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgkResizeDirective } from './resize.directive';

@NgModule({
  declarations: [NgkResizeDirective],
  imports: [CommonModule],
  exports: [NgkResizeDirective]
})
export class NgkResizedEventModule { }
