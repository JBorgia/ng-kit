import { Component, OnInit } from '@angular/core';

/**
  * The `NgKitCardHeaderComponent` is a wrapper component for content transcluded into the ng-kit-card 
  * and contains the `NgKitCardBadgeComponent`, `NgKitCardTitleAreaDirective` / <i>&#60;header&#62;</i>, and
  * `NgKitCardControlsComponent` / `NgKitCardControlsAreaDirective`.<br><br>
  * <b>NOTE:</b> <i>`NgKitCardHeaderComponent` is not exported and should not be instantiated by a user.
  * Use the `NgKitCardBadgeComponent`, `NgKitCardTitleAreaDirective` / <i>&#60;header&#62;</i>, and
  * `NgKitCardControlsComponent` / `NgKitCardControlsAreaDirective` tags instead to access the areas of the `NgKitCardHeaderComponent`.</i>
  */
@Component({
  selector: 'ng-kit-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.scss']
})
export class NgKitCardHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
