import { Component, EventEmitter, Output } from '@angular/core';
import { Router } from '@angular/router';

import { NavSidebarService } from '../nav-bar/nav-bar.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  @Output() toggleSidebar = new EventEmitter<void>();


  constructor(
    private router: Router,
    private navSidebarService: NavSidebarService,
  ) { }

  get showMinisidebar() {
    return this.navSidebarService.showMinisidebar;
  }
}
