import { DOCUMENT } from '@angular/common';
import {
  AfterViewInit,
  Component,
  ElementRef,
  EventEmitter,
  HostBinding,
  HostListener,
  Inject,
  Input,
  OnDestroy,
  OnInit,
  Output,
  ViewEncapsulation,
} from '@angular/core';

import { getFocusableBoundaryElements } from '../util/focus-trap';
import { ModalDismissReasons } from './modal-dismiss-reasons';

@Component({
  selector: 'ngk-modal-window',
  template: `
    <div [class]="'modal-dialog' + (size ? ' modal-' + size : '') + (centered ? ' modal-dialog-centered' : '') +
     (scrollable ? ' modal-dialog-scrollable' : '')" role="document">
        <div class="modal-content"><ng-content></ng-content></div>
    </div>`,
  styleUrls: ['./modal-window.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class NgkModalWindowComponent implements OnInit, AfterViewInit, OnDestroy {
  private _elWithFocus: Element;  // element that is focused prior to modal opening

  @HostBinding('attr.role') role = 'dialog';
  @HostBinding('attr.tabindex') tabIndex = '-1';
  @HostBinding('attr.aria-modal') ariaModal = true;
  @HostBinding('attr.aria-labelledby') @Input() ariaLabelledBy: string;

  @HostBinding('class') get classes() {
    return `${this.windowClass ? this.windowClass : ''} ${this.lightboxMode ? 'lightbox' : ''} modal fade show d-block`;
  }
  @Input() backdrop: boolean | string = true;
  @Input() centered: string;
  @Input() keyboard = true;
  @Input() scrollable: string;
  @Input() size: string;
  @Input() windowClass: string;
  @Input() lightboxMode: boolean;

  @Output() dismissEvent = new EventEmitter();

  @HostListener('click', ['$event']) onClick(event) {
    this.backdropClick(event);
  }

  @HostListener('keyup.esc', ['$event']) onKeyup(event) {
    this.escKey(event);
  }

  constructor(
    @Inject(DOCUMENT) private _document: any,
    private _elRef: ElementRef<HTMLElement>,
  ) { }

  backdropClick($event): void {
    if (this.backdrop === true && this._elRef.nativeElement === $event.target) {
      this.dismiss(ModalDismissReasons.BACKDROP_CLICK);
    }
  }

  escKey($event): void {
    if (this.keyboard && !$event.defaultPrevented) {
      this.dismiss(ModalDismissReasons.ESC);
    }
  }

  dismiss(reason): void { this.dismissEvent.emit(reason); }

  ngOnInit() { this._elWithFocus = this._document.activeElement; }

  ngAfterViewInit() {
    if (!this._elRef.nativeElement.contains(document.activeElement)) {
      const autoFocusable = this._elRef.nativeElement.querySelector(`[Autofocus]`) as HTMLElement;
      const firstFocusable = getFocusableBoundaryElements(this._elRef.nativeElement)[0];

      const elementToFocus = autoFocusable || firstFocusable || this._elRef.nativeElement;
      elementToFocus.focus();
    }
  }

  ngOnDestroy() {
    const body = this._document.body;
    const elWithFocus = this._elWithFocus;

    let elementToFocus;
    if (elWithFocus && elWithFocus['focus'] && body.contains(elWithFocus)) {
      elementToFocus = elWithFocus;
    } else {
      elementToFocus = body;
    }
    elementToFocus.focus();
    this._elWithFocus = null;
  }
}
