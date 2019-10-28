import { Directive, ElementRef, EventEmitter, OnDestroy, OnInit, Output } from '@angular/core';
import { ResizeSensor } from 'css-element-queries';
import { Subject, Subscription } from 'rxjs';

import { ResizedEvent } from './resized-event';

@Directive({
  selector: '[resize]'
})
export class NgkResizeDirective implements OnInit, OnDestroy {

  @Output()
  readonly resize = new EventEmitter<ResizedEvent>();
  private debouncer: Subject<ResizedEvent> = new Subject();
  private subs: Subscription[] = [];
  private resizeSensorRef;

  private oldWidth: number;
  private oldHeight: number;

  constructor(private readonly element: ElementRef) {
  }

  ngOnInit() {
    // tslint:disable-next-line:no-unused-expression
    this.resizeSensorRef = new ResizeSensor(this.element.nativeElement, () => this.onResize());

    this.onResize();
  }

  private onResize() {
    const newWidth = this.element.nativeElement.clientWidth;
    const newHeight = this.element.nativeElement.clientHeight;

    if (newWidth === this.oldWidth && newHeight === this.oldHeight) {
      return;
    }

    const event = new ResizedEvent(
      this.element,
      newWidth,
      newHeight,
      this.oldWidth,
      this.oldHeight
    );

    this.oldWidth = this.element.nativeElement.clientWidth;
    this.oldHeight = this.element.nativeElement.clientHeight;
    this.resize.emit(event);
  }

  ngOnDestroy(): void {
    this.subs.forEach(sub => sub.unsubscribe);
    this.resizeSensorRef.detach();
  }

}
