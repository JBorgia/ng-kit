import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { XmDirectivesModule } from '../directives/directives.module';
import { XmPopoverDirective, XmPopoverWindowComponent } from './popover';

export { XmPopoverDirective, XmPopoverConfig } from './popover';
export { Placement } from '../util/positioning';
@NgModule({
  declarations: [XmPopoverDirective, XmPopoverWindowComponent],
  exports: [XmPopoverDirective],
  imports: [CommonModule, XmDirectivesModule],
  entryComponents: [XmPopoverWindowComponent]
})
export class XmPopoverModule { }
