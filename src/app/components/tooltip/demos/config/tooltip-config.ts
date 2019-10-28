import { Component } from '@angular/core';
import { NgkTooltipConfig } from 'ng-kit';

@Component({
  selector: 'app-tooltip-config',
  templateUrl: './tooltip-config.html',
  providers: [NgkTooltipConfig] // add NgkTooltipConfig to the component providers
})
export class TooltipConfigComponent {
  constructor(config: NgkTooltipConfig) {
    // customize default values of tooltips used by this component tree
    config.placement = 'right';
    config.triggers = 'click';
  }
}
