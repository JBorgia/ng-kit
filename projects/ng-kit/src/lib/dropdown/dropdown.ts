import { DOCUMENT } from '@angular/common';
import {
    AfterContentInit,
    ChangeDetectorRef,
    Component,
    ContentChild,
    ContentChildren,
    Directive,
    ElementRef,
    EventEmitter,
    forwardRef,
    HostBinding,
    Inject,
    Injectable,
    Input,
    NgZone,
    OnChanges,
    OnDestroy,
    Output,
    QueryList,
    Renderer2,
    SimpleChanges,
} from '@angular/core';
import { Subject, Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

import { autoClose } from '../util/autoclose';
import { Key } from '../util/key';
import { Placement, PlacementArray, positionElements } from '../util/positioning';

/**
 * Configuration service for the NgkDropdown directive.
 * You can inject this service, typically in your root component, and customize the values of its properties in
 * order to provide default values for all the dropdowns used in the application.
 */
@Injectable({ providedIn: 'root' })
export class NgkDropdownConfig {
  autoClose: boolean | 'outside' | 'inside' = true;
  placement: PlacementArray = ['bottom-left', 'bottom-right', 'top-left', 'top-right'];
  container: null | 'body';
}

/**
 * A directive you should put put on a dropdown item of a menu.
 *
 * @since 4.1.0
 */
@Directive({
  /* tslint:disable-next-line:directive-selector */
  selector: '[ngkDropdownItem]',
})
export class NgkDropdownItemDirective {
  private _disabled = false;

  @HostBinding('class.dropdown-item') dropdownItem = true;
  @HostBinding('class.disabled') get classDisabled() { return this._disabled; }

  @Input()
  set disabled(value: boolean) {
    this._disabled = <any>value === '' || value === true;  // accept an empty attribute as true
  }

  get disabled(): boolean { return this._disabled; }

  constructor(public elementRef: ElementRef<HTMLElement>) { }
}

/**
 * A component that wraps dropdown menu content and dropdown items.
 */
@Component({
  selector: 'ngk-dropdown-menu',
  exportAs: 'ngkDropdownMenu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss'],
  host: {
    '[class.dropdown-menu]': 'true',
    '[class.show]': 'dropdown.isOpen()',
    '[attr.x-placement]': 'placement',
    '(keydown.ArrowUp)': 'dropdown.onKeyDown($event)',
    '(keydown.ArrowDown)': 'dropdown.onKeyDown($event)',
    '(keydown.Home)': 'dropdown.onKeyDown($event)',
    '(keydown.End)': 'dropdown.onKeyDown($event)',
    '(keydown.Enter)': 'dropdown.onKeyDown($event)',
    '(keydown.Space)': 'dropdown.onKeyDown($event)'
  }
})
export class NgkDropdownMenuComponent {
  placement: Placement = 'bottom';
  isOpen = false;

  @ContentChildren(NgkDropdownItemDirective) menuItems: QueryList<NgkDropdownItemDirective>;

  constructor(@Inject(forwardRef(() => NgkDropdownComponent)) public dropdown) { }
}

/**
 * Marks an element to which dropdown menu will be anchored. This is a simple version
 * of the NgkDropdownToggle directive. It plays the same role as NgkDropdownToggle but
 * doesn't listen to click events to toggle dropdown menu thus enabling support for
 * events other than click.
 *
 * @since 1.1.0
 */
@Directive({
  /* tslint:disable-next-line:directive-selector */
  selector: '[ngkDropdownAnchor]',
  host: {
    'class': 'dropdown-toggle',
    'aria-haspopup': 'true',
    '[attr.aria-expanded]': 'dropdown.isOpen()'
  }
})
export class NgkDropdownAnchorDirective {
  anchorEl;

  constructor(@Inject(forwardRef(() => NgkDropdownComponent)) public dropdown, private _elementRef: ElementRef<HTMLElement>) {
    this.anchorEl = _elementRef.nativeElement;
  }

  getNativeElement() { return this._elementRef.nativeElement; }
}

/**
 * Allows the dropdown to be toggled via click. This directive is optional: you can use NgkDropdownAnchor as an
 * alternative.
 */
@Directive({
  /* tslint:disable-next-line:directive-selector */
  selector: '[ngkDropdownToggle]',
  host: {
    'class': 'dropdown-toggle',
    'aria-haspopup': 'true',
    '[attr.aria-expanded]': 'dropdown.isOpen()',
    '(click)': 'dropdown.toggle()',
    '(keydown.ArrowUp)': 'dropdown.onKeyDown($event)',
    '(keydown.ArrowDown)': 'dropdown.onKeyDown($event)',
    '(keydown.Home)': 'dropdown.onKeyDown($event)',
    '(keydown.End)': 'dropdown.onKeyDown($event)'
  },
  providers: [{ provide: NgkDropdownAnchorDirective, useExisting: forwardRef(() => NgkDropdownToggleDirective) }]
})
export class NgkDropdownToggleDirective extends NgkDropdownAnchorDirective {

