import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { XmResizeDirective } from './resized.directive';

@NgModule({
  declarations: [XmResizeDirective],
  imports: [CommonModule],
  exports: [XmResizeDirective]
})
export class XmResizedEventModule { }
