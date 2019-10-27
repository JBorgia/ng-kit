import { Component } from '@angular/core';

/**
  * The `XmCardBodyComponent` is a wrapper component for the the lower part of the `XmCardComponent` and contains any untagged content. 
  * It can be overridden and replaced by tagging an element with the `XmCardBodyDirective`.<br><br>
  * <b>NOTE:</b> <i>`XmCardBodyComponent` is not exported and should not be instantiated by a user. Untagged content will be automatically
  * transcluded into it. To replace it, use the `XmCardBodyDirective` tag instead.</i>
  */
@Component({
  selector: 'ng-kit-card-body',
  templateUrl: './card-body.component.html',
  styleUrls: ['./card-body.component.scss']
})
export class XmCardBodyComponent {

  constructor() { }

}
