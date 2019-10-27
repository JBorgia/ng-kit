import { Component } from '@angular/core';
import { XmProgressbarConfig } from 'ng-kit';

@Component({
  selector: 'app-progressbar-config',
  templateUrl: './progressbar-config.html',
  styles: [`
    .instructions {
      margin-bottom: 1em;
    }
    ng-kit-progressbar {
      margin-bottom: 1em;
    }
    ng-kit-progressbar:last-of-type {
      margin-bottom: 0;
    }
  `],
  providers: [XmProgressbarConfig] // add the XmProgressbarConfig to the component providers
})
export class ProgressbarConfigComponent {
  constructor(config: XmProgressbarConfig) {
    // customize default values of progress bars used by this component tree
    config.max = 1000;
    config.striped = true;
    config.animated = true;
    config.type = 'success';
    config.height = '20px';
  }
}
