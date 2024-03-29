import { NgkDate } from './date';

/**
 * The context for the datepicker 'day' template.
 *
 * You can override the way dates are displayed in the datepicker via the `[dayTemplate]` input.
 */
export interface DayTemplateContext {
  /**
   * The date that corresponds to the template. Same as the `date` parameter.
   *
   * Can be used for convenience as a default template key, ex. `let-d`.
   *
   * @since 3.3.0
   */
  $implicit: NgkDate;

  /**
   * The month currently displayed by the datepicker.
   */
  currentMonth: number;

  /**
   * Any data you pass using the `[dayTemplateData]` input in the datepicker.
   *
   * @since 3.3.0
   */
  data?: any;

  /**
   * The date that corresponds to the template.
   */
  date: NgkDate;

  /**
   * `True` if the current date is disabled.
   */
  disabled: boolean;

  /**
   * `True` if the current date is focused.
   */
  focused: boolean;

  /**
   * `True` if the current date is selected.
   */
  selected: boolean;

  /**
   * `True` if the current date is today (equal to `NgkCalendar.getToday()`).
   *
   * @since 4.1.0
   */
  today: boolean;
}
