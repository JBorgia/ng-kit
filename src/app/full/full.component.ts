import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BreakpointService } from '@services/breakpoint.service';

import { NavSidebarService } from './nav-bar/nav-bar.service';


@Component({
  selector: 'app-full-layout',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent implements OnInit {
  public color = 'default';
  public innerWidth: any;

  constructor(
    private router: Router,
    private breakpointService: BreakpointService,
    private navSidebarService: NavSidebarService,
  ) {
  }

  get isFullScreen() {
    return false;
  }

  get showMinisidebar() {
    return this.navSidebarService.showMinisidebar;
  }

  ngOnInit() {
    this.handleSidebarBreakpoint();
  }

  toggleSidebar() {
    this.navSidebarService.showMinisidebar = !this.navSidebarService.showMinisidebar;
  }

  handleSidebarBreakpoint() {
    this.router.events
      .subscribe((event) => {
        if (event instanceof NavigationEnd) {
          if (this.breakpointService.isMaxWidthMd) {
            this.navSidebarService.showMinisidebar = true;
          }
        }
      });
  }

  @HostListener('window:resize', ['$event'])
  onResize(event) {
    this.handleLayout();
  }

  handleLayout() {
    this.innerWidth = window.innerWidth;
    if (this.innerWidth < 1200) {
      this.navSidebarService.showMinisidebar = true;
    } else {
      this.navSidebarService.showMinisidebar = false;
    }
  }

}
