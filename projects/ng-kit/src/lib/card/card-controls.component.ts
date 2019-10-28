import { Component } from '@angular/core';


/**
  * The `NgkCardControlsComponent` is similar to the `NgkCardControlsAreaDirective` in that the content inside it is transcluded
  * into the <i>&#60;ngk-card-header&#62;</i>. However, the `NgkCardControlsComponent` includes padding to cushion buttons uniformally
  * accross the application. If you need to access the entirety of the controls area (the right half of the ngk-card-header)
  * use the `NgkCardControlsDirective` instead.
  */
@Component({
  selector: 'ngk-card-controls',
  templateUrl: './card-controls.component.html',
  styleUrls: ['./card-controls.component.scss']
})
export class NgkCardControlsComponent {

  constructor(
  ) { }
}
