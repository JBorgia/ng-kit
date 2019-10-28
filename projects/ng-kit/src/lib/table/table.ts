import {
  AfterViewInit,
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  ContentChildren,
  Directive,
  ElementRef,
  Input,
  OnDestroy,
  OnInit,
  QueryList,
  Renderer2,
  ViewContainerRef,
  ViewEncapsulation,
} from '@angular/core';
import { Subscription } from 'rxjs';
import { startWith } from 'rxjs/operators';

import { NgkResizeDirective } from '../directives/resize/resize.directive';
import { NgkTableElement } from './table.element';

/**
 * A class for setting the widths of columns in NgkTable. An array of `NgkColWidth` is passed to the `NgkTable` 
 * if setting all using the `ColWidths` input and a single `NgkColWidth` as an input if setting widths on the <i>&#60;th&#62;</i> tags and the `NgkTableHeaderCellDirective`.
 */
export class NgkColWidth {
  grow: number = 0;
  shrink: number = 0;
  basis: 'auto' | string; // must be in px or %

  constructor(grow, shrink, basis) {
    this.grow = grow;
    this.shrink = shrink;
    this.basis = basis;
  }
}


/**
 * NgkTableHeaderCellDirective can be implemented as a `ngk` placed on the <i>&#60;th&#62;</i> tags of a <i>&#60;table&#62;</i>. 
 * If used on one <i>&#60;th&#62;</i> tag it should be used on all of them.
 */
@Directive({
  selector: `th[ngk]`,
  host: {
    class: 'ngk-table-header-cell',
  }
})
export class NgkTableHeaderCellDirective {
  @Input() colWidth: NgkColWidth;
}


/**
 * `NgkTableComponent` is a structural directive component on the html <i>&#60;table&#62;</i> tag to handle
 * overflow management, horizontal layout, column visibility, and to allow for scrolling on the <i>&#60;tbody&#62;</i> tag.
 * The `addBorder` input can be set to true to add a 1px solid border-theme-colored border to the table. Alternatively, any border values set on the <i>&#60;table&#62;</i> tag
 * itself will be transfered upon instantiation to the wrapper <i>&#60;div&#62;</i> the `NgkTableComponent` creates around itself.
 */
