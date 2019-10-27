import { Component, OnInit } from '@angular/core';

/**
  * The `XmCardHeaderComponent` is a wrapper component for content transcluded into the ng-kit-card 
  * and contains the `XmCardBadgeComponent`, `XmCardTitleAreaDirective` / <i>&#60;header&#62;</i>, and
  * `XmCardControlsComponent` / `XmCardControlsAreaDirective`.<br><br>
  * <b>NOTE:</b> <i>`XmCardHeaderComponent` is not exported and should not be instantiated by a user.
  * Use the `XmCardBadgeComponent`, `XmCardTitleAreaDirective` / <i>&#60;header&#62;</i>, and
  * `XmCardControlsComponent` / `XmCardControlsAreaDirective` tags instead to access the areas of the `XmCardHeaderComponent`.</i>
  */
@Component({
  selector: 'ng-kit-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.scss']
})
export class XmCardHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
