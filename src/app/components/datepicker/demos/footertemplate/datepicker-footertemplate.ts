import { Component } from '@angular/core';
import { NgKitCalendar, NgKitDateStruct } from 'ng-kit';

@Component({
  selector: 'app-datepicker-footertemplate',
  templateUrl: './datepicker-footertemplate.html',
  styleUrls: ['./datepicker-footertemplate.scss']
})
export class DatepickerFootertemplateComponent {
  model: NgKitDateStruct;
  today = this.calendar.getToday();

  constructor(private calendar: NgKitCalendar) { }
}
