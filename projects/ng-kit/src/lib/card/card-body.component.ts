import { Component } from '@angular/core';

/**
  * The `NgKitCardBodyComponent` is a wrapper component for the the lower part of the `NgKitCardComponent` and contains any untagged content. 
  * It can be overridden and replaced by tagging an element with the `NgKitCardBodyDirective`.<br><br>
  * <b>NOTE:</b> <i>`NgKitCardBodyComponent` is not exported and should not be instantiated by a user. Untagged content will be automatically
  * transcluded into it. To replace it, use the `NgKitCardBodyDirective` tag instead.</i>
  */
@Component({
  selector: 'ng-kit-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.scss']
})
export class NgKitCardBodyComponent {

  constructor() { }

}
