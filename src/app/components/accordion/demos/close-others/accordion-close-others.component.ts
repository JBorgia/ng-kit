import { Component, OnInit } from '@angular/core';

import { BACON_IPSUM } from '../bacon';

@Component({
  selector: 'app-accordion-close-others',
  templateUrl: './accordion-close-others.component.html',
  styleUrls: ['./accordion-close-others.component.scss']
})
export class AccordionCloseOthersComponent implements OnInit {
  bacon = BACON_IPSUM;

  constructor() {
  }

  ngOnInit() {
  }

}
