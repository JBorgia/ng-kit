import { Component } from '@angular/core';

@Component({
  selector: 'app-progressbar-height',
  templateUrl: './progressbar-height.html',
  styles: [`
    ngk-progressbar {
      margin-bottom: 1em;
    }
    ngk-progressbar:last-of-type {
      margin-bottom: 0;
    }
  `]
})
export class ProgressbarHeightComponent {
  height = '20px';
}
