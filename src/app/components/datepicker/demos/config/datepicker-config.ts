import { Component } from '@angular/core';
import { NgKitCalendar, NgKitDate, NgKitDatepickerConfig, NgKitDateStruct } from 'ng-kit';

@Component({
  selector: 'app-datepicker-config',
  templateUrl: './datepicker-config.html',
  styles: [`
    .instructions {
      margin-bottom: 1em;
    }
  `],
  providers: [NgKitDatepickerConfig] // add NgKitDatepickerConfig to the component providers
})
export class DatepickerConfigComponent {

  model: NgKitDateStruct;

  constructor(config: NgKitDatepickerConfig, calendar: NgKitCalendar) {
    // customize default values of datepickers used by this component tree
    config.minDate = { year: 1900, month: 1, day: 1 };
    config.maxDate = { year: 2099, month: 12, day: 31 };

    // days that don't belong to current month are not visible
    config.outsideDays = 'hidden';

    // weekends are disabled
    config.markDisabled = (date: NgKitDate) => calendar.getWeekday(date) >= 6;
  }
}
