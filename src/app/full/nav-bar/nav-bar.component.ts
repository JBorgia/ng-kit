import { Component, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgkMenuItem, NgkSidebarComponent } from 'ng-kit';
import { Subject, Subscription } from 'rxjs';

import { NavSidebarService } from './nav-bar.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent implements OnInit, OnDestroy {
  @ViewChild(NgkSidebarComponent, { static: true }) ngkSidebar: NgkSidebarComponent;
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
      const item: NgkMenuItem = itemOldTitleParent.item; // the item data
      const title: string = itemOldTitleParent.title; // the current reference title to update
      const parentTitle: string = itemOldTitleParent.parentTitle; // the parent title within which the title to update sits.

      if (!item) {
        this.ngkSidebar.deleteSidebarItemByTitle(title, parentTitle);
      } else if (!title) {
        this.ngkSidebar.appendSidebarItemByTitle(item, parentTitle);
      } else {
        this.ngkSidebar.updateSidebarItemByTitle(item, title, parentTitle);
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
