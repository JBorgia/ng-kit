import { Component } from '@angular/core';

import { NgkDropdownConfig } from '../../../../../../projects/ng-kit/src/lib/dropdown/dropdown';

@Component({
  selector: 'app-dropdown-config',
  templateUrl: './dropdown-config.html',
  styleUrls: ['./dropdown-config.scss'],
  providers: [NgkDropdownConfig] // add NgkDropdownConfig to the component providers
})
export class DropdownConfigComponent {
  constructor(config: NgkDropdownConfig) {
    // customize default values of dropdowns used by this component tree
    config.placement = 'top-left';
    config.autoClose = false;
  }
}
