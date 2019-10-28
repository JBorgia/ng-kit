import { Component } from '@angular/core';

@Component({
  selector: 'app-progressbar-basic',
  templateUrl: './progressbar-basic.html',
  styles: [`
    ngk-progressbar {
      margin-bottom: 1em;
    }
    ngk-progressbar:last-of-type {
      margin-bottom: 0;
    }
  `]
})
export class ProgressbarBasicComponent {
}
