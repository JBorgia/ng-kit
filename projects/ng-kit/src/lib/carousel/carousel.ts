import { isPlatformBrowser } from '@angular/common';
import {
  AfterContentChecked,
  AfterContentInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  EventEmitter,
  HostListener,
  Inject,
  Input,
  NgZone,
  OnDestroy,
  Output,
  PLATFORM_ID,
  QueryList,
  TemplateRef,
} from '@angular/core';
import { BehaviorSubject, combineLatest, NEVER, Subject, timer } from 'rxjs';
import { distinctUntilChanged, map, startWith, switchMap, takeUntil } from 'rxjs/operators';

import { NgKitCarouselConfig } from './carousel-config';

let nextId = 0;

/**
 * A directive that wraps the individual carousel slide.
 */
@Directive({ selector: 'ng-template[xmSlide]' })
export class NgKitSlideDirective {
  /**
   * Slide id that must be unique for the entire document.
   *
   * If not provided, will be generated in the `ng-kit-slide-xx` format.
   */
  @Input() id = `ng-kit-slide-${nextId++}`;

  /**
   * Slide index inside carousel.   
   */
  @Input() index?: number;

  constructor(public templateRef: TemplateRef<any>) { }
}

/**
 * Carousel is a component to easily create and control slideshows.
 *
 * Allows to set intervals, change the way user interacts with the slides and provides a programmatic API.
 */
