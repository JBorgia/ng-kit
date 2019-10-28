import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { NgKitDate } from '../datepicker/date';

export class NgKitDateRange {
  fromDate: Date;
  toDate: Date;

  constructor(fromDate?: Date, toDate?: Date) {
    this.fromDate = fromDate;
    this.toDate = toDate;
  }

  private dateStringConverter(date: Date): string {
    return `${date.getFullYear()}-${('0' + (date.getMonth() + 1)).slice(-2)}-${('0' + date.getDate()).slice(-2)}`;
  }

  printDateRange(): string {
    let str = '';
    if (this.fromDate) {
      str += this.dateStringConverter(this.fromDate);
    }
    str += ' - ';
    if (this.toDate) {
      str += this.dateStringConverter(this.toDate);
    }
    return str;
  }
}

@Component({
  selector: 'ng-kit-calendar-selector',
  templateUrl: './calendar-selector.component.html',
  styleUrls: ['./calendar-selector.component.scss']
})
export class CalendarSelectorComponent implements OnInit {
  @Input() maxDateSet: Date;
  @Input() dateRange: NgKitDateRange;
  @Input() maxDateRange: number;
  @Input() startWeekOnSunday: boolean;
  hoveredDate: NgKitDate;
  fromDate: NgKitDate;
  toDate: NgKitDate;
  @Output() dateSelected = new EventEmitter<NgKitDateRange>();
  @Output() notifyDateOutOfRange = new EventEmitter<string>();
  isDisabled: Function;

  constructor() { }

  ngOnInit(): void {
    if (this.dateRange && this.dateRange.fromDate) {
      this.fromDate = this.convertToXMDate(this.dateRange.fromDate);
    }
    if (this.dateRange && this.dateRange.toDate) {
      this.toDate = this.convertToXMDate(this.dateRange.toDate);
    }
    // TODO: This needs to be converted to an input parameter
    this.isDisabled = (data: NgKitDate) => this.isDisabledMarker(data);
  }

  get placeholderString(): string {
    return this.dateRange.printDateRange();
  }

  appendClass(): void {
    const ref = document.getElementsByClassName('show');
    if (ref.length) {
      ref.item(0).className += ' date-picker-popup';
    }
  }

  convertToXMDate(date: Date): NgKitDate {
    return new NgKitDate(date.getFullYear(),
      date.getMonth() + 1,
      date.getDate());
  }

  convertFromXMDate(date: NgKitDate): Date {
    const jsDate = new Date(date.year, date.month - 1, date.day);
    return jsDate;
  }

  // Written using if statement to make adding addtional conditions easier
  isDisabledMarker(xmDate: NgKitDate): Boolean {
    const date: Date = new Date(xmDate.year, xmDate.month - 1, xmDate.day);
    if (date > this.maxDateSet) {
      return true;
    }
    return false;
  }

  onDateSelection(date: NgKitDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && (date.after(this.fromDate) || date.equals(this.fromDate))) {
      // Really crazy logic to check if date is More than 30 days from the originally selected day
      const fromDateCompare = this.convertFromXMDate(this.fromDate);
      const maxDaysForward = new Date(fromDateCompare);
      maxDaysForward.setDate(fromDateCompare.getDate() + this.maxDateRange);
      const maxDaysForwardXM: NgKitDate = this.convertToXMDate(maxDaysForward);
      if (date.after(maxDaysForwardXM)) {
        this.notifyDateOutOfRange.emit(`Date range cannot extend more than ${this.maxDateRange} days. Please remake your selection.`);
        this.toDate = null;
        this.fromDate = null;
        this.hoveredDate = null;
      } else {
        this.toDate = date;
      }
    } else {
      this.toDate = null;
      this.fromDate = date;
    }

    if (this.fromDate && this.toDate) {
      this.dateSelected.emit(
        new NgKitDateRange(this.convertFromXMDate(this.fromDate),
          this.convertFromXMDate(this.toDate)
        )
      );
    }
  }

  isHovered(date: NgKitDate) {
    return this.fromDate && !this.toDate && this.hoveredDate && date.after(this.fromDate) && date.before(this.hoveredDate);
  }

  isInside(date: NgKitDate) {
    return date.after(this.fromDate) && date.before(this.toDate);
  }

  isRange(date: NgKitDate) {
    return date.equals(this.fromDate) || date.equals(this.toDate) || this.isInside(date) || this.isHovered(date);
  }

}
