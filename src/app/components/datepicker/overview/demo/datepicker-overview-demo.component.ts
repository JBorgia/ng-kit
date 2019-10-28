import { ChangeDetectionStrategy, Component } from '@angular/core';
import { NgkCalendar, NgkDate, NgkDateNativeAdapter } from 'ng-kit';

@Component({
  selector: 'app-datepicker-demo-overview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  template: `
    <div class="vacation-instructions">
      <h5>Vacations </h5>
      <p>
        from
        <b>{{ adapter.toModel(fromDate) | date : 'mediumDate' }}</b>
        to
        <b>{{ adapter.toModel(toDate ? toDate : hoveredDate) | date : 'mediumDate' }}</b>
      </p>
    </div>

    <ng-template #dayTemplate let-date let-disabled="disabled">
      <span class="custom-day" container="body"
            [class.holiday]="!!isHoliday(date)"
            [class.disabled]="disabled || isWeekend(date)"
            [class.range]="isRange(date)"
            [class.faded]="isHovered(date) || isInside(date)"
            (mouseenter)="hoveredDate = date"
            (mouseleave)="hoveredDate = null">
        {{ date.day }}
      </span>
    </ng-template>

    <ngk-datepicker
      (select)="onDateSelection($event)"
      [dayTemplate]="dayTemplate"
      [markDisabled]="markDisabled"
      [showWeekNumbers]="true"
      [minDate]="today"
      outsideDays="hidden"
      [displayMonths]="2">
    </ngk-datepicker>
  `,
  styleUrls: ['./datepicker-overview-demo.component.scss'],
  providers: [NgkDateNativeAdapter]
})

export class DatepickerOverviewDemoComponent {

  today: NgkDate;

  hoveredDate: NgkDate;

  fromDate: NgkDate;
  toDate: NgkDate;

  holidays: { month, day, text }[] = [
    { month: 1, day: 1, text: 'New Years Day' },
    { month: 3, day: 30, text: 'Good Friday (hi, Alsace!)' },
    { month: 5, day: 1, text: 'Labour Day' },
    { month: 5, day: 5, text: 'V-E Day' },
    { month: 7, day: 14, text: 'Bastille Day' },
    { month: 8, day: 15, text: 'Assumption Day' },
    { month: 11, day: 1, text: 'All Saints Day' },
    { month: 11, day: 11, text: 'Armistice Day' },
    { month: 12, day: 25, text: 'Christmas Day' }
  ];

  constructor(private calendar: NgkCalendar, public adapter: NgkDateNativeAdapter) {
    this.markDisabled = this.markDisabled.bind(this);
    this.today = calendar.getToday();
    this.fromDate = this.getFirstAvailableDate(this.today);
    this.toDate = this.getFirstAvailableDate(calendar.getNext(this.today, 'd', 15));
  }

  isHoliday(date: NgkDate): string {
    const holiday = this.holidays.find(h => h.day === date.day && h.month === date.month);
    return holiday ? holiday.text : '';
  }

  markDisabled(date: NgkDate, current: { month: number }) {
    return this.isHoliday(date) || (this.isWeekend(date) && date.month === current.month);
  }

  onDateSelection(date: NgkDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && (date.after(this.fromDate) || date.equals(this.fromDate))) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  getTooltip(date: NgkDate) {
    const holidayTooltip = this.isHoliday(date);

    if (holidayTooltip) {
      return holidayTooltip;
    } else if (this.isRange(date) && !this.isWeekend(date)) {
      return 'Vacations!';
    } else {
      return '';
    }
  }

  getFirstAvailableDate(date): NgkDate {
    while (this.isWeekend(date) || this.isHoliday(date)) {
      date = this.calendar.getNext(date, 'd', 1);
    }
    return date;
  }

  isWeekend(date: NgkDate) {
    return this.calendar.getWeekday(date) >= 6;
  }

  isRange(date: NgkDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }

  isHovered(date: NgkDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgkDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }
}
