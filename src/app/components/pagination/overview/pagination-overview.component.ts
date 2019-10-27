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
      <ng-kit-pagination
        [(page)]="page"
        [pageSize]="pageSize"
        [collectionSize]="items.length"></ng-kit-pagination>
    `,
  });

  CUSTOM_CSS = Snippet({
    lang: 'css',
    code: `
      ng-kit-pagination li {
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
      <ng-kit-pagination>
        <ng-template xmPaginationFirst>First</ng-template>
        <ng-template xmPaginationLast>Last</ng-template>
        <ng-template xmPaginationPrevious>Prev</ng-template>
        <ng-template xmPaginationNext>Next</ng-template>
        <ng-template xmPaginationEllipsis>...</ng-template>
        <ng-template xmPaginationNumber let-page>{{ page }}</ng-template>
      </ng-kit-pagination>
    `,
  });

  sections: Overview = {};

  constructor(demoList: DemoList) {
    this.sections = demoList.getOverviewSections('pagination');
  }
}
