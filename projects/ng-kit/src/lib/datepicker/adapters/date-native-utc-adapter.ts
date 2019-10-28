import { Injectable } from '@angular/core';

import { NgkDateStruct } from '../date-struct';
import { NgkDateNativeAdapter } from './date-native-adapter';

@Injectable()
export class NgkDateNativeUTCAdapter extends NgkDateNativeAdapter {
  protected _fromNativeDate(date: Date): NgkDateStruct {
    return { year: date.getUTCFullYear(), month: date.getUTCMonth() + 1, day: date.getUTCDate() };
  }

  protected _toNativeDate(date: NgkDateStruct): Date {
    const jsDate = new Date(Date.UTC(date.year, date.month - 1, date.day));
    // avoid 30 -> 1930 conversion
    jsDate.setUTCFullYear(date.year);
    return jsDate;
  }
}
