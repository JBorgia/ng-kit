import { Component } from '@angular/core';

@Component({
  selector: 'app-popover-visibility',
  templateUrl: './popover-visibility.html',
  styleUrls: ['./popover-visibility.scss']
})
export class PopoverVisibilityComponent {
  lastShown: Date;
  lastHidden: Date;

  recordShown() {
    this.lastShown = new Date();
  }

  recordHidden() {
    this.lastHidden = new Date();
  }
}
