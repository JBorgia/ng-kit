import { Injectable } from '@angular/core';

import { Key } from '../util/key';
import { NgKitCalendar } from './calendar';
import { NgKitDate } from './date';
import { NgKitDatepickerService } from './datepicker-service';

@Injectable()
export class NgKitDatepickerKeyMapService {
  private _minDate: NgKitDate;
  private _maxDate: NgKitDate;
  private _firstViewDate: NgKitDate;
  private _lastViewDate: NgKitDate;

  constructor(private _service: NgKitDatepickerService, private _calendar: NgKitCalendar) {
    _service.model$.subscribe(model => {
      this._minDate = model.minDate;
      this._maxDate = model.maxDate;
      this._firstViewDate = model.firstDate;
      this._lastViewDate = model.lastDate;
    });
  }

  processKey(event: KeyboardEvent) {
    // tslint:disable-next-line:deprecation
    switch (event.which) {
      case Key.PageUp:
        this._service.focusMove(event.shiftKey ? 'y' : 'm', -1);
        break;
      case Key.PageDown:
        this._service.focusMove(event.shiftKey ? 'y' : 'm', 1);
        break;
      case Key.End:
        this._service.focus(event.shiftKey ? this._maxDate : this._lastViewDate);
        break;
      case Key.Home:
        this._service.focus(event.shiftKey ? this._minDate : this._firstViewDate);
        break;
      case Key.ArrowLeft:
        this._service.focusMove('d', -1);
        break;
      case Key.ArrowUp:
        this._service.focusMove('d', -this._calendar.getDaysPerWeek());
        break;
      case Key.ArrowRight:
        this._service.focusMove('d', 1);
        break;
      case Key.ArrowDown:
        this._service.focusMove('d', this._calendar.getDaysPerWeek());
        break;
      case Key.Enter:
      case Key.Space:
        this._service.focusSelect();
        break;
      default:
        return;
    }

    // note 'return' in default case
    event.preventDefault();
    event.stopPropagation();
  }
}
