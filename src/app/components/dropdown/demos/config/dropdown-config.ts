import { Component } from '@angular/core';

import { NgKitDropdownConfig } from '../../../../../../projects/ng-kit/src/lib/dropdown/dropdown';

@Component({
  selector: 'app-dropdown-config',
  templateUrl: './dropdown-config.html',
  styleUrls: ['./dropdown-config.scss'],
  providers: [NgKitDropdownConfig] // add NgKitDropdownConfig to the component providers
})
export class DropdownConfigComponent {
  constructor(config: NgKitDropdownConfig) {
    // customize default values of dropdowns used by this component tree
    config.placement = 'top-left';
    config.autoClose = false;
  }
}