  constructor(
    /* tslint:disable-next-line:no-use-before-declare */
    @Inject(forwardRef(() => NgkDropdownComponent)) public dropdown,
    elementRef: ElementRef<HTMLElement>) {
    super(dropdown, elementRef);
  }

  toggleOpen() { this.dropdown.toggle(); }
}

/**
 * Transforms a node into a dropdown.
 */
@Component({
  selector: 'ngk-dropdown',
  exportAs: 'ngkDropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss'],
  host: { '[class.show]': 'isOpen()' }
})
export class NgkDropdownComponent implements OnDestroy, OnChanges, AfterContentInit {
  private _closed$ = new Subject<void>();
  private _zoneSubscription: Subscription;
  private _bodyContainer: HTMLElement;

  @ContentChild(NgkDropdownMenuComponent, { static: false }) private _menu: NgkDropdownMenuComponent;
  @ContentChild(NgkDropdownMenuComponent, { read: ElementRef, static: false }) private _menuElement: ElementRef;
  @ContentChild(NgkDropdownAnchorDirective, { static: false }) private _anchor: NgkDropdownAnchorDirective;

  /**
   * Indicates whether the dropdown should be closed when clicking one of dropdown items or pressing ESC.
   *
   * * `true` - the dropdown will close on both outside and inside (menu) clicks.
   * * `false` - the dropdown can only be closed manually via `close()` or `toggle()` methods.
   * * `"inside"` - the dropdown will close on inside menu clicks, but not outside clicks.
   * * `"outside"` - the dropdown will close only on the outside clicks and not on menu clicks.
   */
  @Input() autoClose: boolean | 'outside' | 'inside';

  /**
   * Defines whether or not the dropdown menu is opened initially.
   */
  @Input() _open = false;

  /**
   * The preferred placement of the dropdown.
   *
   * Possible values are `"top"`, `"top-left"`, `"top-right"`, `"bottom"`, `"bottom-left"`,
   * `"bottom-right"`, `"left"`, `"left-top"`, `"left-bottom"`, `"right"`, `"right-top"`,
   * `"right-bottom"`
   *
   * Accepts an array of strings or a string with space separated possible values.
   *
   * The default order of preference is `"bottom-left bottom-right top-left top-right"`
   *
   * Please see the [positioning overview](#/positioning) for more details.
   */
  @Input() placement: PlacementArray;

  /**
  * A selector specifying the element the dropdown should be appended to.
  * Currently only supports "body".
  *
  * @since 4.1.0
  */
  @Input() container: null | 'body';

  /**
   * Enable or disable the dynamic positioning. The default value is dynamic unless the dropdown is used
   * inside a Bootstrap navbar. If you need custom placement for a dropdown in a navbar, set it to
   * dynamic explicitly. See the [positioning of dropdown](#/positioning#dropdown)
   * and the [navbar demo](/#/components/dropdown/examples#navbar) for more details.
   *
   * @since 4.2.0
   */
  @Input() display: 'dynamic' | 'static';

  /**
   * An event fired when the dropdown is opened or closed.
   *
   * The event payload is a `boolean`:
   * * `true` - the dropdown was opened
   * * `false` - the dropdown was closed
   */
  @Output() openChange = new EventEmitter<boolean>();

  constructor(
    private _changeDetector: ChangeDetectorRef, config: NgkDropdownConfig, @Inject(DOCUMENT) private _document: any,
    private _ngZone: NgZone, private _elementRef: ElementRef<HTMLElement>, private _renderer: Renderer2) {
    this.placement = config.placement;
    this.container = config.container;
    this.autoClose = config.autoClose;
    this.display = 'dynamic';
    this._zoneSubscription = _ngZone.onStable.subscribe(() => { this._positionMenu(); });
  }

