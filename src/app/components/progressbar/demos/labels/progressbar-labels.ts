import { Component } from '@angular/core';

@Component({
  selector: 'app-progressbar-labels',
  templateUrl: './progressbar-labels.html',
  styles: [`
    ngk-progressbar {
      margin-bottom: 1em;
    }
    ngk-progressbar:last-of-type {
      margin-bottom: 0;
    }
  `]
})
export class ProgressbarLabelsComponent {
}
