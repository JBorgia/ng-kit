import {
  AfterContentChecked,
  Component,
  ContentChildren,
  Directive,
  EventEmitter,
  Injectable,
  Input,
  Output,
  QueryList,
  TemplateRef,
} from '@angular/core';

import { Key } from '../util/key';
import { NgkTabChangeEvent } from './tab-change-event';

let nextId = 0;

@Injectable({ providedIn: 'root' })
export class NgkTabsetConfig {
  justify: 'start' | 'center' | 'end' | 'fill' | 'justified' = 'start';
  type: 'tabs' | 'pills' = 'tabs';
}

/**
 * This directive should be used to wrap tab titles that need to contain HTML markup or other directives.
 */
@Directive({ selector: 'ng-template[ngkTabTitle]' })
export class NgkTabTitleDirective {
  constructor(public templateRef: TemplateRef<any>) { }
}

/**
 * This directive must be used to wrap content to be displayed in a tab.
 */
@Directive({ selector: 'ng-template[ngkTabContent]' })
export class NgkTabContentDirective {
  constructor(public templateRef: TemplateRef<any>) { }
}

/**
 * A directive representing an individual tab.
 */
@Directive({
  /* tslint:disable-next-line:directive-selector */
  selector: 'ngk-tab'
})
export class NgkTabDirective implements AfterContentChecked {
  /**
   * Unique tab identifier. Must be unique for the entire document for proper accessibility support.
   */
  @Input() id = `ngk-tab-${nextId++}`;
  /**
   * Simple (string only) title. Use the "NgkTabTitle" directive for more complex use-cases.
   */
  @Input() title: string;
  /**
   * Allows toggling disabled state of a given state. Disabled tabs can't be selected.
   */
  @Input() disabled = false;

  titleTpl: NgkTabTitleDirective | null;
  contentTpl: NgkTabContentDirective | null;
  titleRootNode: HTMLElement;

  @ContentChildren(NgkTabTitleDirective, { descendants: false }) titleTpls: QueryList<NgkTabTitleDirective>;
  @ContentChildren(NgkTabContentDirective, { descendants: false }) contentTpls: QueryList<NgkTabContentDirective>;

  ngAfterContentChecked() {
    // We are using @ContentChildren instead of @ContentChild as in the Angular version being used
    // only @ContentChildren allows us to specify the {descendants: false} option.
    this.titleTpl = this.titleTpls.first;
    this.contentTpl = this.contentTpls.first;
    if (this.titleTpl) {
      const embedView = this.titleTpl.templateRef.createEmbeddedView(null);
      this.titleRootNode = embedView.rootNodes[0];
    }

  }
}


/**
 * A component that makes it easy to create tabbed interface.
 */
@Component({
  selector: 'ngk-tabset',
  exportAs: 'ngkTabset',
  templateUrl: './tabset.component.html',
  styleUrls: ['./tabset.component.scss']
})
export class NgkTabsetComponent implements AfterContentChecked {
  justifyClass: string;

  @ContentChildren(NgkTabDirective) tabs: QueryList<NgkTabDirective>;

  /**
   * An identifier of an initially selected (active) tab. Use the "select" method to switch a tab programmatically.
   */
  @Input() activeId: string;

  /**
   * Whether the closed tabs should be hidden without destroying them
   */
  @Input() destroyOnHide = true;

  /**
   * The horizontal alignment of the nav with flexbox utilities. Can be one of 'start', 'center', 'end', 'fill' or
   * 'justified'
   * The default value is 'start'.
   */
  @Input()
  set justify(className: 'start' | 'center' | 'end' | 'fill' | 'justified') {
    if (className === 'fill' || className === 'justified') {
      this.justifyClass = `tabs-${className}`;
    } else {
      this.justifyClass = `justify-content-${className}`;
    }
  }

  /**
   * Type of navigation to be used for tabs.
   */
  @Input() type: 'tabs' | 'pills' | string;

  /**
   * A tab change event fired right before the tab selection happens. See NgkTabChangeEvent for payload details
   */
  @Output() tabChange = new EventEmitter<NgkTabChangeEvent>();

  constructor(config: NgkTabsetConfig) {
    this.type = config.type;
    this.justify = config.justify;
  }

  /**
   * Selects the tab with the given id and shows its associated pane.
   * Any other tab that was previously selected becomes unselected and its associated pane is hidden.
   * Can call from component with ViewChild and ngAfterViewInit.
   */
  select(tabId: string) {
    const selectedTab = this._getTabById(tabId);
    if (selectedTab && !selectedTab.disabled && this.activeId !== selectedTab.id) {
      let defaultPrevented = false;
      let selectedTabTitle: string;
      if (selectedTab.title) {
        selectedTabTitle = selectedTab.title;
      } else if (selectedTab.titleRootNode.innerText) {
        selectedTabTitle = selectedTab.titleRootNode.innerText;
      }
      this.tabChange.emit({
        activeId: this.activeId,
        nextId: selectedTab.id,
        nextTitle: selectedTabTitle,
        preventDefault: () => { defaultPrevented = true; }
      });
      if (!defaultPrevented) {
        this.activeId = selectedTab.id;
      }
    }
  }

  onKeydown(keyEvent: KeyboardEvent) {
    const allTabs: NgkTabDirective[] = [];
    this.tabs.map(element => { allTabs.push(element); });
    if (keyEvent.keyCode === Key.ArrowLeft) {
      this._previousTab(allTabs);
    } else if (keyEvent.keyCode === Key.ArrowRight) {
      this._nextTab(allTabs);
    }
  }

  ngAfterContentChecked() {
    // auto-correct activeId that might have been set incorrectly as input
    const activeTab = this._getTabById(this.activeId);
    this.activeId = activeTab ? activeTab.id : (this.tabs.length ? this.tabs.first.id : null);
  }

  private _previousTab(tabs) {
    for (const [index, value] of tabs.entries()) {
      if (value.id === this.activeId) {
        if (index > 0) {
          this.select(tabs[index - 1].id);
          return;
        }
      }
    }
  }

  private _nextTab(tabs) {
    const tabsLimit = tabs.length - 1;
    for (const [index, value] of tabs.entries()) {
      if (value.id === this.activeId) {
        if (index < tabsLimit) {
          this.select(tabs[index + 1].id);
          return;
        }
      }
    }
  }

  private _getTabById(id: string): NgkTabDirective {
    const tabsWithId: NgkTabDirective[] = this.tabs.filter(tab => tab.id === id);
    return tabsWithId.length ? tabsWithId[0] : null;
  }
}
