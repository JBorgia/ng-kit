import { Component } from '@angular/core';

@Component({
  selector: 'app-progressbar-striped',
  templateUrl: './progressbar-striped.html',
  styles: [`
    ngk-progressbar {
      margin-bottom: 1em;
    }
    ngk-progressbar:last-of-type {
      margin-bottom: 0;
    }
  `]
})
export class ProgressbarStripedComponent {
}
