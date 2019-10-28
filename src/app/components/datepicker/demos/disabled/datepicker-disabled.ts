import { Component } from '@angular/core';
import { NgKitCalendar, NgKitDateStruct } from 'ng-kit';

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

  model: NgKitDateStruct;
  disabled = true;

  constructor(calendar: NgKitCalendar) {
    this.model = calendar.getToday();
  }
}
