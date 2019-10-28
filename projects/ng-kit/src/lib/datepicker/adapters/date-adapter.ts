import { Injectable } from '@angular/core';

import { isInteger } from '../../util/util';
import { NgkDateStruct } from '../date-struct';


/**
 * An abstract service that does the conversion between the internal datepicker `NgkDateStruct` model and
 * any provided user date model `D`, ex. a string, a native date, etc.
 *
 * The adapter is used **only** for conversion when binding datepicker to a form control,
 * ex. `[(ngModel)]="userDateModel"`. Here `userDateModel` can be of any type.
 *
 * The default datepicker implementation assumes we use `NgkDateStruct` as a user model.
 *
 */
@Injectable({ providedIn: 'root', useFactory: XM_DATEPICKER_DATE_ADAPTER_FACTORY })
export abstract class NgkDateAdapter<D> {
  /**
   * Converts a user-model date of type `D` to an `NgkDateStruct` for internal use.
   */
  abstract fromModel(value: D): NgkDateStruct;

  /**
   * Converts an internal `NgkDateStruct` date to a user-model date of type `D`.
   */
  abstract toModel(date: NgkDateStruct): D;
}

@Injectable()
export class NgkDateStructAdapter extends NgkDateAdapter<NgkDateStruct> {
  /**
   * Converts a NgkDateStruct value into NgkDateStruct value
   */
  fromModel(date: NgkDateStruct): NgkDateStruct {
    return (date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day)) ?
      { year: date.year, month: date.month, day: date.day } :
      null;
  }

  /**
   * Converts a NgkDateStruct value into NgkDateStruct value
   */
  toModel(date: NgkDateStruct): NgkDateStruct {
    return (date && isInteger(date.year) && isInteger(date.month) && isInteger(date.day)) ?
      { year: date.year, month: date.month, day: date.day } :
      null;
  }
}

export function XM_DATEPICKER_DATE_ADAPTER_FACTORY() {
  return new NgkDateStructAdapter();
}
