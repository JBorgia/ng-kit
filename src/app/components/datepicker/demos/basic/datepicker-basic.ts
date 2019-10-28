import { Component } from '@angular/core';
import { NgkCalendar, NgkDateStruct } from 'ng-kit';

@Component({
  selector: 'app-datepicker-basic',
  templateUrl: './datepicker-basic.html',
  styleUrls: ['./datepicker-basic.scss']
})
export class DatepickerBasicComponent {

  model: NgkDateStruct;
  date: { year: number, month: number };

  constructor(private calendar: NgkCalendar) {
  }

  selectToday() {
    this.model = this.calendar.getToday();
  }
}
