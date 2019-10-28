import { Component, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';

import { NgKitDate } from './date';
import { DayTemplateContext } from './datepicker-day-template-context';
import { NgKitDatepickerI18n } from './datepicker-i18n';
import { DayViewModel, MonthViewModel } from './datepicker-view-model';

@Component({
  selector: 'ng-kit-datepicker-month-view',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./datepicker-month-view.scss'],
  template: `
    <div *ngIf="showWeekdays" class="ng-kit-dp-weekdays">
      <div *ngIf="showWeekNumbers" class="ng-kit-dp-weekday ng-kit-dp-showweek"></div>
      <div *ngFor="let w of month.weekdays" class="ng-kit-dp-weekday small">
        {{ i18n.getWeekdayShortName(w) }}
      </div>
    </div>
    <ng-template ngFor let-week [ngForOf]="month.weeks">
      <div *ngIf="!week.collapsed" class="ng-kit-dp-week" role="row">
        <div *ngIf="showWeekNumbers" class="ng-kit-dp-week-number">
          <div>{{ i18n.getWeekNumerals(week.number) }}</div>
        </div>
        <div *ngFor="let day of week.days" (click)="doSelect(day)" class="ng-kit-dp-day" role="gridcell"
          [class.disabled]="day.context.disabled"
          [tabindex]="day.tabindex"
          [class.day-hidden]="day.hidden"
          [class.ng-kit-dp-today]="day.context.today"
          [attr.aria-label]="day.ariaLabel">
          <ng-template [ngIf]="!day.hidden">
            <ng-template [ngTemplateOutlet]="dayTemplate" [ngTemplateOutletContext]="day.context"></ng-template>
          </ng-template>
        </div>
      </div>
    </ng-template>
  `
})
export class NgKitDatepickerMonthViewComponent {
  @Input() dayTemplate: TemplateRef<DayTemplateContext>;
  @Input() month: MonthViewModel;
  @Input() showWeekdays;
  @Input() showWeekNumbers;

  @Output() select = new EventEmitter<NgKitDate>();

  constructor(public i18n: NgKitDatepickerI18n) { }

  doSelect(day: DayViewModel) {
    if (!day.context.disabled && !day.hidden) {
      this.select.emit(day.date);
    }
  }
}
