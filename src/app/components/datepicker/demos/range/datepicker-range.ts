import { Component } from '@angular/core';
import { XmCalendar, XmDate } from 'ng-kit';

@Component({
  selector: 'app-datepicker-range',
  templateUrl: './datepicker-range.html',
  styleUrls: ['./datepicker-range.scss'],
})
export class DatepickerRangeComponent {

  hoveredDate: XmDate;

  fromDate: XmDate;
  toDate: XmDate;

  constructor(calendar: XmCalendar) {
    this.fromDate = calendar.getToday();
    this.toDate = calendar.getNext(calendar.getToday(), 'd', 10);
  }

  onDateSelection(date: XmDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && date.after(this.fromDate)) {
      this.toDate = date;
    } else {
      this.toDate = null;
      this.fromDate = date;
    }
  }

  isHovered(date: XmDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: XmDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: XmDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }
}
