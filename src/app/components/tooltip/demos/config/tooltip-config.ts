import { Component } from '@angular/core';
import { NgKitTooltipConfig } from 'ng-kit';

@Component({
  selector: 'app-tooltip-config',
  templateUrl: './tooltip-config.html',
  providers: [NgKitTooltipConfig] // add NgKitTooltipConfig to the component providers
})
export class TooltipConfigComponent {
  constructor(config: NgKitTooltipConfig) {
    // customize default values of tooltips used by this component tree
    config.placement = 'right';
    config.triggers = 'click';
  }
}