@Component({
  selector: 'ng-kit-carousel',
  exportAs: 'xmCarousel',
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: {
    'class': 'carousel slide',
    '[style.display]': '"block"',
    'tabIndex': '0',
    '(keydown.arrowLeft)': 'keyboard && prev(NgKitSlideEventSource.ARROW_LEFT)',
    '(keydown.arrowRight)': 'keyboard && next(NgKitSlideEventSource.ARROW_RIGHT)'
  },
  templateUrl: './carousel.component.html',
  styleUrls: ['./carousel.component.scss']
})
export class NgKitCarouselComponent implements AfterContentChecked,
  AfterContentInit, OnDestroy {
  @ContentChildren(NgKitSlideDirective) slides: QueryList<NgKitSlideDirective>;

  public NgKitSlideEventSource = NgKitSlideEventSource;

  private _destroy$ = new Subject<void>();
  private _interval$ = new BehaviorSubject(0);
  private _mouseHover$ = new BehaviorSubject(false);
  private _pauseOnHover$ = new BehaviorSubject(false);
  private _pause$ = new BehaviorSubject(false);
  private _wrap$ = new BehaviorSubject(false);

  /**
   * The slide id that should be displayed **initially**.
   *
   * For subsequent interactions use methods `select()`, `next()`, etc. and the `(slide)` output.
   */
  @Input() activeId: string;

  /**
   * Time in milliseconds before the next slide is shown.
   */
  @Input()
  set interval(value: number) {
    this._interval$.next(value);
  }

  get interval() { return this._interval$.value; }

  /**
   * If `true`, will 'wrap' the carousel by switching from the last slide back to the first.
   */
  @Input()
  set wrap(value: boolean) {
    this._wrap$.next(value);
  }

  get wrap() { return this._wrap$.value; }

  /**
   * If `true`, allows to interact with carousel using keyboard 'arrow left' and 'arrow right'.
   */
  @Input() keyboard: boolean;

  /**
   * If `true`, will pause slide switching when mouse cursor hovers the slide.
   *
   * @since 2.2.0
   */
  @Input()
  set pauseOnHover(value: boolean) {
    this._pauseOnHover$.next(value);
  }

  get pauseOnHover() { return this._pauseOnHover$.value; }

  /**
   * If `true`, 'previous' and 'next' navigation arrows will be visible on the slide.
   *
   * @since 2.2.0
   */
  @Input() showNavigationArrows: boolean;

  /**
   * If `true`, navigation indicators at the bottom of the slide will be visible.
   *
   * @since 2.2.0
   */
  @Input() showNavigationIndicators: boolean;

  /**
   * An event emitted right after the slide transition is completed.
   *
   * See [`NgKitSlideEvent`](#/components/carousel/api#NgKitSlideEvent) for payload details.
   */
  @Output() slide = new EventEmitter<NgKitSlideEvent>();

  constructor(
    config: NgKitCarouselConfig, @Inject(PLATFORM_ID) private _platformId, private _ngZone: NgZone,
    private _cd: ChangeDetectorRef, private element: ElementRef) {
    this.interval = config.interval;
    this.wrap = config.wrap;
    this.keyboard = config.keyboard;
    this.pauseOnHover = config.pauseOnHover;
    this.showNavigationArrows = config.showNavigationArrows;
    this.showNavigationIndicators = config.showNavigationIndicators;
  }

  @HostListener('mouseenter')
  mouseEnter() {
    this._mouseHover$.next(true);
  }

  @HostListener('mouseleave')
  mouseLeave() {
    this._mouseHover$.next(false);
  }

  ngAfterContentInit() {
    // setInterval() doesn't play well with SSR and protractor,
    // so we should run it in the browser and outside Angular
    if (isPlatformBrowser(this._platformId)) {
      this._ngZone.runOutsideAngular(() => {
        const hasNextSlide$ = combineLatest(
          this.slide.pipe(map(slideEvent => slideEvent.current), startWith(this.activeId)),
          this._wrap$, this.slides.changes.pipe(startWith(null)))
          .pipe(
            map(([currentSlideId, wrap]) => {
              const slideArr = this.slides.toArray();
              const currentSlideIdx = this._getSlideIdxById(currentSlideId);
              return wrap ? slideArr.length > 1 : currentSlideIdx < slideArr.length - 1;
            }),
            distinctUntilChanged());
        combineLatest(this._pause$, this._pauseOnHover$, this._mouseHover$, this._interval$, hasNextSlide$)
          .pipe(
            map(([pause, pauseOnHover, mouseHover, interval, hasNextSlide]) =>
              ((pause || (pauseOnHover && mouseHover) || !hasNextSlide) ? 0 : interval)),

            distinctUntilChanged(), switchMap(interval => interval > 0 ? timer(interval, interval) : NEVER),
            takeUntil(this._destroy$))
          .subscribe(() => this._ngZone.run(() => this.next(NgKitSlideEventSource.TIMER)));
      });
    }

    this.slides.changes.pipe(takeUntil(this._destroy$)).subscribe(() => this._cd.markForCheck());
  }

  ngAfterContentChecked() {
    const activeSlide = this._getSlideById(this.activeId);
    this.activeId = activeSlide ? activeSlide.id : (this.slides.length ? this.slides.first.id : null);
  }

  ngOnDestroy() { this._destroy$.next(); }

  /**
   * Navigates to a slide with the specified identifier.
   */
  select(slideId: string, source?: NgKitSlideEventSource) {
    this._cycleToSelected(slideId, this._getSlideEventDirection(this.activeId, slideId), source);
  }

  /**
   * Navigates to the previous slide.
   */
  prev(source?: NgKitSlideEventSource) {
    this._cycleToSelected(this._getPrevSlide(this.activeId), NgKitSlideEventDirection.RIGHT, source);
  }

  /**
   * Navigates to the next slide.
   */
  next(source?: NgKitSlideEventSource) {
    this._cycleToSelected(this._getNextSlide(this.activeId), NgKitSlideEventDirection.LEFT, source);
  }

  /**
   * Pauses cycling through the slides.
   */
  pause() { this._pause$.next(true); }

  /**
   * Restarts cycling through the slides from left to right.
   */
  cycle() { this._pause$.next(false); }

  private _cycleToSelected(slideIdx: string, direction: NgKitSlideEventDirection, source?: NgKitSlideEventSource) {
    const selectedSlide = this._getSlideById(slideIdx);
    if (selectedSlide && selectedSlide.id !== this.activeId) {
      this.slide.emit({
        prev: this.activeId,
        current: selectedSlide.id,
        direction,
        paused: this._pause$.value, source,
        element: this.element.nativeElement,
        slideIndex: selectedSlide.index ? selectedSlide.index : null
      });
      this.activeId = selectedSlide.id;
    }

    // we get here after the interval fires or any external API call like next(), prev() or select()
    this._cd.markForCheck();
  }

  private _getSlideEventDirection(currentActiveSlideId: string, nextActiveSlideId: string): NgKitSlideEventDirection {
    const currentActiveSlideIdx = this._getSlideIdxById(currentActiveSlideId);
    const nextActiveSlideIdx = this._getSlideIdxById(nextActiveSlideId);

    return currentActiveSlideIdx > nextActiveSlideIdx ? NgKitSlideEventDirection.RIGHT : NgKitSlideEventDirection.LEFT;
  }

  private _getSlideById(slideId: string): NgKitSlideDirective {
    return this.slides.find(slide => {
      return slide.id === slideId
    });
  }

  private _getSlideIdxById(slideId: string): number {
    return this.slides.toArray().indexOf(this._getSlideById(slideId));
  }

  private _getNextSlide(currentSlideId: string): string {
    const slideArr = this.slides.toArray();
    const currentSlideIdx = this._getSlideIdxById(currentSlideId);
    const isLastSlide = currentSlideIdx === slideArr.length - 1;

    return isLastSlide ? (this.wrap ? slideArr[0].id : slideArr[slideArr.length - 1].id) :
      slideArr[currentSlideIdx + 1].id;
  }

  private _getPrevSlide(currentSlideId: string): string {
    const slideArr = this.slides.toArray();
    const currentSlideIdx = this._getSlideIdxById(currentSlideId);
    const isFirstSlide = currentSlideIdx === 0;

    return isFirstSlide ? (this.wrap ? slideArr[slideArr.length - 1].id : slideArr[0].id) :
      slideArr[currentSlideIdx - 1].id;
  }
}

/**
 * A slide change event emitted right after the slide transition is completed.
 */
export interface NgKitSlideEvent {
  /**
   * The previous slide id.
   */
  prev: string;

  /**
   * The current slide id.
   */
  current: string;

  /**
   * The slide event direction.
   *
   * Possible values are `'left' | 'right'`.
   */
  direction: NgKitSlideEventDirection;

  /**
   * Whether the pause() method was called (and no cycle() call was done afterwards).
   *
   * @since 5.1.0
   */
  paused: boolean;

  /**
   * Source triggering the slide change event.
   *
   * Possible values are `'timer' | 'arrowLeft' | 'arrowRight' | 'indicator'`
   *
   * @since 5.1.0
   */
  source?: NgKitSlideEventSource;

  /**
  * Source carousel native element.
  */
  element: Element;

  /**
   * Source carousel current slide index.
   */
  slideIndex?: number;

}

/**
 * Defines the carousel slide transition direction.
 */
export enum NgKitSlideEventDirection {
  LEFT = <any>'left',
  RIGHT = <any>'right'
}

export enum NgKitSlideEventSource {
  TIMER = 'timer',
  ARROW_LEFT = 'arrowLeft',
  ARROW_RIGHT = 'arrowRight',
  INDICATOR = 'indicator'
}

