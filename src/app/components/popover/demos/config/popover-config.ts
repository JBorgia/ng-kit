import { Component } from '@angular/core';
import { NgkPopoverConfig } from 'ng-kit';

@Component({
  selector: 'app-popover-config',
  templateUrl: './popover-config.html',
  providers: [NgkPopoverConfig] // add NgkPopoverConfig to the component providers
})
export class PopoverConfigComponent {
  constructor(config: NgkPopoverConfig) {
    // customize default values of popovers used by this component tree
    config.placement = 'right';
    config.triggers = 'hover';
  }
}
