/**
 * Toast dock configuration
 */
export interface NotificationGlobalConfig {
  /**
   * Max toast items on screen.
   *
   * > For example you want to display 3 toasts max at the time. But for some purposes your system calls it 10 times.
   * >
   * > With this option, 3 toast will be shown. And after each of it will disappear, new toast from the queue will be shown.
   * @type {number}
   * @default 8
   */
  maxOnScreen?: number;
  /**
   * Max toast items at position.
   *
   * Same as maxOnScreen, but affects only current toast position (like rightBottom)
   * @type {number}
   * @default 8
   */
  maxAtPosition?: number;
  /**
   * Should new items come from top or bottom side.
   *
   * > This option created for styling purposes.
   * >
   * > For example, if your toast position is TOP-RIGHT. Its not very nice, when items comes from top and pulls down all other toasts
   * @type {number}
   * @default true
   */
  newOnTop?: boolean;

  /**
   * When enabled duplicated notification are filtered out.
   *
   * Duplicates are detected when they have the same title, body and type.
   *
   * @type {boolean}
   * @default false
   */
  filterDuplicates?: boolean;
}
