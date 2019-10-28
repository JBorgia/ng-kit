import { Component } from '@angular/core';
import { NgkCalendar, NgkDateStruct } from 'ng-kit';

@Component({
  selector: 'app-datepicker-footertemplate',
  templateUrl: './datepicker-footertemplate.html',
  styleUrls: ['./datepicker-footertemplate.scss']
})
export class DatepickerFootertemplateComponent {
  model: NgkDateStruct;
  today = this.calendar.getToday();

  constructor(private calendar: NgkCalendar) { }
}
