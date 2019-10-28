import { NgModule } from '@angular/core';

import { NgKitTooltipDirective, NgKitTooltipWindowComponent } from './tooltip';

export { NgKitTooltipConfig, NgKitTooltipDirective } from './tooltip';
export { Placement } from '../util/positioning';

@NgModule({
  declarations: [
    NgKitTooltipDirective,
    NgKitTooltipWindowComponent
  ],
  exports: [
    NgKitTooltipDirective
  ],
  entryComponents: [
    NgKitTooltipWindowComponent
  ],
})
export class NgKitTooltipModule { }
