import { Component } from '@angular/core';


/**
  * The `XmCardControlsComponent` is similar to the `XmCardControlsAreaDirective` in that the content inside it is transcluded
  * into the <i>&#60;ng-kit-card-header&#62;</i>. However, the `XmCardControlsComponent` includes padding to cushion buttons uniformally
  * accross the application. If you need to access the entirety of the controls area (the right half of the ng-kit-card-header)
  * use the `XmCardControlsDirective` instead.
  */
@Component({
  selector: 'ng-kit-card-controls',
  templateUrl: './card-controls.component.html',
  styleUrls: ['./card-controls.component.scss']
})
export class XmCardControlsComponent {

  constructor(
  ) { }
}
