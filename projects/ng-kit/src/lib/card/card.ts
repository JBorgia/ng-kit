import { Component, ContentChild, Directive, HostBinding, Input } from '@angular/core';

/**
 * The header can host controls (buttons, dropdown, etc). To project control content into the NgkCardControlsArea you can
 * add the `ngk-card-controls-area` or `ngkCardControlsArea` directive to the content you'd like projected and place
 * it inside the <i>&#60;ngk-card&#62;</i> tags. If both an NgkCardControls component and an element with the `NgkCardControlsAreaDirective`
 * exits, the `NgkCardControlsAreaDirective` will override the `NgkCardControlsComponent`, replacing it in the dom.
 */
@Directive({
  selector: `[ngk-card-controls-area], [ngkCardControlsArea]`,
  host: {
    class: 'ngk-card-controls',
  }
})
export class NgkCardControlsAreaDirective { }

@Directive({
  selector: `ngk-card-title, [ngk-card-title], [ngkCardTitle], [ngk-card-title-area], [ngkCardTitleArea]`,
  host: {
    class: 'ngk-card-title',
  }
})
export class NgkCardTitleAreaDirective { }

/**
 * Using an instance of the `NgkCardBodyDirective` will override and remove the <i>&#60;ng-content&#62;</i> tag
 * from the `NgkCardBodyComponent`, removing any content from between the <i>&#60;ngk-card&#62;</i> tags that is not tagged
 * for placement elsewhere.
 */
@Directive({
  selector: `[ngk-card-body], [ngkCardBody]`,
  host: {
    class: 'ngk-card-body',
  }
})
export class NgkCardBodyDirective { }


/**
 * The `NgkCardComponent` consists of a header and body and is the primary component for a card instantiation. 
 * Within the header are badge, title, and control areas. 
 */
@Component({
  selector: 'ngk-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class NgkCardComponent {
  @Input() title: string;
  @Input() removeBorder: boolean = false;
  @ContentChild(NgkCardTitleAreaDirective, { static: false }) cardTitleArea: NgkCardTitleAreaDirective;
  @ContentChild(NgkCardControlsAreaDirective, { static: false }) cardCardControlsArea: NgkCardControlsAreaDirective;
  @ContentChild(NgkCardBodyDirective, { static: false }) cardBody: NgkCardBodyDirective;
  @HostBinding('class.remove-border') get borderClass() {
    return this.removeBorder;
  }

  constructor(
  ) { }

}