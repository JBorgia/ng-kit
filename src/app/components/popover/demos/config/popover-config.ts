import { Component } from '@angular/core';
import { NgKitPopoverConfig } from 'ng-kit';

@Component({
  selector: 'app-popover-config',
  templateUrl: './popover-config.html',
  providers: [NgKitPopoverConfig] // add NgKitPopoverConfig to the component providers
})
export class PopoverConfigComponent {
  constructor(config: NgKitPopoverConfig) {
    // customize default values of popovers used by this component tree
    config.placement = 'right';
    config.triggers = 'hover';
  }
}
