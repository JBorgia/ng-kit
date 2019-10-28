import { Component } from '@angular/core';
import { NgkCalendar, NgkDate, NgkDateStruct } from 'ng-kit';

@Component({
  selector: 'app-datepicker-customday',
  templateUrl: './datepicker-customday.html',
  styleUrls: ['./datepicker-customday.scss']
})
export class DatepickerCustomdayComponent {
  model: NgkDateStruct;

  constructor(private calendar: NgkCalendar) {
  }

  isDisabled = (date: NgkDate, current: { month: number }) => date.month !== current.month;
  isWeekend = (date: NgkDate) => this.calendar.getWeekday(date) >= 6;
}
