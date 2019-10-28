import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { NgKitDirectivesModule } from '../directives/directives.module';
import { NgKitPopoverDirective, NgKitPopoverWindowComponent } from './popover';

export { NgKitPopoverDirective, NgKitPopoverConfig } from './popover';
export { Placement } from '../util/positioning';
@NgModule({
  declarations: [NgKitPopoverDirective, NgKitPopoverWindowComponent],
  exports: [NgKitPopoverDirective],
  imports: [CommonModule, NgKitDirectivesModule],
  entryComponents: [NgKitPopoverWindowComponent]
})
export class NgKitPopoverModule { }
