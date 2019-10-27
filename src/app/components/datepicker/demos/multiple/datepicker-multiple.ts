import { Component } from '@angular/core';

@Component({
  selector: 'app-datepicker-multiple',
  templateUrl: './datepicker-multiple.html',
  styleUrls: ['./datepicker-multiple.scss']
})
export class DatepickerMultipleComponent {

  displayMonths = 2;
  navigation = 'select';
  showWeekNumbers = false;
  outsideDays = 'visible';
}
