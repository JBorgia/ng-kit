import { Component, OnInit } from '@angular/core';


/**
 * The `NgKitAccordionHeaderComponent` is a wrapper component for content transcluded using the `ng-kit-accordion-header` or `xmAccordionHeader` directive tags.
 * It is instantiated internally by the `NgKitAccordionPanelComponent`.<br><br>
 * <b>NOTE:</b> <i>`NgKitAccordionHeaderComponent` is not exported and should not be instantiated by a user. Use `NgKitAccordionHeaderDirective` tags instead.</i>
 */
@Component({
  selector: 'ng-kit-accordion-header',
  templateUrl: './accordion-header.component.html',
  styleUrls: ['./accordion-header.component.scss']
})
export class NgKitAccordionHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
