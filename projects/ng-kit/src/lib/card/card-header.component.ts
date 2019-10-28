import { Component, OnInit } from '@angular/core';

/**
  * The `NgkCardHeaderComponent` is a wrapper component for content transcluded into the ngk-card 
  * and contains the `NgkCardBadgeComponent`, `NgkCardTitleAreaDirective` / <i>&#60;header&#62;</i>, and
  * `NgkCardControlsComponent` / `NgkCardControlsAreaDirective`.<br><br>
  * <b>NOTE:</b> <i>`NgkCardHeaderComponent` is not exported and should not be instantiated by a user.
  * Use the `NgkCardBadgeComponent`, `NgkCardTitleAreaDirective` / <i>&#60;header&#62;</i>, and
  * `NgkCardControlsComponent` / `NgkCardControlsAreaDirective` tags instead to access the areas of the `NgkCardHeaderComponent`.</i>
  */
@Component({
  selector: 'ngk-card-header',
  templateUrl: './card-header.component.html',
  styleUrls: ['./card-header.component.scss']
})
export class NgkCardHeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
