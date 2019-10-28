import { Injectable } from '@angular/core';

import { NgKitDateStruct } from '../date-struct';
import { NgKitDateNativeAdapter } from './date-native-adapter';

@Injectable()
export class NgKitDateNativeUTCAdapter extends NgKitDateNativeAdapter {
  protected _fromNativeDate(date: Date): NgKitDateStruct {
    return { year: date.getUTCFullYear(), month: date.getUTCMonth() + 1, day: date.getUTCDate() };
  }

  protected _toNativeDate(date: NgKitDateStruct): Date {
    const jsDate = new Date(Date.UTC(date.year, date.month - 1, date.day));
    // avoid 30 -> 1930 conversion
    jsDate.setUTCFullYear(date.year);
    return jsDate;
  }
}
