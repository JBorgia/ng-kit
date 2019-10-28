import { Injectable } from '@angular/core';

import { isInteger } from '../../util/util';
import { NgKitDateStruct } from '../date-struct';
import { NgKitDateAdapter } from './date-adapter';

/**
 * native javascript dates as a user date model.
 */
@Injectable()
export class NgKitDateNativeAdapter extends NgKitDateAdapter<Date> {
  /**
   * Converts a native `Date` to a `NgKitDateStruct`.
   */
  fromModel(date: Date): NgKitDateStruct {
    return (date instanceof Date && !isNaN(date.getTime())) ? this._fromNativeDate(date) : null;
  }

  /**
   * Converts a `NgKitDateStruct` to a native `Date`.
   */
  toModel(date: NgKitDateStruct): Date {
    return date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) ? this._toNativeDate(date) :
      null;
  }

  protected _fromNativeDate(date: Date): NgKitDateStruct {
    return { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
  }

  protected _toNativeDate(date: NgKitDateStruct): Date {
    const jsDate = new Date(date.year, date.month - 1, date.day, 12);
    // avoid 30 -> 1930 conversion
    jsDate.setFullYear(date.year);
    return jsDate;
  }
}
