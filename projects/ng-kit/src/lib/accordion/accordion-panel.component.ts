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
import { XmResizeDirective } from '../directives/resize/resize.directive';
import { XmAccordionBodyComponent } from './accordion-body.component';


/**
 * Using an instance of the `XmAccordionHeaderDirective` will override and remove the <i>&#60;ng-content&#62;</i> tag from the `XmAccordionHeaderComponent`.
 */
@Directive({
  selector: `[ng-kit-accordion-header], [xmAccordionHeader]`,
  host: {
    class: 'ng-kit-accordion-header',
  }
})
export class XmAccordionHeaderDirective {
}


/**
 * An HTML element tagged with the `XmAccordionBodyDirective` using either `ng-kit-accordion-body` or `xmAccordionBody` will be transcluded into the `XmAccordionBodyComponent`.
 */
@Directive({
  selector: `[ng-kit-accordion-body], [xmAccordionBody]`,
  host: {
    class: 'ng-kit-accordion-body',
  }
})
export class XmAccordionBodyDirective {
}

/**
 * One or more `XmAccordionPanelComponent`s make up the majority of the `XmAccordionComponent`. 
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
export class XmAccordionPanelComponent implements AfterViewInit, OnDestroy {
  @ContentChild(XmAccordionHeaderDirective, { static: false }) accordionHeader: XmAccordionHeaderDirective;
  @ContentChild(XmAccordionBodyDirective, { static: false }) accordionBody: XmAccordionBodyDirective;
  @ViewChild('xmAccordionBody', { static: true }) xmAccordionBody: XmAccordionBodyComponent;
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
    this.resize = new XmResizeDirective(new ElementRef(this.el.nativeElement.parentNode));
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
