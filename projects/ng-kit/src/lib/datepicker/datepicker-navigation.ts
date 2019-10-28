import { ChangeDetectionStrategy, Component, EventEmitter, Input, Output, ViewEncapsulation } from '@angular/core';

import { NgkDate } from './date';
import { NgkDatepickerI18n } from './datepicker-i18n';
import { MonthViewModel, NavigationEvent } from './datepicker-view-model';

@Component({
  selector: 'ngk-datepicker-navigation',
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./datepicker-navigation.scss'],
  template: `
    <div class="ngk-dp-arrow left">
      <button type="button" class="ngk-dp-arrow-btn" (click)="navigate.emit(navigation.PREV)" [disabled]="prevDisabled"
              i18n-aria-label="@@ngk.datepicker.previous-month" aria-label="Previous month"
              i18n-title="@@ngk.datepicker.previous-month" title="Previous month">
        <span class="ngk-dp-navigation-chevron"></span>
      </button>
    </div>
    <ngk-datepicker-navigation-select *ngIf="showSelect" class="ngk-dp-navigation-select"
      [date]="date"
      [disabled] = "disabled"
      [months]="selectBoxes.months"
      [years]="selectBoxes.years"
      (select)="select.emit($event)">
    </ngk-datepicker-navigation-select>

    <ng-template *ngIf="!showSelect" ngFor let-month [ngForOf]="months" let-i="index">
      <div class="ngk-dp-arrow" *ngIf="i > 0"></div>
      <div class="ngk-dp-month-name">
        <span>{{ i18n.getMonthFullName(month.number, month.year) }} {{ i18n.getYearNumerals(month.year) }}</span>
      </div>
      <div class="ngk-dp-arrow" *ngIf="i !== months.length - 1"></div>
    </ng-template>
    <div class="ngk-dp-arrow right">
      <button type="button" class="ngk-dp-arrow-btn" (click)="navigate.emit(navigation.NEXT)" [disabled]="nextDisabled"
              i18n-aria-label="@@ngk.datepicker.next-month" aria-label="Next month"
              i18n-title="@@ngk.datepicker.next-month" title="Next month">
        <span class="ngk-dp-navigation-chevron"></span>
      </button>
    </div>
    `
})
export class NgkDatepickerNavigationComponent {
  navigation = NavigationEvent;

  @Input() date: NgkDate;
  @Input() disabled: boolean;
  @Input() months: MonthViewModel[] = [];
  @Input() showSelect: boolean;
  @Input() prevDisabled: boolean;
  @Input() nextDisabled: boolean;
  @Input() selectBoxes: { years: number[], months: number[] };

  @Output() navigate = new EventEmitter<NavigationEvent>();
  @Output() select = new EventEmitter<NgkDate>();

  constructor(public i18n: NgkDatepickerI18n) { }
}
