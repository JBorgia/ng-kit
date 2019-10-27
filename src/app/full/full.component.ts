import { Component, HostListener, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { BreakpointService } from '@services/breakpoint.service';
import { HostListenerScrollService } from '@services/host-listener-scroll.service';
import { ThemeService } from '@services/theme.service';

import { NavSidebarService } from './nav-sidebar/nav-sidebar.service';

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
    private hostListenerScrollService: HostListenerScrollService,
    private themeService: ThemeService,
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

  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event) {
    const number = $event.target.scrollTop || window.pageYOffset;
    this.hostListenerScrollService.scrollPositionYSubject.next(number);
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
