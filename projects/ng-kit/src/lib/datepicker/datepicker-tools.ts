import { isDefined } from '../util/util';
import { NgkCalendar } from './calendar';
import { NgkDate } from './date';
import { NgkDatepickerI18n } from './datepicker-i18n';
import { DatepickerViewModel, DayViewModel, MonthViewModel } from './datepicker-view-model';

export function isChangedDate(prev: NgkDate, next: NgkDate) {
  return !dateComparator(prev, next);
}

export function dateComparator(prev: NgkDate, next: NgkDate) {
  return (!prev && !next) || (!!prev && !!next && prev.equals(next));
}

export function checkMinBeforeMax(minDate: NgkDate, maxDate: NgkDate) {
  if (maxDate && minDate && maxDate.before(minDate)) {
    throw new Error(`'maxDate' ${maxDate} should be greater than 'minDate' ${minDate}`);
  }
}

export function checkDateInRange(date: NgkDate, minDate: NgkDate, maxDate: NgkDate): NgkDate {
  if (date && minDate && date.before(minDate)) {
    return minDate;
  }
  if (date && maxDate && date.after(maxDate)) {
    return maxDate;
  }

  return date;
}

export function isDateSelectable(date: NgkDate, state: DatepickerViewModel) {
  const { minDate, maxDate, disabled, markDisabled } = state;
  // clang-format off
  return !(
    !isDefined(date) ||
    disabled ||
    (markDisabled && markDisabled(date, { year: date.year, month: date.month })) ||
    (minDate && date.before(minDate)) ||
    (maxDate && date.after(maxDate))
  );
  // clang-format on
}

export function generateSelectBoxMonths(calendar: NgkCalendar, date: NgkDate, minDate: NgkDate, maxDate: NgkDate) {
  if (!date) {
    return [];
  }

  let months = calendar.getMonths(date.year);

  if (minDate && date.year === minDate.year) {
    const index = months.findIndex(month => month === minDate.month);
    months = months.slice(index);
  }

  if (maxDate && date.year === maxDate.year) {
    const index = months.findIndex(month => month === maxDate.month);
    months = months.slice(0, index + 1);
  }

  return months;
}

export function generateSelectBoxYears(date: NgkDate, minDate: NgkDate, maxDate: NgkDate) {
  if (!date) {
    return [];
  }

  const start = minDate && minDate.year || date.year - 10;
  const end = maxDate && maxDate.year || date.year + 10;

  return Array.from({ length: end - start + 1 }, (e, i) => start + i);
}

export function nextMonthDisabled(calendar: NgkCalendar, date: NgkDate, maxDate: NgkDate) {
  return maxDate && calendar.getNext(date, 'm').after(maxDate);
}

export function prevMonthDisabled(calendar: NgkCalendar, date: NgkDate, minDate: NgkDate) {
  const prevDate = calendar.getPrev(date, 'm');
  return minDate && (prevDate.year === minDate.year && prevDate.month < minDate.month ||
    prevDate.year < minDate.year && minDate.month === 1);
}

export function buildMonths(
  calendar: NgkCalendar, date: NgkDate, state: DatepickerViewModel, i18n: NgkDatepickerI18n,
  force: boolean): MonthViewModel[] {
  const { displayMonths, months } = state;
  // move old months to a temporary array
  const monthsToReuse = months.splice(0, months.length);

  // generate new first dates, nullify or reuse months
  const firstDates = Array.from({ length: displayMonths }, (_, i) => {
    const firstDate = calendar.getNext(date, 'm', i);
    months[i] = null;

    if (!force) {
      const reusedIndex = monthsToReuse.findIndex(month => month.firstDate.equals(firstDate));
      // move reused month back to months
      if (reusedIndex !== -1) {
        months[i] = monthsToReuse.splice(reusedIndex, 1)[0];
      }
    }

    return firstDate;
  });

  // rebuild nullified months
  firstDates.forEach((firstDate, i) => {
    if (months[i] === null) {
      months[i] = buildMonth(calendar, firstDate, state, i18n, monthsToReuse.shift() || {} as MonthViewModel);
    }
  });

  return months;
}

export function buildMonth(
  calendar: NgkCalendar, date: NgkDate, state: DatepickerViewModel, i18n: NgkDatepickerI18n,
  month: MonthViewModel = {} as MonthViewModel): MonthViewModel {
  const { dayTemplateData, minDate, maxDate, firstDayOfWeek, markDisabled, outsideDays } = state;
  const calendarToday = calendar.getToday();

  month.firstDate = null;
  month.lastDate = null;
  month.number = date.month;
  month.year = date.year;
  month.weeks = month.weeks || [];
  month.weekdays = month.weekdays || [];

  date = getFirstViewDate(calendar, date, firstDayOfWeek);

  // month has weeks
  for (let week = 0; week < calendar.getWeeksPerMonth(); week++) {
    let weekObject = month.weeks[week];
    if (!weekObject) {
      weekObject = month.weeks[week] = { number: 0, days: [], collapsed: true };
    }
    const days = weekObject.days;

    // week has days
    for (let day = 0; day < calendar.getDaysPerWeek(); day++) {
      if (week === 0) {
        month.weekdays[day] = calendar.getWeekday(date);
      }

      const newDate = new NgkDate(date.year, date.month, date.day);
      const nextDate = calendar.getNext(newDate);

      const ariaLabel = i18n.getDayAriaLabel(newDate);

      // marking date as disabled
      let disabled = !!((minDate && newDate.before(minDate)) || (maxDate && newDate.after(maxDate)));
      if (!disabled && markDisabled) {
        disabled = markDisabled(newDate, { month: month.number, year: month.year });
      }

      // today
      const today = newDate.equals(calendarToday);

      // adding user-provided data to the context
      const contextUserData =
        dayTemplateData ? dayTemplateData(newDate, { month: month.number, year: month.year }) : undefined;

      // saving first date of the month
      if (month.firstDate === null && newDate.month === month.number) {
        month.firstDate = newDate;
      }

      // saving last date of the month
      if (newDate.month === month.number && nextDate.month !== month.number) {
        month.lastDate = newDate;
      }

      let dayObject = days[day];
      if (!dayObject) {
        dayObject = days[day] = {} as DayViewModel;
      }
      dayObject.date = newDate;
      dayObject.context = Object.assign(dayObject.context || {}, {
        $implicit: newDate,
        date: newDate,
        data: contextUserData,
        currentMonth: month.number, disabled,
        focused: false,
        selected: false, today
      });
      dayObject.tabindex = -1;
      dayObject.ariaLabel = ariaLabel;
      dayObject.hidden = false;

      date = nextDate;
    }

    weekObject.number = calendar.getWeekNumber(days.map(day => day.date), firstDayOfWeek);

    // marking week as collapsed
    weekObject.collapsed = outsideDays === 'collapsed' && days[0].date.month !== month.number &&
      days[days.length - 1].date.month !== month.number;
  }

  return month;
}

export function getFirstViewDate(calendar: NgkCalendar, date: NgkDate, firstDayOfWeek: number): NgkDate {
  const daysPerWeek = calendar.getDaysPerWeek();
  const firstMonthDate = new NgkDate(date.year, date.month, 1);
  const dayOfWeek = calendar.getWeekday(firstMonthDate) % daysPerWeek;
  return calendar.getPrev(firstMonthDate, 'd', (daysPerWeek + dayOfWeek - firstDayOfWeek) % daysPerWeek);
}
