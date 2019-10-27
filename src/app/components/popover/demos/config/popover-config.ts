import { Component } from '@angular/core';
import { XmPopoverConfig } from 'ng-kit';

@Component({
  selector: 'app-popover-config',
  templateUrl: './popover-config.html',
  providers: [XmPopoverConfig] // add XmPopoverConfig to the component providers
})
export class PopoverConfigComponent {
  constructor(config: XmPopoverConfig) {
    // customize default values of popovers used by this component tree
    config.placement = 'right';
    config.triggers = 'hover';
  }
}
