import { Component } from '@angular/core';
import { XmPaginationConfig } from 'ng-kit';

@Component({
  selector: 'app-pagination-config',
  templateUrl: './pagination-config.html',
  styleUrls: ['./pagination-config.scss'],
  providers: [XmPaginationConfig] // add XmPaginationConfig to the component providers
})
export class PaginationConfigComponent {
  page = 4;

  constructor(config: XmPaginationConfig) {
    // customize default values of paginations used by this component tree
    config.size = 'sm';
    config.boundaryLinks = true;
  }
}
