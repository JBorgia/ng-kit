import { Component } from '@angular/core';
import { XmTooltipConfig } from 'ng-kit';

@Component({
  selector: 'app-tooltip-config',
  templateUrl: './tooltip-config.html',
  providers: [XmTooltipConfig] // add XmTooltipConfig to the component providers
})
export class TooltipConfigComponent {
  constructor(config: XmTooltipConfig) {
    // customize default values of tooltips used by this component tree
    config.placement = 'right';
    config.triggers = 'click';
  }
}
