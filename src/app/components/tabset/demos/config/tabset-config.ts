import { Component } from '@angular/core';

import { NgKitTabsetConfig } from '../../../../../../projects/ng-kit/src/lib/tabset/tabset';

@Component({
  selector: 'app-tabset-config',
  templateUrl: './tabset-config.html',
  styleUrls: ['./tabset-config.scss'],
  providers: [NgKitTabsetConfig]
})
export class TabsetConfigComponent {
  constructor(config: NgKitTabsetConfig) {
    // customize default values of tabsets used by this component tree
    config.justify = 'end';
    config.type = 'pills';
  }
}
