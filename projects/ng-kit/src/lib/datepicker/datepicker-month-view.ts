import { Component, EventEmitter, Input, Output, TemplateRef, ViewEncapsulation } from '@angular/core';

import { NgkDate } from './date';
import { DayTemplateContext } from './datepicker-day-template-context';
import { NgkDatepickerI18n } from './datepicker-i18n';
import { DayViewModel, MonthViewModel } from './datepicker-view-model';

@Component({
  selector: 'ngk-datepicker-month-view',
  encapsulation: ViewEncapsulation.None,
  styleUrls: ['./datepicker-month-view.scss'],
  template: `
    <div *ngIf="showWeekdays" class="ngk-dp-weekdays">
      <div *ngIf="showWeekNumbers" class="ngk-dp-weekday ngk-dp-showweek"></div>
      <div *ngFor="let w of month.weekdays" class="ngk-dp-weekday small">
        {{ i18n.getWeekdayShortName(w) }}
      </div>
    </div>
    <ng-template ngFor let-week [ngForOf]="month.weeks">
      <div *ngIf="!week.collapsed" class="ngk-dp-week" role="row">
        <div *ngIf="showWeekNumbers" class="ngk-dp-week-number">
          <div>{{ i18n.getWeekNumerals(week.number) }}</div>
        </div>
        <div *ngFor="let day of week.days" (click)="doSelect(day)" class="ngk-dp-day" role="gridcell"
          [class.disabled]="day.context.disabled"
          [tabindex]="day.tabindex"
          [class.day-hidden]="day.hidden"
          [class.ngk-dp-today]="day.context.today"
          [attr.aria-label]="day.ariaLabel">
          <ng-template [ngIf]="!day.hidden">
            <ng-template [ngTemplateOutlet]="dayTemplate" [ngTemplateOutletContext]="day.context"></ng-template>
          </ng-template>
        </div>
      </div>
    </ng-template>
  `
})
export class NgkDatepickerMonthViewComponent {
  @Input() dayTemplate: TemplateRef<DayTemplateContext>;
  @Input() month: MonthViewModel;
  @Input() showWeekdays;
  @Input() showWeekNumbers;

  @Output() select = new EventEmitter<NgkDate>();

  constructor(public i18n: NgkDatepickerI18n) { }

  doSelect(day: DayViewModel) {
    if (!day.context.disabled && !day.hidden) {
      this.select.emit(day.date);
    }
  }
}
