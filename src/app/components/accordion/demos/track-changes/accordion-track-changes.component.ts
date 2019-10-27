import { Component, OnInit } from '@angular/core';

import { BACON_IPSUM } from '../bacon';

@Component({
  selector: 'app-accordion-track-changes',
  templateUrl: './accordion-track-changes.component.html',
  styleUrls: ['./accordion-track-changes.component.scss']
})
export class AccordionTrackChangesComponent implements OnInit {
  panelStates = 'Click on an accordion to see the panel states.';
  bacon = BACON_IPSUM;

  constructor() { }

  ngOnInit() {
  }

  onChanges(accordionStatus) {
    this.panelStates = accordionStatus.map(accordionState => JSON.stringify(accordionState)).join();
  }
}
