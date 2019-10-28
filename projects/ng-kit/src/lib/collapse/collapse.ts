import { Component, Directive, forwardRef, HostBinding, HostListener, Inject, Input, OnInit } from '@angular/core';

@Component({
  selector: 'ngk-collapse-content, div[ngkCollapseContent]',
  templateUrl: './collapse-content.component.html',
  styleUrls: ['./collapse-content.component.scss'],
  exportAs: 'ngkCollapseContent',
})
export class NgkCollapseContentComponent implements OnInit {

  @HostBinding('class.open') get show() { return this.content.isOpen(); }

  constructor(
    /* tslint:disable-next-line:no-use-before-declare */
    @Inject(forwardRef(() => NgkCollapseComponent)) public content,
  ) { }

  ngOnInit(): void { }

}

@Directive({
  /* tslint:disable-next-line:directive-selector */
  selector: '[ngkCollapseToggle]',
})
export class NgkCollapseToggleDirective {

  @HostListener('click') onClick() {
    this.toggleOpen();
  }

  constructor(
    /* tslint:disable-next-line:no-use-before-declare */
    @Inject(forwardRef(() => NgkCollapseComponent)) public content,
  ) { }

  toggleOpen() {
    this.content.toggle();
  }
}

/**
 * A component to provide a simple way of hiding and showing elements on the page.
 */
@Component({
  selector: 'ngk-collapse, [ngkCollapse]',
  templateUrl: './collapse.component.html',
  styleUrls: ['./collapse.component.scss'],
  exportAs: 'ngkCollapse',
})
export class NgkCollapseComponent implements OnInit {

  @Input() collapsedContent;

  @HostBinding('class.open') @Input() _open = true;
  @HostBinding('class.empty') hasNoContent: boolean = false;

  constructor() { }

  ngOnInit(): void {
    this.contentVerify(this.collapsedContent);
  }

  contentVerify(content) {
    if (content) {
      this.hasNoContent = Object.keys(content).length ? false : true;
    } else {
      this.hasNoContent = true;
    }
  }

  isOpen(): boolean { return this._open; }

  open(): void {
    if (!this._open) {
      this._open = true;
    }
  }

  close(): void {
    if (this._open) {
      this._open = false;
    }
  }

  toggle() {
    if (this.isOpen()) {
      this.close();
    } else {
      this.open();
    }
  }

}
