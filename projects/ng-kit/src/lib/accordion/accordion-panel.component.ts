import {
  AfterViewInit,
  ChangeDetectorRef,
  Component,
  ContentChild,
  Directive,
  ElementRef,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
  ViewChild,
} from '@angular/core';
import { BehaviorSubject, Subscription } from 'rxjs';
import { filter } from 'rxjs/operators';

import { ResizedEvent } from '../directives/resize/resize-event';
import { NgKitResizeDirective } from '../directives/resize/resize.directive';
import { NgKitAccordionBodyComponent } from './accordion-body.component';


/**
 * Using an instance of the `NgKitAccordionHeaderDirective` will override and remove the <i>&#60;ng-content&#62;</i> tag from the `NgKitAccordionHeaderComponent`.
 */
@Directive({
  selector: `[ng-kit-accordion-header], [xmAccordionHeader]`,
  host: {
    class: 'ng-kit-accordion-header',
  }
})
export class NgKitAccordionHeaderDirective {
}


/**
 * An HTML element tagged with the `NgKitAccordionBodyDirective` using either `ng-kit-accordion-body` or `xmAccordionBody` will be transcluded into the `NgKitAccordionBodyComponent`.
 */
@Directive({
  selector: `[ng-kit-accordion-body], [xmAccordionBody]`,
  host: {
    class: 'ng-kit-accordion-body',
  }
})
export class NgKitAccordionBodyDirective {
}

/**
 * One or more `NgKitAccordionPanelComponent`s make up the majority of the `NgKitAccordionComponent`. 
 * Setting the `isOpenOnInit` input to true will expand that panel on initial dom instantiation.
 * A defined height can be set using the `bodyHeight` input. Transition animation can be disabled on an 
 * individual panel by setting the `transitionDisabled` input to false. The `onClick` output emits when 
 * the panel is clicked.
 */

@Component({
  selector: 'ng-kit-accordion-panel, div[ng-kit-accordion-panel]',
  templateUrl: './accordion-panel.component.html',
  styleUrls: ['./accordion-panel.component.scss']
})
export class NgKitAccordionPanelComponent implements AfterViewInit, OnDestroy {
  @ContentChild(NgKitAccordionHeaderDirective, { static: false }) accordionHeader: NgKitAccordionHeaderDirective;
  @ContentChild(NgKitAccordionBodyDirective, { static: false }) accordionBody: NgKitAccordionBodyDirective;
  @ViewChild('xmAccordionBody', { static: true }) xmAccordionBody: NgKitAccordionBodyComponent;
  @Input() bodyHeight: number;
  private _isCollapsed = true;
  @Input() transitionDisabled = false;
  @Output() onClick = new EventEmitter<any>();
  private resize;
  private resizeSub: Subscription;
  panelStatus$ = new BehaviorSubject<'collapsed' | 'expanded'>('collapsed');

  // use this to set the initial state
  @Input() isOpenOnInit = false;

  // use this to change the collapsed state
  @Input() public set isCollapsed(value: boolean) {
    this._isCollapsed = value;
    this.setPanelStatus(this._isCollapsed);
  }

  public get isCollapsed() {
    return this._isCollapsed;
  }

  constructor(
    private el: ElementRef,
    private cdr: ChangeDetectorRef,
  ) { }

  ngAfterViewInit() {
    if (!this.transitionDisabled) { this.setBodyHeight(); }

    setTimeout(() => {
      this._isCollapsed = !this.isOpenOnInit;
    }, 0);

    // Handle adjusting the padding of the header row in the case of the table being resized. Trigger on init.
    this.resize = new NgKitResizeDirective(new ElementRef(this.el.nativeElement.parentNode));
    this.resize.ngOnInit();
    this.resizeSub = this.resize.resize.pipe(
      filter((resizeEvent: ResizedEvent) =>
        resizeEvent
        && resizeEvent.newWidth !== resizeEvent.oldWidth
        && (resizeEvent.newWidth - resizeEvent.oldWidth > 18 || resizeEvent.newWidth < resizeEvent.oldWidth) // this filters for expansion due the addition of a scrollbar
      )
    ).subscribe((resizeEvent: ResizedEvent) => this.setBodyHeight());
  }

  ngOnDestroy() {
    this.resizeSub.unsubscribe();
    this.panelStatus$.complete();
  }

  setBodyHeight() {
    /**
     * resize directive returns a resize event. Here, we only reset the accordion heights if the width has changed.
     */
    setTimeout(() => {
      /**
       * a change cycle is necessary to get the heights
       */
      this.bodyHeight = this.xmAccordionBody.nativeElement.children[0].children[0].offsetHeight;
      this.xmAccordionBody.nativeElement.style.maxHeight = `${this.bodyHeight + 1}px`;
    }, 0);
  }

  disableTransition() {
    this.transitionDisabled = true;
    this.cdr.detectChanges();
  }

  toggle(collapseExpand?: 'collapse' | 'expand') {
    switch (collapseExpand) {
      case 'collapse':
        this._isCollapsed = true;
        break;
      case 'expand':
        this._isCollapsed = false;
        break;
      default:
        this._isCollapsed = !this._isCollapsed;
    }
    this.setPanelStatus(this._isCollapsed);
  }

  clicked() {
    this.onClick.emit();
  }

  setPanelStatus(collapseExpand: boolean) {
    if (collapseExpand) {
      this.panelStatus$.next('collapsed');
    } else {
      this.panelStatus$.next('expanded');
    }
  }

}
