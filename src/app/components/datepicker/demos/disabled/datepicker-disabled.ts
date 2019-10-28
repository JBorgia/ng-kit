import { Component } from '@angular/core';
import { NgkCalendar, NgkDateStruct } from 'ng-kit';

@Component({
  selector: 'app-datepicker-disabled',
  templateUrl: './datepicker-disabled.html',
  styles: [`
    .instructions {
      margin-bottom: 1em;
    }
    ngk-datepicker {
      margin-bottom: 1em;
    }
  `]
})
export class DatepickerDisabledComponent {

  model: NgkDateStruct;
  disabled = true;

  constructor(calendar: NgkCalendar) {
    this.model = calendar.getToday();
  }
}
