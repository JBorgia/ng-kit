import { Component, ElementRef, OnInit } from '@angular/core';


/**
 * The `NgkAccordionBodyComponent` is a wrapper component for content transcluded using the `ngk-accordion-body` or `ngkAccordionBody` directive tags.
 * It is instantiated internally by the `NgkAccordionPanelComponent`.<br><br>
 * <b>NOTE:</b> <i>`NgkAccordionBodyComponent` is not exported and should not be instantiated by a user. Use `NgkAccordionBodyDirective` tags instead.</i>
 */
@Component({
  selector: 'ngk-accordion-body',
  templateUrl: './accordion-body.component.html',
  styleUrls: ['./accordion-body.component.scss']
})
export class NgkAccordionBodyComponent implements OnInit {
  nativeElement;
  constructor(
    private elementRef: ElementRef) {
  }

  ngOnInit() {
    this.nativeElement = this.elementRef.nativeElement
  }

}
