import {
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ElementRef,
  EventEmitter,
  forwardRef,
  HostBinding,
  Input,
  NgZone,
  OnChanges,
  OnDestroy,
  OnInit,
  Output,
  SimpleChanges,
  TemplateRef,
  ViewChild,
  ViewEncapsulation,
} from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';
import { fromEvent, merge, Subject } from 'rxjs';
import { filter, take, takeUntil } from 'rxjs/operators';

import { hasClassName } from '../util/util';
import { NgKitDateAdapter } from './adapters/date-adapter';
import { NgKitCalendar } from './calendar';
import { NgKitDate } from './date';
import { NgKitDateStruct } from './date-struct';
import { NgKitDatepickerConfig } from './datepicker-config';
import { DayTemplateContext } from './datepicker-day-template-context';
import { NgKitDatepickerI18n } from './datepicker-i18n';
import { NgKitDatepickerKeyMapService } from './datepicker-keymap-service';
import { NgKitDatepickerService } from './datepicker-service';
import { isChangedDate } from './datepicker-tools';
import { DatepickerViewModel, NavigationEvent } from './datepicker-view-model';

const XM_DATEPICKER_VALUE_ACCESSOR = {
  provide: NG_VALUE_ACCESSOR,
  useExisting: forwardRef(() => NgKitDatepickerComponent),
  multi: true
};

/**
 * An event emitted right before the navigation happens and the month displayed by the datepicker changes.
 */
export interface NgKitDatepickerNavigateEvent {
  /**
   * The currently displayed month.
   */
  current: { year: number, month: number };

  /**
   * The month we're navigating to.
   */
  next: { year: number, month: number };

  /**
   * Calling this function will prevent navigation from happening.
   *
   * @since 4.1.0
   */
  preventDefault: () => void;
}

/**
 * A highly configurable component that helps you with selecting calendar dates.
 *
 * `NgKitDatepicker` is meant to be displayed inline on a page or put inside a popup.
 */
