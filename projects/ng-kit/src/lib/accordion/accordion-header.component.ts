import { Component, OnInit } from '@angular/core';


/**
 * The `XmAccordionHeaderComponent` is a wrapper component for content transcluded using the `ng-kit-accordion-header` or `xmAccordionHeader` directive tags.
 * It is instantiated internally by the `XmAccordionPanelComponent`.<br><br>
 * <b>NOTE:</b> <i>`XmAccordionHeaderComponent` is not exported and should not be instantiated by a user. Use `XmAccordionHeaderDirective` tags instead.</i>
 */
@Component({
  selector: 'ng-kit-accordion-header',
  templateUrl: './accordion-header.component.html',
  styleUrls: ['./accordion-header.component.scss']
})
export class XmAccordionHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
