import { Component } from '@angular/core';

import { Snippet } from '../../../demo-utility/code/snippet';
import { DemoList } from '../../shared/components.module';
import { Overview } from '../../shared/overview';


@Component({
  selector: 'app-pagination-overview',
  templateUrl: './pagination-overview.component.html',
  host: { '[class.overview]': 'true' }
})
export class PaginationOverviewComponent {
  NGFOR = Snippet({
    lang: 'html',
    code: `
      <table>
        <tr *ngFor="let item of items | slice: (page-1) * pageSize : (page-1) * pageSize + pageSize">
          <!-- content here -->
        </tr>
      </table>
    `,
  });

  XM_PAGINATION = Snippet({
    lang: 'html',
    code: `
      <ngk-pagination
        [(page)]="page"
        [pageSize]="pageSize"
        [collectionSize]="items.length"></ngk-pagination>
    `,
  });

  CUSTOM_CSS = Snippet({
    lang: 'css',
    code: `
      ngk-pagination li {
        &:first-child a {
          span {
            display: none;
          }
          &:before {
            /* provide your content here */
          }
        }
      }
    `,
  });

  CUSTOM_TPL = Snippet({
    lang: 'html',
    code: `
      <ngk-pagination>
        <ng-template ngkPaginationFirst>First</ng-template>
        <ng-template ngkPaginationLast>Last</ng-template>
        <ng-template ngkPaginationPrevious>Prev</ng-template>
        <ng-template ngkPaginationNext>Next</ng-template>
        <ng-template ngkPaginationEllipsis>...</ng-template>
        <ng-template ngkPaginationNumber let-page>{{ page }}</ng-template>
      </ngk-pagination>
    `,
  });

  sections: Overview = {};

  constructor(demoList: DemoList) {
    this.sections = demoList.getOverviewSections('pagination');
  }
}
