import { Component, ElementRef, OnInit } from '@angular/core';


/**
 * The `NgKitAccordionBodyComponent` is a wrapper component for content transcluded using the `ng-kit-accordion-body` or `xmAccordionBody` directive tags.
 * It is instantiated internally by the `NgKitAccordionPanelComponent`.<br><br>
 * <b>NOTE:</b> <i>`NgKitAccordionBodyComponent` is not exported and should not be instantiated by a user. Use `NgKitAccordionBodyDirective` tags instead.</i>
 */
@Component({
  selector: 'ng-kit-accordion-body',
  templateUrl: './accordion-body.component.html',
  styleUrls: ['./accordion-body.component.scss']
})
export class NgKitAccordionBodyComponent implements OnInit {
  nativeElement;
  constructor(
    private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.nativeElement = this.elementRef.nativeElement
  }

}
