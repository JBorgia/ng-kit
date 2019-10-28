import { NgModule } from '@angular/core';

import { NgkTooltipDirective, NgkTooltipWindowComponent } from './tooltip';

export { NgkTooltipConfig, NgkTooltipDirective } from './tooltip';
export { Placement } from '../util/positioning';

@NgModule({
  declarations: [
    NgkTooltipDirective,
    NgkTooltipWindowComponent
  ],
  exports: [
    NgkTooltipDirective
  ],
  entryComponents: [
    NgkTooltipWindowComponent
  ],
})
export class NgkTooltipModule { }
