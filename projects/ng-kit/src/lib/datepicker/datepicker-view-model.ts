import { NgKitDate } from './date';
import { NgKitDateStruct } from './date-struct';
import { DayTemplateContext } from './datepicker-day-template-context';

export type NgKitMarkDisabled = (date: NgKitDateStruct, current: { year: number, month: number }) => boolean;
export type NgKitDayTemplateData = (date: NgKitDateStruct, current: { year: number, month: number }) => any;

/* tslint:disable:interface-over-type-literal */

export type DayViewModel = {
  date: NgKitDate,
  context: DayTemplateContext,
  tabindex: number,
  ariaLabel: string,
  hidden: boolean
};

export type WeekViewModel = {
  number: number,
  days: DayViewModel[],
  collapsed: boolean
};

export type MonthViewModel = {
  firstDate: NgKitDate,
  lastDate: NgKitDate,
  number: number,
  year: number,
  weeks: WeekViewModel[],
  weekdays: number[]
};

// clang-format off
export type DatepickerViewModel = {
  dayTemplateData?: NgKitDayTemplateData,
  disabled: boolean,
  displayMonths: number,
  firstDate?: NgKitDate,
  firstDayOfWeek: number,
  focusDate?: NgKitDate,
  focusVisible: boolean,
  lastDate?: NgKitDate,
  markDisabled?: NgKitMarkDisabled,
  maxDate?: NgKitDate,
  minDate?: NgKitDate,
  months: MonthViewModel[],
  navigation: 'select' | 'arrows' | 'none',
  outsideDays: 'visible' | 'collapsed' | 'hidden',
  prevDisabled: boolean,
  nextDisabled: boolean,
  selectBoxes: {
    years: number[],
    months: number[]
  },
  selectedDate: NgKitDate
};
// clang-format on

export enum NavigationEvent {
  PREV,
  NEXT
}