  ngAfterContentInit() {
    this._ngZone.onStable.pipe(take(1)).subscribe(() => {
      this._applyPlacementClasses();
      if (this._open) {
        this._setCloseHandlers();
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes.container && this._open) {
      this._applyContainer(this.container);
    }

    if (changes.placement && !changes.placement.isFirstChange) {
      this._applyPlacementClasses();
    }
  }

  /**
   * Checks if the dropdown menu is open.
   */
  isOpen(): boolean { return this._open; }

  /**
   * Opens the dropdown menu.
   */
  open(): void {
    if (!this._open) {
      this._open = true;
      this._applyContainer(this.container);
      this.openChange.emit(true);
      this._setCloseHandlers();
    }
  }

  private _setCloseHandlers() {
    const anchor = this._anchor;
    autoClose(
      this._ngZone, this._document, this.autoClose, () => this.close(), this._closed$,
      this._menu ? [this._menuElement.nativeElement] : [], anchor ? [anchor.getNativeElement()] : [],
      '.dropdown-item,.dropdown-divider');
  }

  /**
   * Closes the dropdown menu.
   */
  close(): void {
    if (this._open) {
      this._open = false;
      this._resetContainer();
      this._closed$.next();
      this.openChange.emit(false);
      this._changeDetector.markForCheck();
    }
  }

  /**
   * Toggles the dropdown menu.
   */
  toggle(): void {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }

  ngOnDestroy() {
    this._resetContainer();

    this._closed$.next();
    this._zoneSubscription.unsubscribe();
  }

  onKeyDown(event: KeyboardEvent) {
    // tslint:disable-next-line:deprecation
    const key = event.which;
    const itemElements = this._getMenuElements();

    let position = -1;
    let isEventFromItems = false;
    const isEventFromToggle = this._isEventFromToggle(event);

    if (!isEventFromToggle && itemElements.length) {
      itemElements.forEach((itemElement, index) => {
        if (itemElement.contains(event.target as HTMLElement)) {
          isEventFromItems = true;
        }
        if (itemElement === this._document.activeElement) {
          position = index;
        }
      });
    }

    // closing on Enter / Space
    if (key === Key.Space || key === Key.Enter) {
      if (isEventFromItems && (this.autoClose === true || this.autoClose === 'inside')) {
        this.close();
      }
      return;
    }

    // opening / navigating
    if (isEventFromToggle || isEventFromItems) {
      this.open();

      if (itemElements.length) {
        switch (key) {
          case Key.ArrowDown:
            position = Math.min(position + 1, itemElements.length - 1);
            break;
          case Key.ArrowUp:
            if (this._isDropup() && position === -1) {
              position = itemElements.length - 1;
              break;
            }
            position = Math.max(position - 1, 0);
            break;
          case Key.Home:
            position = 0;
            break;
          case Key.End:
            position = itemElements.length - 1;
            break;
        }
        itemElements[position].focus();
      }
      event.preventDefault();
    }
  }

  private _isDropup(): boolean { return this._elementRef.nativeElement.classList.contains('dropup'); }

  private _isEventFromToggle(event: KeyboardEvent) {
    return this._anchor.getNativeElement().contains(event.target as HTMLElement);
  }

  private _getMenuElements(): HTMLElement[] {
    const menu = this._menu;
    if (menu == null) {
      return [];
    }
    return menu.menuItems.filter(item => !item.disabled).map(item => item.elementRef.nativeElement);
  }

  private _positionMenu() {
    const menu = this._menu;
    if (this.isOpen() && menu) {
      this._applyPlacementClasses(
        this.display === 'dynamic' ?
          positionElements(this._anchor.anchorEl, this._bodyContainer || this._menuElement.nativeElement, this.placement, this.container === 'body') :
          this._getFirstPlacement(this.placement));
    }
  }

  private _getFirstPlacement(placement: PlacementArray): Placement {
    return Array.isArray(placement) ? placement[0] : placement.split(' ')[0] as Placement;
  }

  private _resetContainer() {
    const renderer = this._renderer;
    const menuElement = this._menuElement;
    if (menuElement) {
      const dropdownElement = this._elementRef.nativeElement;
      const dropdownMenuElement = menuElement.nativeElement;

      renderer.appendChild(dropdownElement, dropdownMenuElement);
      renderer.removeStyle(dropdownMenuElement, 'position');
      renderer.removeStyle(dropdownMenuElement, 'transform');
    }
    if (this._bodyContainer) {
      renderer.removeChild(this._document.body, this._bodyContainer);
      this._bodyContainer = null;
    }
  }

  private _applyContainer(container: null | 'body' = null) {
    this._resetContainer();
    if (container === 'body') {
      const renderer = this._renderer;
      const dropdownMenuElement = this._menuElement.nativeElement;
      const bodyContainer = this._bodyContainer = this._bodyContainer || renderer.createElement('div');

      // Override some styles to have the positionning working
      renderer.setStyle(bodyContainer, 'position', 'absolute');
      renderer.setStyle(dropdownMenuElement, 'position', 'static');
      renderer.setStyle(bodyContainer, 'z-index', '1050');

      renderer.appendChild(bodyContainer, dropdownMenuElement);
      renderer.appendChild(this._document.body, bodyContainer);
    }
  }

  private _applyPlacementClasses(placement?: Placement) {
    const menu = this._menu;
    if (menu) {
      if (!placement) {
        placement = this._getFirstPlacement(this.placement);
      }

      const renderer = this._renderer;
      const dropdownElement = this._elementRef.nativeElement;

      // remove the current placement classes
      renderer.removeClass(dropdownElement, 'dropup');
      renderer.removeClass(dropdownElement, 'dropdown');
      menu.placement = this.display === 'static' ? null : placement;

      /*
      * apply the new placement
      * in case of top use up-arrow or down-arrow otherwise
      */
      const dropdownClass = placement.search('^top') !== -1 ? 'dropup' : 'dropdown';
      renderer.addClass(dropdownElement, dropdownClass);

      const bodyContainer = this._bodyContainer;
      if (bodyContainer) {
        renderer.removeClass(bodyContainer, 'dropup');
        renderer.removeClass(bodyContainer, 'dropdown');
        renderer.addClass(bodyContainer, dropdownClass);
      }
    }
  }
}
