import {
  ChangeDetectionStrategy,
  Component,
  ContentChild,
  Directive,
  EventEmitter,
  Injectable,
  Input,
  OnChanges,
  Output,
  SimpleChanges,
  TemplateRef,
} from '@angular/core';

import { getValueInRange, isNumber } from '../util/util';

@Injectable({ providedIn: 'root' })
export class NgKitPaginationConfig {
  disabled = false;
  boundaryLinks = false;
  directionLinks = true;
  ellipses = true;
  maxSize = 0;
  pageSize = 10;
  rotate = false;
  size: 'sm' | 'lg';
}

/**
 * A context for the
 * * `NgKitPaginationFirst`
 * * `NgKitPaginationPrevious`
 * * `NgKitPaginationNext`
 * * `NgKitPaginationLast`
 * * `NgKitPaginationEllipsis`
 *
 * link templates in case you want to override one.
 *
 * @since 4.1.0
 */
export interface NgKitPaginationLinkContext {
  /**
   * The currently selected page number
   */
  currentPage: number;

  /**
   * If `true`, the current link is disabled
   */
  disabled: boolean;
}

/**
 * A context for the `NgKitPaginationNumber` link template in case you want to override one.
 *
 * Extends `NgKitPaginationLinkContext`.
 *
 * @since 4.1.0
 */
export interface NgKitPaginationNumberContext extends NgKitPaginationLinkContext {
  /**
   * The page number, displayed by the current page link.
   */
  $implicit: number;
}

/**
 * A directive to match the 'ellipsis' link template
 *
 * @since 4.1.0
 */
@Directive({ selector: 'ng-template[xmPaginationEllipsis]' })
export class NgKitPaginationEllipsisDirective {
  constructor(public templateRef: TemplateRef<NgKitPaginationLinkContext>) { }
}

/**
 * A directive to match the 'first' link template
 *
 * @since 4.1.0
 */
@Directive({ selector: 'ng-template[xmPaginationFirst]' })
export class NgKitPaginationFirstDirective {
  constructor(public templateRef: TemplateRef<NgKitPaginationLinkContext>) { }
}

/**
 * A directive to match the 'last' link template
 *
 * @since 4.1.0
 */
@Directive({ selector: 'ng-template[xmPaginationLast]' })
export class NgKitPaginationLastDirective {
  constructor(public templateRef: TemplateRef<NgKitPaginationLinkContext>) { }
}

/**
 * A directive to match the 'next' link template
 *
 * @since 4.1.0
 */
@Directive({ selector: 'ng-template[xmPaginationNext]' })
export class NgKitPaginationNextDirective {
  constructor(public templateRef: TemplateRef<NgKitPaginationLinkContext>) { }
}

/**
 * A directive to match the page 'number' link template
 *
 * @since 4.1.0
 */
@Directive({ selector: 'ng-template[xmPaginationNumber]' })
export class NgKitPaginationNumberDirective {
  constructor(public templateRef: TemplateRef<NgKitPaginationNumberContext>) { }
}

/**
 * A directive to match the 'previous' link template
 *
 * @since 4.1.0
 */
@Directive({ selector: 'ng-template[xmPaginationPrevious]' })
export class NgKitPaginationPreviousDirective {
  constructor(public templateRef: TemplateRef<NgKitPaginationLinkContext>) { }
}

/**
 * A component that displays page numbers and allows to customize them in several ways.
 */
