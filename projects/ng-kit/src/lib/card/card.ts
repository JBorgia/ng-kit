import { Component, ContentChild, Directive, HostBinding, Input } from '@angular/core';

/**
 * The header can host controls (buttons, dropdown, etc). To project control content into the NgKitCardControlsArea you can
 * add the `ng-kit-card-controls-area` or `xmCardControlsArea` directive to the content you'd like projected and place
 * it inside the <i>&#60;ng-kit-card&#62;</i> tags. If both an NgKitCardControls component and an element with the `NgKitCardControlsAreaDirective`
 * exits, the `NgKitCardControlsAreaDirective` will override the `NgKitCardControlsComponent`, replacing it in the dom.
 */
@Directive({
  selector: `[ng-kit-card-controls-area], [xmCardControlsArea]`,
  host: {
    class: 'ng-kit-card-controls',
  }
})
export class NgKitCardControlsAreaDirective { }

@Directive({
  selector: `ng-kit-card-title, [ng-kit-card-title], [xmCardTitle], [ng-kit-card-title-area], [xmCardTitleArea]`,
  host: {
    class: 'ng-kit-card-title',
  }
})
export class NgKitCardTitleAreaDirective { }

/**
 * Using an instance of the `NgKitCardBodyDirective` will override and remove the <i>&#60;ng-content&#62;</i> tag
 * from the `NgKitCardBodyComponent`, removing any content from between the <i>&#60;ng-kit-card&#62;</i> tags that is not tagged
 * for placement elsewhere.
 */
@Directive({
  selector: `[ng-kit-card-body], [xmCardBody]`,
  host: {
    class: 'ng-kit-card-body',
  }
})
export class NgKitCardBodyDirective { }


/**
 * The `NgKitCardComponent` consists of a header and body and is the primary component for a card instantiation. 
 * Within the header are badge, title, and control areas. 
 */
@Component({
  selector: 'ng-kit-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class NgKitCardComponent {
  @Input() title: string;
  @Input() removeBorder: boolean = false;
  @ContentChild(NgKitCardTitleAreaDirective, { static: false }) cardTitleArea: NgKitCardTitleAreaDirective;
  @ContentChild(NgKitCardControlsAreaDirective, { static: false }) cardCardControlsArea: NgKitCardControlsAreaDirective;
  @ContentChild(NgKitCardBodyDirective, { static: false }) cardBody: NgKitCardBodyDirective;
  @HostBinding('class.remove-border') get borderClass() {
    return this.removeBorder;
  }

  constructor(
  ) { }

}