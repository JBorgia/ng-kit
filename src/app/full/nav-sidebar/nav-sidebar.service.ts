import { Injectable } from '@angular/core';
import { NgKitMenuItem } from 'ng-kit';
import { BehaviorSubject, Subject } from 'rxjs';

import { BASEMENU } from './menu-items';

@Injectable({
  providedIn: 'root'
})
export class NavSidebarService {
  private user: any;
  sidebarMenuItems$;
  onMenuItemUpdate$ = new Subject<{ item: NgKitMenuItem, title: string, parentTitle: string }>();
  showMinisidebar: boolean = false;

  constructor() {
    this.loadMenuData();
  }

  loadMenuData() {
    // a user's teams can come from one of two endpoints
    this.sidebarMenuItems$ = new BehaviorSubject<NgKitMenuItem[]>([
      // new MenuItem(
      //   0,
      //   `${this.user.employee.firstName} ${this.user.employee.lastName}`,
      //   'icon-account',
      //   { url: '/profile' }
      // ),
      ...this.getMenuItemsByTier()
    ]);

  }

  private getMenuItemsByTier() {
    const menuItems = BASEMENU;
    // menuItems.push(SUPPORT);

    return menuItems;
  }

  updateSidebarItemByTitle(item, title, parentTitle) {
    this.onMenuItemUpdate$.next({ item, title, parentTitle });
  }
}

