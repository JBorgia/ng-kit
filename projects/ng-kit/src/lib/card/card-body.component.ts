import { Component } from '@angular/core';

/**
  * The `NgkCardBodyComponent` is a wrapper component for the the lower part of the `NgkCardComponent` and contains any untagged content. 
  * It can be overridden and replaced by tagging an element with the `NgkCardBodyDirective`.<br><br>
  * <b>NOTE:</b> <i>`NgkCardBodyComponent` is not exported and should not be instantiated by a user. Untagged content will be automatically
  * transcluded into it. To replace it, use the `NgkCardBodyDirective` tag instead.</i>
  */
@Component({
  selector: 'ngk-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.scss']
})
export class NgkCardBodyComponent {

  constructor() { }

}
