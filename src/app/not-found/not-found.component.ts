import { Component, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BreakpointService } from '@services/breakpoint.service';

@Component({
  selector: 'app-not-found',
  templateUrl: './not-found.component.html',
  styleUrls: ['./not-found.component.scss']
})
export class NotFoundComponent implements OnInit, OnDestroy {

  constructor(
    private breakpointService: BreakpointService,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  ngOnDestroy() {
  }

}
