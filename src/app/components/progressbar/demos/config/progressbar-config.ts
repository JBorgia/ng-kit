import { Component } from '@angular/core';
import { NgKitProgressbarConfig } from 'ng-kit';

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
  providers: [NgKitProgressbarConfig] // add the NgKitProgressbarConfig to the component providers
})
export class ProgressbarConfigComponent {
  constructor(config: NgKitProgressbarConfig) {
    // customize default values of progress bars used by this component tree
    config.max = 1000;
    config.striped = true;
    config.animated = true;
    config.type = 'success';
    config.height = '20px';
  }
}
