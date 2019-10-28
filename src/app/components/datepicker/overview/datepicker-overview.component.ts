import { ChangeDetectionStrategy, Component } from '@angular/core';

import { Snippet } from '../../../demo-utility/code/snippet';
import { DemoList } from '../../shared/components.module';
import { Overview } from '../../shared/overview';

@Component({
  selector: 'app-datepicker-overview',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './datepicker-overview.component.html',
  styles: [`
    .instructions {
      margin-bottom: 1em;
    }
  `]
})

export class DatepickerOverviewComponent {

  snippets = {
    basic: Snippet({
      lang: 'html',
      code: `
        <!-- 1. inline datepicker -->
        <ngk-datepicker #d></ngk-datepicker>

        <!-- 2. datepicker in the popup -->
        <input type="text" ngkDatepicker #d="ngkDatepicker"/>
      `,
    }),
    popup: Snippet({
      lang: 'html',
      code: `
        <input type="text" ngkDatepicker #d="ngkDatepicker"/>
        <button (click)="d.toggle()">Toggle</button>
      `,
    }),
    form: Snippet({
      lang: 'html',
      code: `
        <input type="text" ngkDatepicker [(ngModel)]="date"/>
      `,
    }),
    selection: Snippet({
      lang: 'html',
      code: `
        <!-- inline -->
        <ngk-datepicker (select)="onDateSelect($event)"></ngk-datepicker>

        <!-- in the popup -->
        <input type="text" ngkDatepicker (dateSelect)="onDateSelect($event)"/>
      `,
    }),
    navigation: Snippet({
      lang: 'html',
      code: `
        <ngk-datepicker #d [startDate]="{year: 1789, month: 7}"></ngk-datepicker>
        <button (click)="d.navigateTo({year: 2048, month: 1})">Goto JAN 2048</button>
      `,
    }),
    dateStruct: Snippet({
      lang: 'typescript',
      code: `
        const date: NgkDateStruct = { year: 1789, month: 7, day: 14 }; // July, 14 1789
      `,
    }),
    date: Snippet({
      lang: 'typescript',
      code: `
        const date: NgkDate = new NgkDate(1789, 7, 14);                // July, 14 1789

        date.before({ year: 1789, month: 7, day: 14 });                // compare to a structure
        date.equals(NgkDate.from({ year: 1789, month: 7, day: 14 }));  // or to another date object
      `,
    }),
    nativeAdapter: Snippet({
      lang: 'typescript',
      code: `
        // native adapter is bundled with library
        providers: [{provide: NgkDateAdapter, useClass: NgkDateNativeAdapter}]

        // or another native adapter that works with UTC dates
        providers: [{provide: NgkDateAdapter, useClass: NgkDateNativeUTCAdapter}]
      `,
    }),
    adapter: Snippet({
      lang: 'typescript',
      code: `
        @Injectable()
        export abstract class NgkDateAdapter<D> {
          abstract fromModel(value: D): NgkDateStruct; // from your model -> internal model
          abstract toModel(date: NgkDateStruct): D; // from internal model -> your mode
        }

        // create your own if necessary
        providers: [{provide: NgkDateAdapter, useClass: YourOwnDateAdapter}]
      `,
    }),
    formatter: Snippet({
      lang: 'typescript',
      code: `
        @Injectable()
        export abstract class NgkDateParserFormatter {
          abstract parse(value: string): NgkDateStruct; // from input -> internal model
          abstract format(date: NgkDateStruct): string; // from internal model -> string
        }

        // create your own if necessary
        providers: [{provide: NgkDateParserFormatter, useClass: YourOwnParserFormatter}]
      `,
    }),
    dayTemplate: Snippet({
      lang: 'html',
      code: `
        <ng-template #t let-date>
        	{{ date.day }}
        </ng-template>

        <ngkDatepicker [dayTemplate]=“t”/>
      `,
    }),
    todayHTML: Snippet({
      lang: 'html',
      code: `
        <div class="ngk-dp-day ngk-dp-today">
          <!-- day cell content omitted -->
        </div>
      `,
    }),
    todayTemplate: Snippet({
      lang: 'html',
      code: `
        <ng-template #t let-today="today">
          <span *ngIf="today">...</span>
        </ng-template>

        <ngkDatepicker [dayTemplate]=“t”/>
      `,
    }),
    footerTemplate: Snippet({
      lang: 'html',
      code: `
        <ng-template #t>
          <button (click)="model = today">Today</button>
        </ng-template>

        <ngkDatepicker [footerTemplate]=“t”/>
      `,
    }),
    disablingTS: Snippet({
      lang: 'typescript',
      code: `
        // disable the 13th of each month
        const isDisabled = (date: NgkDate, current: {month: number}) => date.day === 13;
      `,
    }),
    disablingHTML: Snippet({
      lang: 'html',
      code: `
        <ngk-datepicker [minDate]="{year: 2010, month: 1, day: 1}"
                        [maxDate]="{year: 2048, month: 12, day: 31}"
                        [markDisabled]="isDisabled">
        </ngk-datepicker>
      `,
    }),
    i18n: Snippet({
      lang: 'typescript',
      code: `
        @Injectable()
        export abstract class NgkDatepickerI18n {
          abstract getWeekdayShortName(weekday: number): string;
          abstract getMonthShortName(month: number): string;
          abstract getMonthFullName(month: number): string;
          abstract getDayAriaLabel(date: NgkDateStruct): string;
        }

        // provide your own if necessary
        providers: [{provide: NgkDatepickerI18n, useClass: YourOwnDatepickerI18n}]
      `,
    }),
  };

  sections: Overview = {};

  constructor(demoList: DemoList) {
    this.sections = demoList.getOverviewSections('datepicker');
  }
}