@Component({
  selector: 'table[ngk]',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss'],
  encapsulation: ViewEncapsulation.None,
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class NgkTableComponent implements OnInit, AfterViewInit, OnDestroy {
  @Input() overflow: 'auto' | 'scroll' | 'hidden' | 'visible' = 'auto';
  @Input() banded: 'even' | 'odd';
  @Input() colWidths: NgkColWidth[];
  @Input() addBorder = false;
  private _colVisibility: boolean[];
  // Controlling visiblity using the colVisiblity[] input only hides the elements. It does not remove them like *ngIf
  @Input() set colVisibility(value: boolean[]) {
    this._colVisibility = value;
    this.setVisibility(this.ngCells);
    if (this.ngHeadRow) {
      this.adjustForOverflow(this.ngHeadRow);
    }
  }
  @Input() horizontal: boolean = false;

  @ContentChildren(NgkTableHeaderCellDirective) tableHeaderCells: QueryList<NgkTableHeaderCellDirective>;

  observer: MutationObserver;
  // programatically implement resize directive on the table's parent element
  resize: NgkResizeDirective;

  resizeSub: Subscription;

  // Table dimentions
  cellCount: number; // total cells
  colCount: number; // number of columns
  rowCount: number; // number of rows

  // ElementRefs to table parts
  ngTable: NgkTableElement;
  ngBody: NgkTableElement;
  ngHead: NgkTableElement;
  ngHeadRow: NgkTableElement;
  ngBodyRows: NgkTableElement[];
  ngThs: NgkTableElement[];
  ngTds: NgkTableElement[];
  ngCells: NgkTableElement[];

  constructor(
    private el: ElementRef,
    private viewContainer: ViewContainerRef,
    private renderer: Renderer2,
    private cdf: ChangeDetectorRef
  ) { }

  ngOnInit() {
  }

  ngAfterViewInit() {
    this.wrapSelf();

    this.observer = new MutationObserver((mutations) => {
      this.captureTable();
      this.applyFormatting();
    });

    this.observer.observe(this.viewContainer.element.nativeElement, {
      childList: true,
      subtree: true
    });

    this.captureTable();
    this.applyFormatting();

    // Handle adjusting the padding of the header row in the case of the table being resized. Trigger on init.
    this.resize = new NgkResizeDirective(new ElementRef(this.el.nativeElement.parentNode));
    this.resize.ngOnInit();
    this.resizeSub = this.resize.resize.pipe(
      startWith(null)
    ).subscribe(resizeEvent => {
      this.adjustForOverflow(this.ngHeadRow);
    });
  }

  ngOnDestroy() {
    this.resizeSub.unsubscribe();
    this.observer.disconnect();
  }

  /**
   * In order to make implementation a bit easier regarding overflows (particularly at smaller resolutions) the table
   * wraps itself in a div. The 'table-wrapper' div then has overflow-x: auto set to itself so the table can scroll horizontally
   * when the screen becomes too small. 
   */
  wrapSelf() {
    const parent = this.el.nativeElement.parentNode;
    const element = this.el.nativeElement;

    // Create a div
    const divElement = this.renderer.createElement('div');

    // Add class 'table-wrapper'
    this.renderer.addClass(divElement, 'table-wrapper');

    // Transfer any border settings from the table to the new wrapper element
    this.transferBorders(this.el, divElement);

    if (this.addBorder) {
      // Add class 'table-wrapper'
      this.renderer.addClass(divElement, 'border');
    }

    // Add the div, just before the table
    this.renderer.insertBefore(parent, divElement, element);

    // Remove the table
    this.renderer.removeChild(parent, element);

    // Re-add it inside the div
    this.renderer.appendChild(divElement, element);
  }

  // Copies the border settings from the table to the wrapper div, then strips the table of its borders (they do not work with the wrapper's overflow handling).
  transferBorders(el, divElement) {
    [
      'border-top-width',
      'border-right-width',
      'border-bottom-width',
      'border-left-width',
      'border-top-style',
      'border-right-style',
      'border-bottom-style',
      'border-left-style',
    ].forEach(borderSide => {
      const style = document.defaultView.getComputedStyle(el.nativeElement)[borderSide];
      this.renderer.setStyle(divElement, borderSide, style);
      this.renderer.setStyle(el.nativeElement, borderSide, 'none');
    })
  }

  setVisibility(ngCells: NgkTableElement[]) {
    if (this._colVisibility) {
      for (let rowNum = 0; rowNum < this.rowCount; rowNum++) {
        let restyled = false;
        for (let colNum = 0; colNum < this.colCount; colNum++) {
          ngCells[rowNum * this.colCount + colNum].setStyle('display', this._colVisibility[colNum] ? 'flex' : 'none');

          // Remove border left for the first visible column
          if (!restyled && this._colVisibility[colNum] && colNum <= this.colCount) {
            ngCells[rowNum * this.colCount + colNum].setStyle('border-left-width', 0);
            restyled = true;
          } else {
            ngCells[rowNum * this.colCount + colNum].setStyle('border-left-width', '1px');
          }
        }
      }
    }
  }

  applyFormatting() {
    this.captureColumnWidths(this.tableHeaderCells);
    this.styleTable(this.ngTable);
    this.styleHead(this.ngHead);
    this.styleBody(this.ngBody);
    this.styleBodyRows(this.ngBodyRows);
    // Head rows can't be done before the body rows.
    // As the flex styling hasn't yet overwritten the default display table, the padding for scrollbar will be off.
    this.styleCells(this.ngCells);
    this.setVisibility(this.ngCells);
    // Finally, we adjust for the scrollbar and the overflow.
    this.adjustForOverflow(this.ngHeadRow);
  }

  styleTable(table: NgkTableElement) {
    table.addClass('ngk--table');
    if (this.horizontal) {
      table.addClass('ngk--table-horizontal');
    } else {
      table.addClass('ngk--table-vertical');
    }
  }

  styleHead(head: NgkTableElement) {
    head.addClass('ngk--table-head');
  }

  styleBody(body: NgkTableElement) {
    if (!this.horizontal) {
      body.setStyle('overflow-y', this.overflow);
    } else {
      body.setStyle('overflow-x', this.overflow);
    }
    body.addClass('ngk--table-body');
  }

  styleBodyRows(bodyRows: NgkTableElement[]) {
    bodyRows.forEach((bodyRow, idx) => {
      bodyRow.addClass('ngk--table-tr');

      if (
        this.banded &&
        idx % 2 === (this.banded === 'even' ? 1 : 0)
      ) {
        bodyRow.addClass('ngk--table-banded');
      }
    });
  }

  adjustForOverflow(headRow: NgkTableElement) {
    if (!headRow.classList.contains('ngk--table-tr')) {
      headRow.addClass('ngk--table-tr');
    }

    this.ngTable.removeStyle('min-width');

    const theadWidth = this.ngThs.reduce((totalWidth, ngTh) => {
      return totalWidth + ngTh.el.nativeElement.offsetWidth;
    }, 0);

    if (this.horizontal) {
      const scrollBarHeight = this.ngBody.el.nativeElement.offsetHeight - this.ngBody.el.nativeElement.clientHeight;
      headRow.setStyle('padding-bottom', `${scrollBarHeight}px`);
    } else {
      const scrollBarWidth = this.ngBody.el.nativeElement.offsetWidth - this.ngBody.el.nativeElement.clientWidth;
      headRow.setStyle('padding-right', `${scrollBarWidth}px`);
      this.ngTable.setStyle('min-width', `${theadWidth + scrollBarWidth}px`);
    }

  }

  styleCells(cells: NgkTableElement[]) {
    if (this.colWidths && this.colWidths.length !== this.colCount) {
      throw new Error(
        `If defining table column widths, a width must be specified for each column.
      I got ${this.colWidths.length} NgkColWidths, but have ${this.colCount} columns.`);
    }

    for (let rowNum = 0; rowNum < this.rowCount; rowNum++) {
      for (let colNum = 0; colNum < this.colCount; colNum++) {
        if (!this.horizontal) {
          // tslint:disable-next-line:max-line-length
          cells[rowNum * this.colCount + colNum].setStyle('flex-grow', this.colWidths && this.colWidths[colNum] && typeof this.colWidths[colNum].grow === 'number' ? this.colWidths[colNum].grow : 0);
          // tslint:disable-next-line:max-line-length
          cells[rowNum * this.colCount + colNum].setStyle('flex-shrink', this.colWidths && this.colWidths[colNum] && typeof this.colWidths[colNum].shrink === 'number' ? this.colWidths[colNum].shrink : 0);
          // tslint:disable-next-line:max-line-length
          cells[rowNum * this.colCount + colNum].setStyle('flex-basis', this.colWidths && this.colWidths[colNum] && this.colWidths[colNum].basis ? this.colWidths[colNum].basis : `${100 / this.colCount}%`);
        }

        if (cells[rowNum * this.colCount + colNum].tagName === 'TH') {
          cells[rowNum * this.colCount + colNum].addClass('ngk--table-th');
        }

        if (cells[rowNum * this.colCount + colNum].tagName === 'TD') {
          cells[rowNum * this.colCount + colNum].addClass('ngk--table-td');
        }

        cells[rowNum * this.colCount + colNum].addClass('ngk--table-cell');
      }
    }
  }

  captureTable() {
    // capture and excapsulate table parts
    const table = new ElementRef(this.viewContainer.element.nativeElement);
    this.ngTable = new NgkTableElement(table, this.renderer, this.cdf);

    const tbody = new ElementRef(this.ngTable.el.nativeElement.getElementsByTagName('tbody')[0]);
    this.ngBody = new NgkTableElement(tbody, this.renderer, this.cdf);

    const thead = new ElementRef(this.ngTable.el.nativeElement.getElementsByTagName('thead')[0]);
    this.ngHead = new NgkTableElement(thead, this.renderer, this.cdf);

    const headRow = this.ngTable.el.nativeElement.querySelectorAll('thead tr')[0];
    this.ngHeadRow = new NgkTableElement(new ElementRef(headRow), this.renderer, this.cdf);

    const bodyRows = this.ngTable.el.nativeElement.querySelectorAll('tbody tr');
    this.ngBodyRows = [...bodyRows].map(bodyRow => new NgkTableElement(new ElementRef(bodyRow), this.renderer, this.cdf));

    const th = this.ngTable.el.nativeElement.querySelectorAll('th');
    this.ngThs = [...th].map(cell => new NgkTableElement(new ElementRef(cell), this.renderer, this.cdf));

    const td = this.ngTable.el.nativeElement.querySelectorAll('td');
    this.ngTds = [...td].map(cell => new NgkTableElement(new ElementRef(cell), this.renderer, this.cdf));

    this.ngCells = [...this.ngThs, ...this.ngTds]

    // calculate table proportions
    this.calcTableProportions();
  }

  captureColumnWidths(tableHeaderCells: QueryList<NgkTableHeaderCellDirective>) {
    if (this.tableHeaderCells && this.tableHeaderCells.length) {
      this.colWidths = tableHeaderCells.map(tableHeaderCell => tableHeaderCell.colWidth);
    }
  }

  calcTableProportions() {
    this.cellCount = this.ngCells.length;
    this.colCount = this.ngCells.filter(cell => cell.tagName === 'TH').length;
    this.rowCount = this.cellCount / this.colCount;
  }
}
