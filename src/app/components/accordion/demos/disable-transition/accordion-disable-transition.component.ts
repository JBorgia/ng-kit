import { Component, OnInit } from '@angular/core';

import { BACON_IPSUM } from '../bacon';

@Component({
  selector: 'app-accordion-disable-transition',
  templateUrl: './accordion-disable-transition.component.html',
  styleUrls: ['./accordion-disable-transition.component.scss']
})
export class AccordionDisableTransitionComponent implements OnInit {
  bacon = BACON_IPSUM;

  constructor() {
  }

  ngOnInit() {
  }

}
