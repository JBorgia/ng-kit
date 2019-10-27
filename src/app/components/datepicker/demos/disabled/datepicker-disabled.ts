import { Component } from '@angular/core';
import { XmCalendar, XmDateStruct } from 'ng-kit';

@Component({
  selector: 'app-datepicker-disabled',
  templateUrl: './datepicker-disabled.html',
  styles: [`
    .instructions {
      margin-bottom: 1em;
    }
    ng-kit-datepicker {
      margin-bottom: 1em;
    }
  `]
})
export class DatepickerDisabledComponent {

  model: XmDateStruct;
  disabled = true;

  constructor(calendar: XmCalendar) {
    this.model = calendar.getToday();
  }
}
