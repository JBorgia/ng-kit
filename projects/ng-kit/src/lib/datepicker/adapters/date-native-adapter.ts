import { Injectable } from '@angular/core';

import { isInteger } from '../../util/util';
import { NgkDateStruct } from '../date-struct';
import { NgkDateAdapter } from './date-adapter';

/**
 * native javascript dates as a user date model.
 */
@Injectable()
export class NgkDateNativeAdapter extends NgkDateAdapter<Date> {
  /**
   * Converts a native `Date` to a `NgkDateStruct`.
   */
  fromModel(date: Date): NgkDateStruct {
    return (date instanceof Date && !isNaN(date.getTime())) ? this._fromNativeDate(date) : null;
  }

  /**
   * Converts a `NgkDateStruct` to a native `Date`.
   */
  toModel(date: NgkDateStruct): Date {
    return date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day) ? this._toNativeDate(date) :
      null;
  }

  protected _fromNativeDate(date: Date): NgkDateStruct {
    return { year: date.getFullYear(), month: date.getMonth() + 1, day: date.getDate() };
  }

  protected _toNativeDate(date: NgkDateStruct): Date {
    const jsDate = new Date(date.year, date.month - 1, date.day, 12);
    // avoid 30 -> 1930 conversion
    jsDate.setFullYear(date.year);
    return jsDate;
  }
}
