import { Component, OnInit } from '@angular/core';


/**
 * The `NgkAccordionHeaderComponent` is a wrapper component for content transcluded using the `ngk-accordion-header` or `ngkAccordionHeader` directive tags.
 * It is instantiated internally by the `NgkAccordionPanelComponent`.<br><br>
 * <b>NOTE:</b> <i>`NgkAccordionHeaderComponent` is not exported and should not be instantiated by a user. Use `NgkAccordionHeaderDirective` tags instead.</i>
 */
@Component({
  selector: 'ngk-accordion-header',
  templateUrl: './accordion-header.component.html',
  styleUrls: ['./accordion-header.component.scss']
})
export class NgkAccordionHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
