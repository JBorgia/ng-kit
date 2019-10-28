import { Component } from '@angular/core';
import { NgkCalendar, NgkDate } from 'ng-kit';

@Component({
  selector: 'app-datepicker-range',
  templateUrl: './datepicker-range.html',
  styleUrls: ['./datepicker-range.scss'],
})
export class DatepickerRangeComponent {

  hoveredDate: NgkDate;

  fromDate: NgkDate;
  toDate: NgkDate;

  constructor(calendar: NgkCalendar) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  onDateSelection(date: NgkDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: NgkDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgkDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgkDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }
}
