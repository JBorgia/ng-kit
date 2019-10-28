import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgKitMenuItem, NgKitSidebarComponent } from 'ng-kit';
import { Subject, Subscription } from 'rxjs';

import { NavSidebarService } from './nav-sidebar.service';

// import { BASEMENU, RESOURCES, SUPPORT } from './menu-items';
@Component({
  selector: 'app-nav-sidebar',
  templateUrl: './nav-sidebar.component.html',
  styleUrls: ['./nav-sidebar.component.scss']
})
export class NavSidebarComponent implements OnInit, OnDestroy {
  @ViewChild(NgKitSidebarComponent, { static: true }) xmSidebar: NgKitSidebarComponent;
  showMinisidebar$ = new Subject<boolean>();
  subs: Subscription[] = [];
  mainContainer: HTMLElement;

  constructor(
    private router: Router,
    private navSidebarService: NavSidebarService,
  ) { }

  get showMinisidebar() {
    return this.navSidebarService.showMinisidebar;
  }


  get sidebarMenuItems$() {
    return this.navSidebarService.sidebarMenuItems$;
  }

  ngOnInit() {
    this.subs.push(this.navSidebarService.onMenuItemUpdate$.subscribe(itemOldTitleParent => {
      const item: NgKitMenuItem = itemOldTitleParent.item; // the item data
      const title: string = itemOldTitleParent.title; // the current reference title to update
      const parentTitle: string = itemOldTitleParent.parentTitle; // the parent title within which the title to update sits.

      if (!item) {
        this.xmSidebar.deleteSidebarItemByTitle(title, parentTitle);
      } else if (!title) {
        this.xmSidebar.appendSidebarItemByTitle(item, parentTitle);
      } else {
        this.xmSidebar.updateSidebarItemByTitle(item, title, parentTitle);
      }
    }));
    this.mainContainer = document.getElementById('main-container');
  }

  navigate(event) {
    if (!event.route) {
      return;
    }
    if (event.route.params) {
      this.router.navigate([event.route.url], {
        queryParams: event.route.params
      });
    } else {
      if (event.route.isExternal) {
        window.open(event.route.url, '_blank');
      } else {
        if (event.route.isAnchor) {
          this.router.navigate([event.route.url], { fragment: event.route.fragment }).then(() => {

            const yourElement = document.getElementById(event.route.fragment);
            const yCoordinate = yourElement.offsetTop;
            const yOffset = -16;

            this.mainContainer.scrollTo({
              top: yCoordinate + yOffset,
              behavior: 'smooth'
            });

          });
        } else {
          this.router.navigate([event.route.url]);
        }
      }
    }
  }

  ngOnDestroy() {
    this.subs.forEach(sub => sub.unsubscribe());
  }
}
