import { Component } from '@angular/core';
import { XmCalendar, XmDateStruct } from 'ng-kit';

@Component({
  selector: 'app-datepicker-footertemplate',
  templateUrl: './datepicker-footertemplate.html',
  styleUrls: ['./datepicker-footertemplate.scss']
})
export class DatepickerFootertemplateComponent {
  model: XmDateStruct;
  today = this.calendar.getToday();

  constructor(private calendar: XmCalendar) { }
}
