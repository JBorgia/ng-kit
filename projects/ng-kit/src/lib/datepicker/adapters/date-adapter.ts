import { Injectable } from '@angular/core';

import { isInteger } from '../../util/util';
import { NgKitDateStruct } from '../date-struct';


/**
 * An abstract service that does the conversion between the internal datepicker `NgKitDateStruct` model and
 * any provided user date model `D`, ex. a string, a native date, etc.
 *
 * The adapter is used **only** for conversion when binding datepicker to a form control,
 * ex. `[(ngModel)]="userDateModel"`. Here `userDateModel` can be of any type.
 *
 * The default datepicker implementation assumes we use `NgKitDateStruct` as a user model.
 *
 */
@Injectable({ providedIn: 'root', useFactory: XM_DATEPICKER_DATE_ADAPTER_FACTORY })
export abstract class NgKitDateAdapter<D> {
  /**
   * Converts a user-model date of type `D` to an `NgKitDateStruct` for internal use.
   */
  abstract fromModel(value: D): NgKitDateStruct;

  /**
   * Converts an internal `NgKitDateStruct` date to a user-model date of type `D`.
   */
  abstract toModel(date: NgKitDateStruct): D;
}

@Injectable()
export class NgKitDateStructAdapter extends NgKitDateAdapter<NgKitDateStruct> {
  /**
   * Converts a NgKitDateStruct value into NgKitDateStruct value
   */
  fromModel(date: NgKitDateStruct): NgKitDateStruct {
    return (date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day)) ?
      { year: date.year, month: date.month, day: date.day } :
      null;
  }

  /**
   * Converts a NgKitDateStruct value into NgKitDateStruct value
   */
  toModel(date: NgKitDateStruct): NgKitDateStruct {
    return (date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day)) ?
      { year: date.year, month: date.month, day: date.day } :
      null;
  }
}

export function XM_DATEPICKER_DATE_ADAPTER_FACTORY() {
  return new NgKitDateStructAdapter();
}