@Component({
  selector: 'ng-kit-pagination',
  changeDetection: ChangeDetectionStrategy.OnPush,
  /* tslint:disable-next-line:no-host-metadata-property */
  host: { role: 'navigation' },
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class NgKitPaginationComponent implements OnChanges {
  pageCount = 0;
  pages: number[] = [];

  @ContentChild(NgKitPaginationEllipsisDirective, { static: false }) tplEllipsis: NgKitPaginationEllipsisDirective;
  @ContentChild(NgKitPaginationFirstDirective, { static: false }) tplFirst: NgKitPaginationFirstDirective;
  @ContentChild(NgKitPaginationLastDirective, { static: false }) tplLast: NgKitPaginationLastDirective;
  @ContentChild(NgKitPaginationNextDirective, { static: false }) tplNext: NgKitPaginationNextDirective;
  @ContentChild(NgKitPaginationNumberDirective, { static: false }) tplNumber: NgKitPaginationNumberDirective;
  @ContentChild(NgKitPaginationPreviousDirective, { static: false }) tplPrevious: NgKitPaginationPreviousDirective;

  /**
   * If `true`, pagination links will be disabled.
   */
  @Input() disabled: boolean;

  /**
   * If `true`, the "First" and "Last" page links are shown.
   */
  @Input() boundaryLinks: boolean;

  /**
   * If `true`, the "Next" and "Previous" page links are shown.
   */
  @Input() directionLinks: boolean;

  /**
   * If `true`, the ellipsis symbols and first/last page numbers will be shown when `maxSize` > number of pages.
   */
  @Input() ellipses: boolean;

  /**
   * Whether to rotate pages when `maxSize` > number of pages.
   *
   * The current page always stays in the middle if `true`.
   */
  @Input() rotate: boolean;

  /**
   *  The number of items in your paginated collection.
   *
   *  Note, that this is not the number of pages. Page numbers are calculated dynamically based on
   *  `collectionSize` and `pageSize`. Ex. if you have 100 items in your collection and displaying 20 items per page,
   *  you'll end up with 5 pages.
   */
  @Input() collectionSize: number;

  /**
   *  The maximum number of pages to display.
   */
  @Input() maxSize: number;

  /**
   *  The current page.
   *
   *  Page numbers start with `1`.
   */
  @Input() page = 1;

  /**
   *  The number of items per page.
   */
  @Input() pageSize: number;

  /**
   *  An event fired when the page is changed. Will fire only if collection size is set and all values are valid.
   *
   *  Event payload is the number of the newly selected page.
   *
   *  Page numbers start with `1`.
   */
  @Output() pageChange = new EventEmitter<number>(true);

  /**
   * The pagination display size.
   *
   * Bootstrap currently supports small and large sizes.
   */
  @Input() size: 'sm' | 'lg';

  constructor(config: NgKitPaginationConfig) {
    this.disabled = config.disabled;
    this.boundaryLinks = config.boundaryLinks;
    this.directionLinks = config.directionLinks;
    this.ellipses = config.ellipses;
    this.maxSize = config.maxSize;
    this.pageSize = config.pageSize;
    this.rotate = config.rotate;
    this.size = config.size;
  }

  hasPrevious(): boolean { return this.page > 1; }

  hasNext(): boolean { return this.page < this.pageCount; }

  nextDisabled(): boolean { return !this.hasNext() || this.disabled; }

  previousDisabled(): boolean { return !this.hasPrevious() || this.disabled; }

  selectPage(pageNumber: number): void { this._updatePages(pageNumber); }

  ngOnChanges(changes: SimpleChanges): void { this._updatePages(this.page); }

  isEllipsis(pageNumber): boolean { return pageNumber === -1; }

  /**
   * Appends ellipses and first/last page number to the displayed pages
   */
  private _applyEllipses(start: number, end: number) {
    if (this.ellipses) {
      if (start > 0) {
        if (start > 1) {
          this.pages.unshift(-1);
        }
        this.pages.unshift(1);
      }
      if (end < this.pageCount) {
        if (end < (this.pageCount - 1)) {
          this.pages.push(-1);
        }
        this.pages.push(this.pageCount);
      }
    }
  }

  /**
   * Rotates page numbers based on maxSize items visible.
   * Currently selected page stays in the middle:
   *
   * Ex. for selected page = 6:
   * [5,*6*,7] for maxSize = 3
   * [4,5,*6*,7] for maxSize = 4
   */
  private _applyRotation(): [number, number] {
    let start = 0;
    let end = this.pageCount;
    const leftOffset = Math.floor(this.maxSize / 2);
    const rightOffset = this.maxSize % 2 === 0 ? leftOffset - 1 : leftOffset;

    if (this.page <= leftOffset) {
      // very beginning, no rotation -> [0..maxSize]
      end = this.maxSize;
    } else if (this.pageCount - this.page < leftOffset) {
      // very end, no rotation -> [len-maxSize..len]
      start = this.pageCount - this.maxSize;
    } else {
      // rotate
      start = this.page - leftOffset - 1;
      end = this.page + rightOffset;
    }

    return [start, end];
  }

  /**
   * Paginates page numbers based on maxSize items per page.
   */
  private _applyPagination(): [number, number] {
    const page = Math.ceil(this.page / this.maxSize) - 1;
    const start = page * this.maxSize;
    const end = start + this.maxSize;

    return [start, end];
  }

  private _setPageInRange(newPageNo) {
    const prevPageNo = this.page;
    this.page = getValueInRange(newPageNo, this.pageCount, 1);

    if (this.page !== prevPageNo && isNumber(this.collectionSize)) {
      this.pageChange.emit(this.page);
    }
  }

  private _updatePages(newPage: number) {
    this.pageCount = Math.ceil(this.collectionSize / this.pageSize);

    if (!isNumber(this.pageCount)) {
      this.pageCount = 0;
    }

    // fill-in model needed to render pages
    this.pages.length = 0;
    for (let i = 1; i <= this.pageCount; i++) {
      this.pages.push(i);
    }

    // set page within 1..max range
    this._setPageInRange(newPage);

    // apply maxSize if necessary
    if (this.maxSize > 0 && this.pageCount > this.maxSize) {
      let start = 0;
      let end = this.pageCount;

      // either paginating or rotating page numbers
      if (this.rotate) {
        [start, end] = this._applyRotation();
      } else {
        [start, end] = this._applyPagination();
      }

      this.pages = this.pages.slice(start, end);

      // adding ellipses
      this._applyEllipses(start, end);
    }
  }
}