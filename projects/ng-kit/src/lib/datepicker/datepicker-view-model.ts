import { NgkDate } from './date';
import { NgkDateStruct } from './date-struct';
import { DayTemplateContext } from './datepicker-day-template-context';

export type NgkMarkDisabled = (date: NgkDateStruct, current: { year: number, month: number }) => boolean;
export type NgkDayTemplateData = (date: NgkDateStruct, current: { year: number, month: number }) => any;

/* tslint:disable:interface-over-type-literal */

export type DayViewModel = {
  date: NgkDate,
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
  firstDate: NgkDate,
  lastDate: NgkDate,
  number: number,
  year: number,
  weeks: WeekViewModel[],
  weekdays: number[]
};

// clang-format off
export type DatepickerViewModel = {
  dayTemplateData?: NgkDayTemplateData,
  disabled: boolean,
  displayMonths: number,
  firstDate?: NgkDate,
  firstDayOfWeek: number,
  focusDate?: NgkDate,
  focusVisible: boolean,
  lastDate?: NgkDate,
  markDisabled?: NgkMarkDisabled,
  maxDate?: NgkDate,
  minDate?: NgkDate,
  months: MonthViewModel[],
  navigation: 'select' | 'arrows' | 'none',
  outsideDays: 'visible' | 'collapsed' | 'hidden',
  prevDisabled: boolean,
  nextDisabled: boolean,
  selectBoxes: {
    years: number[],
    months: number[]
  },
  selectedDate: NgkDate
};
// clang-format on

export enum NavigationEvent {
  PREV,
  NEXT
}
