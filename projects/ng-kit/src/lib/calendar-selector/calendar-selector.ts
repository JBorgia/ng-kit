import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

import { NgkDate } from '../datepicker/date';

export class NgkDateRange {
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
  selector: 'ngk-calendar-selector',
  templateUrl: './calendar-selector.component.html',
  styleUrls: ['./calendar-selector.component.scss']
})
export class CalendarSelectorComponent implements OnInit {
  @Input() maxDateSet: Date;
  @Input() dateRange: NgkDateRange;
  @Input() maxDateRange: number;
  @Input() startWeekOnSunday: boolean;
  hoveredDate: NgkDate;
  fromDate: NgkDate;
  toDate: NgkDate;
  @Output() dateSelected = new EventEmitter<NgkDateRange>();
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
    this.isDisabled = (data: NgkDate) => this.isDisabledMarker(data);
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

  convertToXMDate(date: Date): NgkDate {
    return new NgkDate(date.getFullYear(),
      date.getMonth() + 1,
      date.getDate());
  }

  convertFromXMDate(date: NgkDate): Date {
    const jsDate = new Date(date.year, date.month - 1, date.day);
    return jsDate;
  }

  // Written using if statement to make adding addtional conditions easier
  isDisabledMarker(ngkDate: NgkDate): Boolean {
    const date: Date = new Date(ngkDate.year, ngkDate.month - 1, ngkDate.day);
    if (date > this.maxDateSet) {
      return true;
    }
    return false;
  }

  onDateSelection(date: NgkDate) {
    if (!this.fromDate && !this.toDate) {
      this.fromDate = date;
    } else if (this.fromDate && !this.toDate && (date.after(this.fromDate) || date.equals(this.fromDate))) {
      // Really crazy logic to check if date is More than 30 days from the originally selected day
      const fromDateCompare = this.convertFromXMDate(this.fromDate);
      const maxDaysForward = new Date(fromDateCompare);
      maxDaysForward.setDate(fromDateCompare.getDate() + this.maxDateRange);
      const maxDaysForwardXM: NgkDate = this.convertToXMDate(maxDaysForward);
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
        new NgkDateRange(this.convertFromXMDate(this.fromDate),
          this.convertFromXMDate(this.toDate)
        )
      );
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
