import { Component } from '@angular/core';
import { NgKitCalendar, NgKitDateStruct } from 'ng-kit';

@Component({
  selector: 'app-datepicker-basic',
  templateUrl: './datepicker-basic.html',
  styleUrls: ['./datepicker-basic.scss']
})
export class DatepickerBasicComponent {

  model: NgKitDateStruct;
  date: { year: number, month: number };

  constructor(private calendar: NgKitCalendar) {
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }
}
