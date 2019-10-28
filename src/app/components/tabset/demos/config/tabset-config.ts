import { Component } from '@angular/core';

import { NgkTabsetConfig } from '../../../../../../projects/ng-kit/src/lib/tabset/tabset';

@Component({
  selector: 'app-tabset-config',
  templateUrl: './tabset-config.html',
  styleUrls: ['./tabset-config.scss'],
  providers: [NgkTabsetConfig]
})
export class TabsetConfigComponent {
  constructor(config: NgkTabsetConfig) {
    // customize default values of tabsets used by this component tree
    config.justify = 'end';
    config.type = 'pills';
  }
}
