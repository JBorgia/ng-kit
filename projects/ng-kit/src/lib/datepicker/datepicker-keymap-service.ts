import { Injectable } from '@angular/core';

import { Key } from '../util/key';
import { NgkCalendar } from './calendar';
import { NgkDate } from './date';
import { NgkDatepickerService } from './datepicker-service';

@Injectable()
export class NgkDatepickerKeyMapService {
  private _minDate: NgkDate;
  private _maxDate: NgkDate;
  private _firstViewDate: NgkDate;
  private _lastViewDate: NgkDate;

  constructor(private _service: NgkDatepickerService, private _calendar: NgkCalendar) {
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
