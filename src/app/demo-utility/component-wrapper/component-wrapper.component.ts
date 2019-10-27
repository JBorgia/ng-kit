import { Component, NgZone } from '@angular/core';
import { ActivatedRoute, NavigationEnd, Router } from '@angular/router';
import { filter } from 'rxjs/operators';

import { ApiPageComponent } from '../../components/shared/api-page/api-page.component';
import { ExamplesPageComponent } from '../../components/shared/examples-page/examples.component';

@Component({
  selector: 'app-component-wrapper',
  templateUrl: './component-wrapper.component.html',
  styleUrls: ['./component-wrapper.component.scss']
})
export class ComponentWrapperComponent {
  mainContainer: HTMLElement = document.getElementById('main-container');
  activeTab = 'examples';

  component: string;

  tableOfContent: any[] = [];

  constructor(public route: ActivatedRoute, private _router: Router, ngZone: NgZone) {
    // This component is used in route definition 'components'
    // So next child route will always be ':componentType' & next one will always be ':pageType' (or tab)
    this._router.events.pipe(
      filter(event => event instanceof NavigationEnd)
    ).subscribe(() => {
      const parentRoute = this.route.snapshot.parent;
      const tabRoute = this.route.snapshot.firstChild;

      this.component = parentRoute.url[1].path;
      this.activeTab = tabRoute.url[0].path;

    });
  }

  updateNavigation(component) {
    const getLinks = (typeCollection) => {
      return typeCollection.map(item => ({
        fragment: item,
        title: item
      }));
    };
    this.tableOfContent = [];
    if (component instanceof ExamplesPageComponent) {
      this.tableOfContent = component.demos.map(demo => {
        return {
          fragment: demo.id,
          title: demo.title
        };
      });
    }
    else if (component instanceof ApiPageComponent) {
      let toc = [
        ...getLinks(component.components)
      ];

      if (component.classes.length > 0) {
        const klasses = getLinks(component.classes);
        toc = toc.concat(toc.length > 0 ? [{}, ...klasses] : klasses);
      }

      if (component.configs.length > 0) {
        const configs = getLinks(component.configs);
        toc = toc.concat(toc.length > 0 ? [{}, ...configs] : configs);
      }

      this.tableOfContent = toc;

    }
    else /* Overview */ {
      // TODO: maybe we should also have an abstract class to test instanceof
      this.tableOfContent = Object.values(component.sections).map(section => section);
    }
  }

  navClick(fragment: string) {
    const yourElement = document.getElementById(fragment);
    const yCoordinate = yourElement.offsetTop;
    const yOffset = -16;

    this.mainContainer.scrollTo({
      top: yCoordinate + yOffset,
      behavior: 'smooth'
    });
  }

}