@Component({
  exportAs: 'xmDatepicker',
  selector: 'ng-kit-datepicker',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./datepicker.scss'],
  template: `
    <ng-template #dt let-date="date" let-currentMonth="currentMonth" let-selected="selected" let-disabled="disabled" let-focused="focused">
      <ng-kit-datepicker-day-view
        [date]="date"
        [currentMonth]="currentMonth"
        [selected]="selected"
        [disabled]="disabled"
        [focused]="focused">
      </ng-kit-datepicker-day-view>
    </ng-template>

    <div class="ng-kit-dp-header">
      <ng-kit-datepicker-navigation *ngIf="navigation !== 'none'"
        [date]="model.firstDate"
        [months]="model.months"
        [disabled]="model.disabled"
        [showSelect]="model.navigation === 'select'"
        [prevDisabled]="model.prevDisabled"
        [nextDisabled]="model.nextDisabled"
        [selectBoxes]="model.selectBoxes"
        (navigate)="onNavigateEvent($event)"
        (select)="onNavigateDateSelect($event)">
      </ng-kit-datepicker-navigation>
    </div>

    <div #months class="ng-kit-dp-months" (keydown)="onKeyDown($event)">
      <ng-template ngFor let-month [ngForOf]="model.months" let-i="index">
        <div class="ng-kit-dp-month">
          <div *ngIf="navigation === 'none' || (displayMonths > 1 && navigation === 'select')"
                class="ng-kit-dp-month-name">
            <span>{{ i18n.getMonthFullName(month.number, month.year) }} {{ i18n.getYearNumerals(month.year) }}</span>
          </div>
          <ng-kit-datepicker-month-view
            [month]="month"
            [dayTemplate]="dayTemplate || dt"
            [showWeekdays]="showWeekdays"
            [showWeekNumbers]="showWeekNumbers"
            (select)="onDateSelect($event)">
          </ng-kit-datepicker-month-view>
        </div>
      </ng-template>
    </div>

    <ng-template [ngTemplateOutlet]="footerTemplate"></ng-template>
  `,
  providers: [XM_DATEPICKER_VALUE_ACCESSOR, NgKitDatepickerService, NgKitDatepickerKeyMapService]
})
export class NgKitDatepickerComponent implements OnDestroy,
  OnChanges, OnInit, ControlValueAccessor, AfterContentInit {
  model: DatepickerViewModel;

  @HostBinding('class.datepicker-flex') @Input() flex?: boolean;

  @ViewChild('months', { static: true }) private _monthsEl: ElementRef<HTMLElement>;
  private _controlValue: NgKitDate;
  private _destroyed$ = new Subject<void>();

  /**
   * The reference to a custom template for the day.
   *
   * Allows to completely override the way a day 'cell' in the calendar is displayed.
   *
   * See [`DayTemplateContext`](#/components/datepicker/api#DayTemplateContext) for the data you get inside.
   */
  @Input() dayTemplate: TemplateRef<DayTemplateContext>;

  /**
   * The callback to pass any arbitrary data to the template cell via the
   * [`DayTemplateContext`](#/components/datepicker/api#DayTemplateContext)'s `data` parameter.
   *
   * `current` is the month that is currently displayed by the datepicker.
   *
   * @since 3.3.0
   */
  @Input() dayTemplateData: (date: NgKitDate, current: { year: number, month: number }) => any;

  /**
   * The number of months to display.
   */
  @Input() displayMonths: number;

  /**
   * The first day of the week.
   *
   * With default calendar we use ISO 8601: 'weekday' is 1=Mon ... 7=Sun.
   */
  @Input() firstDayOfWeek: number;

  /**
   * The reference to the custom template for the datepicker footer.
   *
   * @since 3.3.0
   */
  @Input() footerTemplate: TemplateRef<any>;

  /**
   * The callback to mark some dates as disabled.
   *
   * It is called for each new date when navigating to a different month.
   *
   * `current` is the month that is currently displayed by the datepicker.
   */
  @Input() markDisabled: (date: NgKitDate, current: { year: number, month: number }) => boolean;

  /**
   * The latest date that can be displayed or selected.
   *
   * If not provided, 'year' select box will display 10 years after the current month.
   */
  @Input() maxDate: NgKitDateStruct;

  /**
   * The earliest date that can be displayed or selected.
   *
   * If not provided, 'year' select box will display 10 years before the current month.
   */
  @Input() minDate: NgKitDateStruct;

  /**
   * Navigation type.
   *
   * * `"select"` - select boxes for month and navigation arrows
   * * `"arrows"` - only navigation arrows
   * * `"none"` - no navigation visible at all
   */
  @Input() navigation: 'select' | 'arrows' | 'none';

  /**
   * The way of displaying days that don't belong to the current month.
   *
   * * `"visible"` - days are visible
   * * `"hidden"` - days are hidden, white space preserved
   * * `"collapsed"` - days are collapsed, so the datepicker height might change between months
   *
   * For the 2+ months view, days in between months are never shown.
   */
  @Input() outsideDays: 'visible' | 'collapsed' | 'hidden';

  /**
   * If `true`, weekdays will be displayed.
   */
  @Input() showWeekdays: boolean;

  /**
   * If `true`, week numbers will be displayed.
   */
  @Input() showWeekNumbers: boolean;

  /**
   * The date to open calendar with.
   *
   * With the default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
   * If nothing or invalid date is provided, calendar will open with current month.
   *
   * You could use `navigateTo(date)` method as an alternative.
   */
  @Input() startDate: { year: number, month: number, day?: number };

  /**
   * An event emitted right before the navigation happens and displayed month changes.
   *
   */
  @Output() navigate = new EventEmitter<NgKitDatepickerNavigateEvent>();

  /**
   * An event emitted when user selects a date using keyboard or mouse.
   *
   * The payload of the event is currently selected `NgKitDate`.
   */
  @Output() select = new EventEmitter<NgKitDate>();

  onChange = (_: any) => { };
  onTouched = () => { };

  @HostBinding('class.multiple-months') get multipleMonths() {
    return this.displayMonths > 1;
  }

  @HostBinding('class.navigation-none') get navigationTypeNone() {
    return this.navigation === 'none';
  }

  @HostBinding('class.navigation-arrows') get navigationTypeArrows() {
    return this.navigation === 'arrows';
  }

  constructor(
    private _keyMapService: NgKitDatepickerKeyMapService, public _service: NgKitDatepickerService,
    private _calendar: NgKitCalendar, public i18n: NgKitDatepickerI18n, config: NgKitDatepickerConfig,
    private _cd: ChangeDetectorRef, private _elementRef: ElementRef<HTMLElement>,
    private _xmDateAdapter: NgKitDateAdapter<any>, private _ngZone: NgZone) {
    ['dayTemplate', 'dayTemplateData', 'displayMonths', 'firstDayOfWeek', 'footerTemplate', 'markDisabled', 'minDate',
      'maxDate', 'navigation', 'outsideDays', 'showWeekdays', 'showWeekNumbers', 'startDate']
      .forEach(input => this[input] = config[input]);

    _service.select$.pipe(takeUntil(this._destroyed$)).subscribe(date => { this.select.emit(date); });

    _service.model$.pipe(takeUntil(this._destroyed$)).subscribe(model => {
      const newDate = model.firstDate;
      const oldDate = this.model ? this.model.firstDate : null;

      let navigationPrevented = false;
      // emitting navigation event if the first month changes
      if (!newDate.equals(oldDate)) {
        this.navigate.emit({
          current: oldDate ? { year: oldDate.year, month: oldDate.month } : null,
          next: { year: newDate.year, month: newDate.month },
          preventDefault: () => navigationPrevented = true
        });

        // can't prevent the very first navigation
        if (navigationPrevented && oldDate !== null) {
          this._service.reset(this.model);
          return;
        }
      }

      const newSelectedDate = model.selectedDate;
      const newFocusedDate = model.focusDate;
      const oldFocusedDate = this.model ? this.model.focusDate : null;

      this.model = model;

      // handling selection change
      if (isChangedDate(newSelectedDate, this._controlValue)) {
        this._controlValue = newSelectedDate;
        this.onTouched();
        this.onChange(this._xmDateAdapter.toModel(newSelectedDate));
      }

      // handling focus change
      if (isChangedDate(newFocusedDate, oldFocusedDate) && oldFocusedDate && model.focusVisible) {
        this.focus();
      }

      _cd.markForCheck();
    });
  }

  focus() {
    this._ngZone.onStable.asObservable().pipe(take(1)).subscribe(() => {
      const elementToFocus =
        this._elementRef.nativeElement.querySelector<HTMLDivElement>('div.ng-kit-dp-day[tabindex="0"]');
      if (elementToFocus) {
        elementToFocus.focus();
      }
    });
  }

  /**
   * Navigates to the provided date.
   *
   * With the default calendar we use ISO 8601: 'month' is 1=Jan ... 12=Dec.
   * If nothing or invalid date provided calendar will open current month.
   *
   * Use the `[startDate]` input as an alternative.
   */
  navigateTo(date?: { year: number, month: number, day?: number }) {
    this._service.open(NgKitDate.from(date ? date.day ? date as NgKitDateStruct : { ...date, day: 1 } : null));
  }

  ngAfterContentInit() {
    this._ngZone.runOutsideAngular(() => {
      const focusIns$ = fromEvent<FocusEvent>(this._monthsEl.nativeElement, 'focusin');
      const focusOuts$ = fromEvent<FocusEvent>(this._monthsEl.nativeElement, 'focusout');

      // we're changing 'focusVisible' only when entering or leaving months view
      // and ignoring all focus events where both 'target' and 'related' target are day cells
      merge(focusIns$, focusOuts$)
        .pipe(
          filter(
            ({ target, relatedTarget }) =>
              !(hasClassName(target, 'ng-kit-dp-day') && hasClassName(relatedTarget, 'ng-kit-dp-day'))),
          takeUntil(this._destroyed$))
        .subscribe(({ type }) => this._ngZone.run(() => this._service.focusVisible = type === 'focusin'));
    });
  }

  ngOnDestroy() { this._destroyed$.next(); }

  ngOnInit() {
    if (this.model === undefined) {
      ['dayTemplateData', 'displayMonths', 'markDisabled', 'firstDayOfWeek', 'navigation', 'minDate', 'maxDate',
        'outsideDays']
        .forEach(input => this._service[input] = this[input]);
      this.navigateTo(this.startDate);
    }
  }

  ngOnChanges(changes: SimpleChanges) {
    ['dayTemplateData', 'displayMonths', 'markDisabled', 'firstDayOfWeek', 'navigation', 'minDate', 'maxDate',
      'outsideDays']
      .filter(input => input in changes)
      .forEach(input => this._service[input] = this[input]);

    if ('startDate' in changes) {
      this.navigateTo(this.startDate);
    }
  }

  onDateSelect(date: NgKitDate) {
    this._service.focus(date);
    this._service.select(date, { emitEvent: true });
  }

  onKeyDown(event: KeyboardEvent) { this._keyMapService.processKey(event); }

  onNavigateDateSelect(date: NgKitDate) { this._service.open(date); }

  onNavigateEvent(event: NavigationEvent) {
    switch (event) {
      case NavigationEvent.PREV:
        this._service.open(this._calendar.getPrev(this.model.firstDate, 'm', 1));
        break;
      case NavigationEvent.NEXT:
        this._service.open(this._calendar.getNext(this.model.firstDate, 'm', 1));
        break;
    }
  }

  registerOnChange(fn: (value: any) => any): void { this.onChange = fn; }

  registerOnTouched(fn: () => any): void { this.onTouched = fn; }

  setDisabledState(isDisabled: boolean) { this._service.disabled = isDisabled; }

  writeValue(value) {
    this._controlValue = NgKitDate.from(this._xmDateAdapter.fromModel(value));
    this._service.select(this._controlValue);
  }
}
