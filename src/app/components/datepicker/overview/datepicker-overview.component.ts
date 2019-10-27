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
        <ng-kit-datepicker #d></ng-kit-datepicker>

        <!-- 2. datepicker in the popup -->
        <input type="text" xmDatepicker #d="xmDatepicker"/>
      `,
    }),
    popup: Snippet({
      lang: 'html',
      code: `
        <input type="text" xmDatepicker #d="xmDatepicker"/>
        <button (click)="d.toggle()">Toggle</button>
      `,
    }),
    form: Snippet({
      lang: 'html',
      code: `
        <input type="text" xmDatepicker [(ngModel)]="date"/>
      `,
    }),
    selection: Snippet({
      lang: 'html',
      code: `
        <!-- inline -->
        <ng-kit-datepicker (select)="onDateSelect($event)"></ng-kit-datepicker>

        <!-- in the popup -->
        <input type="text" xmDatepicker (dateSelect)="onDateSelect($event)"/>
      `,
    }),
    navigation: Snippet({
      lang: 'html',
      code: `
        <ng-kit-datepicker #d [startDate]="{year: 1789, month: 7}"></ng-kit-datepicker>
        <button (click)="d.navigateTo({year: 2048, month: 1})">Goto JAN 2048</button>
      `,
    }),
    dateStruct: Snippet({
      lang: 'typescript',
      code: `
        const date: XmDateStruct = { year: 1789, month: 7, day: 14 }; // July, 14 1789
      `,
    }),
    date: Snippet({
      lang: 'typescript',
      code: `
        const date: XmDate = new XmDate(1789, 7, 14);                // July, 14 1789

        date.before({ year: 1789, month: 7, day: 14 });                // compare to a structure
        date.equals(XmDate.from({ year: 1789, month: 7, day: 14 }));  // or to another date object
      `,
    }),
    nativeAdapter: Snippet({
      lang: 'typescript',
      code: `
        // native adapter is bundled with library
        providers: [{provide: XmDateAdapter, useClass: XmDateNativeAdapter}]

        // or another native adapter that works with UTC dates
        providers: [{provide: XmDateAdapter, useClass: XmDateNativeUTCAdapter}]
      `,
    }),
    adapter: Snippet({
      lang: 'typescript',
      code: `
        @Injectable()
        export abstract class XmDateAdapter<D> {
          abstract fromModel(value: D): XmDateStruct; // from your model -> internal model
          abstract toModel(date: XmDateStruct): D; // from internal model -> your mode
        }

        // create your own if necessary
        providers: [{provide: XmDateAdapter, useClass: YourOwnDateAdapter}]
      `,
    }),
    formatter: Snippet({
      lang: 'typescript',
      code: `
        @Injectable()
        export abstract class XmDateParserFormatter {
          abstract parse(value: string): XmDateStruct; // from input -> internal model
          abstract format(date: XmDateStruct): string; // from internal model -> string
        }

        // create your own if necessary
        providers: [{provide: XmDateParserFormatter, useClass: YourOwnParserFormatter}]
      `,
    }),
    dayTemplate: Snippet({
      lang: 'html',
      code: `
        <ng-template #t let-date>
        	{{ date.day }}
        </ng-template>

        <xmDatepicker [dayTemplate]=“t”/>
      `,
    }),
    todayHTML: Snippet({
      lang: 'html',
      code: `
        <div class="ng-kit-dp-day ng-kit-dp-today">
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

        <xmDatepicker [dayTemplate]=“t”/>
      `,
    }),
    footerTemplate: Snippet({
      lang: 'html',
      code: `
        <ng-template #t>
          <button (click)="model = today">Today</button>
        </ng-template>

        <xmDatepicker [footerTemplate]=“t”/>
      `,
    }),
    disablingTS: Snippet({
      lang: 'typescript',
      code: `
        // disable the 13th of each month
        const isDisabled = (date: XmDate, current: {month: number}) => date.day === 13;
      `,
    }),
    disablingHTML: Snippet({
      lang: 'html',
      code: `
        <ng-kit-datepicker [minDate]="{year: 2010, month: 1, day: 1}"
                        [maxDate]="{year: 2048, month: 12, day: 31}"
                        [markDisabled]="isDisabled">
        </ng-kit-datepicker>
      `,
    }),
    i18n: Snippet({
      lang: 'typescript',
      code: `
        @Injectable()
        export abstract class XmDatepickerI18n {
          abstract getWeekdayShortName(weekday: number): string;
          abstract getMonthShortName(month: number): string;
          abstract getMonthFullName(month: number): string;
          abstract getDayAriaLabel(date: XmDateStruct): string;
        }

        // provide your own if necessary
        providers: [{provide: XmDatepickerI18n, useClass: YourOwnDatepickerI18n}]
      `,
    }),
  };

  sections: Overview = {};

  constructor(demoList: DemoList) {
    this.sections = demoList.getOverviewSections('datepicker');
  }
}
