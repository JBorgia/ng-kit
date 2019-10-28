import { ChangeDetectorRef, ElementRef, Renderer2 } from '@angular/core';

export class NgKitTableElement {
  constructor(
    private _el: ElementRef,
    private renderer: Renderer2,
    private cdf: ChangeDetectorRef
  ) {
    this.cdf.markForCheck();
  }

  addClass(value) {
    this.renderer.addClass(this._el.nativeElement, value);
    this.cdf.markForCheck();
  }

  setStyle(style, value) {
    this.renderer.setStyle(this._el.nativeElement, style, value);
    this.cdf.markForCheck();
  }

  removeStyle(style) {
    this.renderer.removeStyle(this._el.nativeElement, style);
    this.cdf.markForCheck();
  }

  getStyleValue(style) {
    return this._el.nativeElement.style[style];
  }

  get tagName() {
    return this._el.nativeElement.tagName;
  }

  get parentTagName() {
    return this._el.nativeElement.parentElement.tagName;
  }

  get classList() {
    return this._el.nativeElement.classList;
  }

  getAttribute(attrName) {
    return this._el.nativeElement.getAttribute(attrName);
  }

  get el() {
    if (this._el) {
      return this._el;
    }
  }
}
