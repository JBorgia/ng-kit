import { Component } from '@angular/core';
import { NgKitCalendar, NgKitDate, NgKitDateStruct } from 'ng-kit';

@Component({
  selector: 'app-datepicker-customday',
  templateUrl: './datepicker-customday.html',
  styleUrls: ['./datepicker-customday.scss']
})
export class DatepickerCustomdayComponent {
  model: NgKitDateStruct;

  constructor(private calendar: NgKitCalendar) {
  }

  isDisabled = (date: NgKitDate, current: { month: number }) => date.month !== current.month;
  isWeekend = (date: NgKitDate) => this.calendar.getWeekday(date) >= 6;
}
