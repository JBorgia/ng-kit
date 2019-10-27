import { Component } from '@angular/core';

@Component({
  selector: 'app-progressbar-striped',
  templateUrl: './progressbar-striped.html',
  styles: [`
    ng-kit-progressbar {
      margin-bottom: 1em;
    }
    ng-kit-progressbar:last-of-type {
      margin-bottom: 0;
    }
  `]
})
export class ProgressbarStripedComponent {
}
