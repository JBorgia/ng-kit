import { BreakpointObserver } from '@angular/cdk/layout';
import { Injectable } from '@angular/core';
import { combineLatest } from 'rxjs';

@Injectable()
export class BreakpointService {
  public breakPointSm = 575;
  public breakPointMd = 767;
  public breakPointLg = 991;
  public isMaxWidthSm;
  public isMaxWidthMd;
  public isMaxWidthLg;
  public isNoBreak;

  constructor(private breakpointObserver: BreakpointObserver) {
    combineLatest(
      breakpointObserver.observe('(max-width: ' + this.breakPointSm + 'px)'),
      breakpointObserver.observe('(max-width: ' + this.breakPointMd + 'px)'),
      breakpointObserver.observe('(max-width: ' + this.breakPointLg + 'px)'),
      breakpointObserver.observe('(min-width: ' + this.breakPointLg + 'px)')
    ).subscribe(state => {
      this.isMaxWidthSm = state[0].matches;
      this.isMaxWidthMd = state[1].matches;
      this.isMaxWidthLg = state[2].matches;
      this.isNoBreak = state[3].matches;
    });
  }
}
