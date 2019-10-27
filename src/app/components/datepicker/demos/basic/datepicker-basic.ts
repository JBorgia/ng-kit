import { Component } from '@angular/core';
import { XmCalendar, XmDateStruct } from 'ng-kit';

@Component({
  selector: 'app-datepicker-basic',
  templateUrl: './datepicker-basic.html',
  styleUrls: ['./datepicker-basic.scss']
})
export class DatepickerBasicComponent {

  model: XmDateStruct;
  date: { year: number, month: number };

  constructor(private calendar: XmCalendar) {
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }
}
