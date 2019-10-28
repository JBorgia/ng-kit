import { ChangeDetectionStrategy, Component, HostBinding, Injectable, Input } from '@angular/core';

import { getValueInRange } from '../util/util';

@Injectable({ providedIn: 'root' })
export class NgkProgressbarConfig {
  max = 100;
  animated = false;
  striped = false;
  type: string;
  showValue = false;
  height: string;
}

/**
 * Directive that can be used to provide feedback on the progress of a workflow or an action.
 */
@Component({
  selector: 'ngk-progressbar',
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: './progressbar.component.html',
  styleUrls: ['./progressbar.component.scss'],
})
export class NgkProgressbarComponent {
  _deciamPlaces: string = '2';
  /**
   * Maximal value to be displayed in the progressbar.
   */
  @Input() max: number;

  /**
   * Decimal places to display.
   */
  @Input() set decimalPlaces(value: string) {
    this._deciamPlaces = value;
  }

  get decimalPlaces(): string {
    return `1.0-${this._deciamPlaces}`;
  }

  @Input() customClass: string;

  /**
   * If `true`, the stripes on the progressbar are animated.
   *
   * Takes effect only for browsers supporting CSS3 animations, and if `striped` is `true`.
   */
  @Input() animated: boolean;

  /**
   * If `true`, the progress bars will be displayed as striped.
   */
  @Input() striped: boolean;

  /**
   * A flag indicating if the current percentage value should be shown.
   */
  @Input() showValue: boolean;

  /**
   * Type of progress bar, can be one of "success", "warning" or "danger".
   */
  @Input() type: string;

  /**
   * Current value to be displayed in the progressbar. Should be smaller or equal to "max" value.
   */
  @Input() value = 0;

  /**
   * Height of the progress bar. Accepts any valid CSS height values, ex. '2rem'
   */
  @Input() height: string;

  @HostBinding('class') get classes() {
    return this.customClass ? this.customClass : '';
  }

  constructor(config: NgkProgressbarConfig) {
    this.max = config.max;
    this.animated = config.animated;
    this.striped = config.striped;
    this.type = config.type;
    this.showValue = config.showValue;
    this.height = config.height;
  }

  getValue() { return getValueInRange(this.value, this.max); }

  get percentValue() { return 100 * this.getValue() / this.max; }
}
