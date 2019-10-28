import { Component } from '@angular/core';

@Component({
  selector: 'app-progressbar-showvalue',
  templateUrl: './progressbar-showvalue.html',
  styles: [`
    ngk-progressbar {
      margin-bottom: 1em;
    }
    ngk-progressbar:last-of-type {
      margin-bottom: 0;
    }
  `]
})
export class ProgressbarShowvalueComponent {
}
