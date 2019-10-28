import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgkDirectivesModule } from '../directives/directives.module';
import { NgkPopoverDirective, NgkPopoverWindowComponent } from './popover';

export { NgkPopoverDirective, NgkPopoverConfig } from './popover';
export { Placement } from '../util/positioning';
@NgModule({
  declarations: [NgkPopoverDirective, NgkPopoverWindowComponent],
  exports: [NgkPopoverDirective],
  imports: [CommonModule, NgkDirectivesModule],
  entryComponents: [NgkPopoverWindowComponent]
})
export class NgkPopoverModule { }
