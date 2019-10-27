import { Injectable } from '@angular/core';
import { XmMenuItem } from 'ng-kit';
import { BehaviorSubject, Subject } from 'rxjs';

import { BASEMENU } from './menu-items';

@Injectable({
  providedIn: 'root'
})
export class NavSidebarService {
  private user: any;
  sidebarMenuItems$;
  onMenuItemUpdate$ = new Subject<{ item: XmMenuItem, title: string, parentTitle: string }>();
  showMinisidebar: boolean = false;

  constructor() {
    this.loadMenuData();
  }

  loadMenuData() {
    // a user's teams can come from one of two endpoints
    this.sidebarMenuItems$ = new BehaviorSubject<XmMenuItem[]>([
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

