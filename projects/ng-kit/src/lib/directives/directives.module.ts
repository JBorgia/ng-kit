import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { XmFocusDirective } from './focus.directive';
import { XmResizedEventModule } from './resize/resize-event.module';

@NgModule({
  imports: [
    CommonModule,
    XmResizedEventModule,
  ],
  declarations: [
    XmFocusDirective,
  ],
  exports: [
    XmFocusDirective,
    XmResizedEventModule,
  ],
})
export class XmDirectivesModule { }
