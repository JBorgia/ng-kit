import { Component } from '@angular/core';

import { BreadcrumbService } from './breadcrumb.service';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent {
  get pageInfo() {
    return this.breadcrumbService.pageInfo;
  }

  constructor(
    private breadcrumbService: BreadcrumbService,
  ) {
  }

  get isBreadcrumbHidden(): boolean {
    return this.breadcrumbService.isBreadcrumbHidden;
  }

}
