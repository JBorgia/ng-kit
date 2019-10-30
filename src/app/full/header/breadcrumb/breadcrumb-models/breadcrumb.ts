import { BreadcrumbRoute } from './breadcrumb-route';

export class Breadcrumb {
  constructor(
    title = '',
    breadcrumbRoute = new BreadcrumbRoute()
  ) {
    this.title = title;
    this.breadcrumbRoute = breadcrumbRoute;
  }

  title: string;
  breadcrumbRoute: BreadcrumbRoute;
}
