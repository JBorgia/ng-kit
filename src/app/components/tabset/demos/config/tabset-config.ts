import { Component } from '@angular/core';

import { XmTabsetConfig } from '../../../../../../projects/ng-kit/src/lib/tabset/tabset';

@Component({
  selector: 'app-tabset-config',
  templateUrl: './tabset-config.html',
  styleUrls: ['./tabset-config.scss'],
  providers: [XmTabsetConfig]
})
export class TabsetConfigComponent {
  constructor(config: XmTabsetConfig) {
    // customize default values of tabsets used by this component tree
    config.justify = 'end';
    config.type = 'pills';
  }
}
