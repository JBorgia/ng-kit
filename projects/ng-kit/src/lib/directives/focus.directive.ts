import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[xmFocus]'
})
export class XmFocusDirective implements OnInit {

  constructor(
    public renderer: Renderer2,
    public elementRef: ElementRef
  ) { }

  ngOnInit() {
    this.renderer.selectRootElement(this.elementRef.nativeElement).focus();
  }
}
