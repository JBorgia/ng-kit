import { Component } from '@angular/core';
import { XmCalendar, XmDate, XmDateStruct } from 'ng-kit';

@Component({
  selector: 'app-datepicker-customday',
  templateUrl: './datepicker-customday.html',
  styleUrls: ['./datepicker-customday.scss']
})
export class DatepickerCustomdayComponent {
  model: XmDateStruct;

  constructor(private calendar: XmCalendar) {
  }

  isDisabled = (date: XmDate, current: { month: number }) => date.month !== current.month;
  isWeekend = (date: XmDate) => this.calendar.getWeekday(date) >= 6;
}
