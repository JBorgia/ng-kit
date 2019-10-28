import {
  AfterViewInit,
  Component,
  ContentChildren,
  EventEmitter,
  Input,
  OnDestroy,
  OnInit,
  Output,
  QueryList,
} from '@angular/core';
import { merge, Observable, Subscription } from 'rxjs';
import { map, startWith } from 'rxjs/operators';

import { NgKitAccordionPanelComponent } from './accordion-panel.component';


/**
 * An array of `NgKitAccordionStatus` class objects are emitted on `NgKitAccordionComponent` click events. 
 * Each contains expandedBodyHeight, wasOpenOnInit, panelStatus, and isCollapsed fields.
 * The `expandedBodyHeight` field is type number and is the height of the `NgKitAccordionBody` when expanded.
 * The `wasOpenOnInit` field is type boolean and will be true if the panel is initially set to expanded using the  `isOpenOnInit` input on the `NgKitPanelComponent` is set to true.
 * The `panelStatus` field will either read 'collapsed' or 'expanded' and is an alternative to the boolean field `isCollapsed`.
 * The `isCollapsed` field will read true if the panel is collapsed and false if expanded.
 */
class NgKitAccordionStatus {
  expandedBodyHeight: number;
  wasOpenOnInit: boolean;
  panelStatus: 'collapsed' | 'expanded';
  isCollapsed: boolean;

  constructor(
    expandedBodyHeight: number,
    wasOpenOnInit: boolean,
    panelStatus: 'collapsed' | 'expanded',
    isCollapsed: boolean
  ) {
    this.expandedBodyHeight = expandedBodyHeight;
    this.wasOpenOnInit = wasOpenOnInit;
    this.panelStatus = panelStatus;
    this.isCollapsed = isCollapsed;
  }
}

/**
 * The `NgKitAccordionComponent` provides multi-panel accordion support and contains one or more `NgKitAccordionPanel`s.
 * The `closeOthers` input will collapse other panels on the selection of a new one. The `disableTransition` disables 
 * CSS transition animation on all panels. The `clickChanges` output emits an array of `NgKitAccordionStatus` objects with
 * the status and features for each panel.
 */
@Component({
  selector: 'ng-kit-accordion',
  templateUrl: './accordion.component.html',
  styleUrls: ['./accordion.component.scss']
})
export class NgKitAccordionComponent implements OnInit, AfterViewInit, OnDestroy {
  @ContentChildren(NgKitAccordionPanelComponent) accordionPanels: QueryList<NgKitAccordionPanelComponent>;
  @Input() closeOthers = false;
  @Input() disableTransition = false;
  @Output() clickChanges = new EventEmitter<any>();
  private clickEvents$: Observable<number>;
  private subs: Subscription[] = [];

  constructor() { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.subs.push(this.accordionPanels.changes.pipe(startWith(this.accordionPanels))
      .subscribe((accordionPanels: QueryList<NgKitAccordionPanelComponent>) => {
        this.trackClicks(accordionPanels);
        this.collapsePanelHandling(accordionPanels, this.clickEvents$);
        this.setTransition(accordionPanels);
      }));
  }

  toggleAll(collapseExpand?: 'collapse' | 'expand') {
    this.accordionPanels.forEach((accordionPanel, index) => {
      accordionPanel.toggle(collapseExpand);
    });
  }

  private setTransition(accordionPanels: QueryList<NgKitAccordionPanelComponent>) {
    if (this.disableTransition) {
      accordionPanels.forEach(accordionPanel => {
        accordionPanel.disableTransition();
      });
    }
  }

  private trackClicks(accordionPanels) {
    this.clickEvents$ = merge(
      ...accordionPanels.reduce((clickEvents: Observable<number>[], panelInstance: NgKitAccordionPanelComponent, index) => {
        if (!clickEvents) {
          clickEvents = [];
        }
        clickEvents.push(panelInstance.onClick.pipe(map(() => index)));
        return clickEvents;
      }, []));
  }

  private collapsePanelHandling(accordionPanels: QueryList<NgKitAccordionPanelComponent>, clickEvents$: Observable<number>) {
    this.subs.push(clickEvents$.subscribe(clickedPanelIndex => {
      if (this.closeOthers) {
        accordionPanels.forEach((accordionPanel, index) => {
          if (index !== clickedPanelIndex) {
            accordionPanel.toggle('collapse');
          }
        });
      }
      this.clickChanges.emit(accordionPanels.toArray().map((accordionPanel: NgKitAccordionPanelComponent) =>
        new NgKitAccordionStatus(
          accordionPanel.bodyHeight,
          accordionPanel.isOpenOnInit,
          accordionPanel.panelStatus$.value,
          accordionPanel.isCollapsed)
      ));
    }));
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
